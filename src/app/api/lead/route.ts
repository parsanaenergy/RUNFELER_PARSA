import { NextResponse } from "next/server";
import { z } from "zod";

/**
 * Lead capture endpoint.
 * Validates and accepts lead submissions from the contact form and all
 * lead-gen CTAs across the site. In production this would forward to a CRM
 * (HubSpot/Salesforce) or persist to the database — here we validate and
 * acknowledge so the UX is fully functional.
 */

const schema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(160),
  phone: z.string().min(6).max(40),
  purpose: z.string().min(1).max(60),
  message: z.string().min(10).max(4000),
});

// In-memory store for demo purposes (would be DB/CRM in production)
const leads: Array<z.infer<typeof schema> & { receivedAt: string }> = [];

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Validation failed", issues: parsed.error.issues },
      { status: 422 },
    );
  }

  const lead = { ...parsed.data, receivedAt: new Date().toISOString() };
  leads.push(lead);
  console.log("[lead] new submission:", lead.purpose, lead.email);

  return NextResponse.json({ ok: true, message: "Lead received" }, { status: 201 });
}

export async function GET() {
  return NextResponse.json({ ok: true, count: leads.length });
}
