import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, email, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['waseemrauf672@email.com'], // Change to your recipient email
      subject: `New contact message from ${name}`,
      reply_to: "waseemrauf672@gmail.com",
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    });

      return new Response(
      JSON.stringify({ success: true, data }),
      { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
