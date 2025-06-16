import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json()

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    // Send email to C3 Labs
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: "New Contact Form Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    })

    // Send thank you email to the user
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "Thank you for contacting C3 Labs",
      text: `
        Dear ${name},

        Thank you for reaching out to C3 Labs. We have received your message and will be in touch shortly.

        In the meantime, you can follow us on Instagram for more updates: https://www.instagram.com/c3labs/

        Best regards,
        The C3 Labs Team
      `,
    })

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
