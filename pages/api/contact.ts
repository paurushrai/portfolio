import type { NextApiRequest, NextApiResponse } from "next";

const TO_EMAIL = "paurushrai96@gmail.com";
const FROM_EMAIL = "contact@paurushrai.in";

const HTML_ESCAPES: Record<string, string> = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	'"': "&quot;",
	"'": "&#39;",
};

function escapeHtml(value: string): string {
	return value.replace(/[&<>"']/g, (char) => HTML_ESCAPES[char]);
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
): Promise<void> {
	if (req.method !== "POST") {
		res.status(405).send("Method not allowed");
		return;
	}

	const { name, email, message } = req.body as {
		name?: string;
		email?: string;
		message?: string;
	};

	if (!name?.trim() || !email?.trim() || !message?.trim()) {
		res.status(422).send("name, email, and message are required");
		return;
	}

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		res.status(422).send("Invalid email address");
		return;
	}

	const apiKey = process.env.RESEND_API_KEY;
	if (!apiKey) {
		res.status(503).send("Email service not configured");
		return;
	}

	const safeName = escapeHtml(name);
	const safeEmail = escapeHtml(email);
	const safeMessage = escapeHtml(message);

	const resendRes = await fetch("https://api.resend.com/emails", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${apiKey}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			from: FROM_EMAIL,
			to: TO_EMAIL,
			reply_to: email,
			subject: `Portfolio message from ${name}`,
			text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
			html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#18181b">
          <h2 style="font-size:20px;font-weight:700;margin-bottom:4px">New message from your portfolio</h2>
          <p style="margin:0 0 24px;color:#71717a;font-size:14px">Sent via paurushrai.in/contact</p>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;font-size:14px">
            <tr>
              <td style="padding:8px 12px;background:#f4f4f5;border-radius:4px 0 0 4px;font-weight:600;width:72px">Name</td>
              <td style="padding:8px 12px;border:1px solid #e4e4e7;border-left:none;border-radius:0 4px 4px 0">${safeName}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px;background:#f4f4f5;font-weight:600">Email</td>
              <td style="padding:8px 12px;border:1px solid #e4e4e7;border-left:none"><a href="mailto:${safeEmail}" style="color:#2563eb">${safeEmail}</a></td>
            </tr>
          </table>
          <div style="padding:16px;background:#f4f4f5;border-radius:6px;font-size:14px;line-height:1.6;white-space:pre-wrap">${safeMessage}</div>
          <p style="margin-top:24px;font-size:12px;color:#a1a1aa">Reply directly to this email to respond to ${safeName}.</p>
        </div>
      `,
		}),
	});

	if (!resendRes.ok) {
		const errText = await resendRes.text();
		console.error("[Resend] API error:", resendRes.status, errText);
		res.status(500).send("Failed to send message");
		return;
	}

	res.status(200).end();
}
