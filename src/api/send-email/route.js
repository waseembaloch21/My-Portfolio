import nodemailer from 'nodemailer';

export async function POST(req) {
  try {

    const { name, email, message } = await req.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or use your email provider's SMTP
      auth: {
        user: process.env.EMAIL_USER, // your Gmail or other email
        pass: process.env.EMAIL_PASS  // app-specific password or real password (not recommended)
      }

    });

    // Setup email data
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'waseemrauf672@gmail.com',
      subject: `New Contact Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>New Message from Portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
      `,
    };

    // Send mail
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent:", info.response);
    return Response.json({ success: true });
  } catch (error) {
    console.error("Email sending failed:", error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
