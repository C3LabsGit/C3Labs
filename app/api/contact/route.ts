import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import twilio from "twilio"

const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

export async function POST(req: Request) {
  const { name, email, phone, linkedin, instagram, facebook, contactReason, message } = await req.json()

  // Validate required fields
  if (!name || !email || !phone || !linkedin || !message || !contactReason) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  const transporter = nodemailer.createTransporter({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    // Prepare contact information
    const contactInfo = `
Name: ${name}
Email: ${email}
Phone: ${phone}
LinkedIn: ${linkedin}
Instagram: ${instagram || "Not provided"}
Facebook: ${facebook || "Not provided"}
Contact Reason: ${contactReason}
Message: ${message}
    `

    // Send email to C3 Labs team
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission - ${contactReason}`,
      text: `New contact form submission received:\n\n${contactInfo}`,
    })

    // Send thank you email to the user
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "Thank you for contacting C3 Labs",
      text: `
Dear ${name},

Thank you for reaching out to C3 Labs. We have received your message regarding ${contactReason} and will be in touch shortly.

In the meantime, you can follow us on Instagram for more updates: https://www.instagram.com/c3labs/

Best regards,
The C3 Labs Team
      `,
    })

    // Send SMS to C3 Labs team members
    const smsMessage = `New C3 Labs contact: ${name} (${email}) - ${contactReason}. Phone: ${phone}, LinkedIn: ${linkedin}. Message: ${message.substring(0, 100)}${message.length > 100 ? "..." : ""}`

    // Send to both team members
    const teamNumbers = [process.env.CHUKS_PHONE, process.env.UCHENNA_PHONE].filter(Boolean)

    for (const phoneNumber of teamNumbers) {
      await twilioClient.messages.create({
        body: smsMessage,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: phoneNumber,
      })
    }

    // Send thank you SMS to the user
    await twilioClient.messages.create({
      body: `Hi ${name}! Thank you for contacting C3 Labs. We received your message about ${contactReason} and will get back to you soon. - C3 Labs Team`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phone,
    })

    return NextResponse.json({ message: "Contact form submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Failed to process contact form" }, { status: 500 })
  }
}
