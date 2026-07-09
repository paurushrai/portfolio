import type { NextApiRequest, NextApiResponse } from "next";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import handler from "./contact";

type MockRes = NextApiResponse & {
  statusCode: number;
  body: string | undefined;
};

function createRes(): MockRes {
  const res = {
    statusCode: 0,
    body: undefined as string | undefined,
    status(code: number) {
      res.statusCode = code;
      return res;
    },
    send(payload: string) {
      res.body = payload;
      return res;
    },
    end() {
      return res;
    },
  };
  return res as unknown as MockRes;
}

function createReq(overrides: Partial<NextApiRequest> = {}): NextApiRequest {
  return {
    method: "POST",
    headers: { host: "paurushrai.in", origin: "https://paurushrai.in" },
    body: {},
    ...overrides,
  } as NextApiRequest;
}

const validBody = {
  name: "Jane Smith",
  email: "jane@company.com",
  message: "Hello there, I would like to talk.",
};

describe("contact handler", () => {
  beforeEach(() => {
    process.env.RESEND_API_KEY = "test-key";
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => new Response(null, { status: 200 })),
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("should reject non-POST methods with 405", async () => {
    const res = createRes();
    await handler(createReq({ method: "GET" }), res);
    expect(res.statusCode).toBe(405);
    expect(fetch).not.toHaveBeenCalled();
  });

  it("should block cross-origin requests with 403", async () => {
    const res = createRes();
    await handler(
      createReq({
        headers: { host: "paurushrai.in", origin: "https://evil.example" },
        body: validBody,
      }),
      res,
    );
    expect(res.statusCode).toBe(403);
    expect(fetch).not.toHaveBeenCalled();
  });

  it("should silently accept honeypot submissions without sending mail", async () => {
    const res = createRes();
    await handler(
      createReq({ body: { ...validBody, company: "AcmeBot" } }),
      res,
    );
    expect(res.statusCode).toBe(200);
    expect(fetch).not.toHaveBeenCalled();
  });

  it("should reject missing required fields with 422", async () => {
    const res = createRes();
    await handler(createReq({ body: { name: "", email: "", message: "" } }), res);
    expect(res.statusCode).toBe(422);
    expect(fetch).not.toHaveBeenCalled();
  });

  it("should reject an over-length message with 422", async () => {
    const res = createRes();
    await handler(
      createReq({ body: { ...validBody, message: "a".repeat(5001) } }),
      res,
    );
    expect(res.statusCode).toBe(422);
    expect(fetch).not.toHaveBeenCalled();
  });

  it("should reject an invalid email with 422", async () => {
    const res = createRes();
    await handler(createReq({ body: { ...validBody, email: "not-an-email" } }), res);
    expect(res.statusCode).toBe(422);
    expect(fetch).not.toHaveBeenCalled();
  });

  it("should send mail and return 200 for a valid submission", async () => {
    const res = createRes();
    await handler(createReq({ body: validBody }), res);
    expect(res.statusCode).toBe(200);
    expect(fetch).toHaveBeenCalledOnce();
  });

  it("should return 502 when the Resend request throws", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => {
        throw new Error("network down");
      }),
    );
    const res = createRes();
    await handler(createReq({ body: validBody }), res);
    expect(res.statusCode).toBe(502);
  });
});
