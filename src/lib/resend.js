import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({ to, name = "there", subject = "No Subject", message = "No additional message provided." }) => {
  try {
    const currentDate = new Date().toLocaleString("en-US", {
      timeZone: "UTC",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="color: #0056b3;">Hello ${name},</h2>
        <p style="font-size: 1rem;">${message}</p>
        <p style="font-size: 0.9rem; color: #555;">Sent on: ${currentDate}</p>
        <hr style="border: 1px solid #ddd;" />
        <p style="font-size: 0.85rem; color: #888; text-align: center;">
          This email was sent using Resend. If you did not request this email, please ignore it.
        </p>
      </div>
    `;

    const response = await resend.emails.send({
      from: "Onboarding@resend.dev", // Replace with your verified sender email
      to: "waseemrauf672@gmail.com", // FIXED: Now using the correct recipient email
      subject,
      html,
    });

    console.log("Email sent successfully:", response);
    return response;
  } catch (error) {
    console.error("Failed to send email:", error.message);
    throw new Error("Email sending failed. Please check the provided details and try again.");
  }
};
