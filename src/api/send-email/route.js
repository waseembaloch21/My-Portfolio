import { sendEmail } from "../../lib/resend";

export async function POST(req) {
  try {
    const { to, name, subject, message } = await req.json();

    // Validate required fields
    if (!to || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "Missing parameters: 'to', 'subject', and 'message' are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    console.log("Sending email to:", to);

    // Send the email using the sendEmail function
    const emailResponse = await sendEmail({ to, name: name || "there", subject, message });

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in POST /api/send-email:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email. Please try again later." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
