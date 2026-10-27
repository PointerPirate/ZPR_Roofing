import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY || !process.env.RESEND_EMAIL_TO) {
    return Response.json(
      { error: "Email service is not configured. Please contact us by phone at (815) 904-9777." },
      { status: 500 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await request.json();
    const { fullName, email, phone, project } = body;

    if (!fullName || !email || !project) {
      return Response.json(
        {
          error: "Missing required fields: fullName, email, and project are required",
        },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Roofing Contact <no-reply@zprroofing.com>",
      to: [process.env.RESEND_EMAIL_TO!],
      subject: `Website Contact Form – New Inquiry from ${fullName}`,
      react: EmailTemplate({
        fullName,
        email,
        phone: phone || "Not provided",
        project,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ message: "Email sent successfully", data });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
