import { NextResponse } from "next/server";

type BookingRequest = {
  name?: string;
  email?: string;
  phone?: string;
  instrument?: string;
  experience?: string;
  preferredTime?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: BookingRequest;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!body.name?.trim() || !body.email?.trim() || !body.instrument) {
    return NextResponse.json(
      { error: "Name, email, and instrument are required." },
      { status: 400 }
    );
  }

  // Stub: log the request server-side. Swap this for a real integration
  // (Resend, Formspree, a CRM, or a booking service) when ready.
  console.log("[booking request]", {
    ...body,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
