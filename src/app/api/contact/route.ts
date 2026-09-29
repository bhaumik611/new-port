import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In production, integration with Resend / Formspree or custom SMTP can be plugged here
    // Example:
    // await resend.emails.send({ from: 'onboarding@resend.dev', to: 'patelbhaumik6115@gmail.com', ... })

    console.log(`[Contact Form Received] From: ${name} <${email}> | Subject: ${subject}`);

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error handling contact message:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
