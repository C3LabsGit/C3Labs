import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { name, email, phone, linkedin, instagram, facebook, contactReason, message } = await req.json()

    // Validate required fields
    if (!name || !email || !phone || !linkedin || !message || !contactReason) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

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

    console.log("Contact form submission received:", contactInfo)

    // Check Twilio configuration
    const twilioSid = process.env.TWILIO_ACCOUNT_SID
    const twilioToken = process.env.TWILIO_AUTH_TOKEN
    const twilioPhone = process.env.TWILIO_PHONE_NUMBER
    const chuksPhone = process.env.CHUKS_PHONE
    const uchennaPhone = process.env.UCHENNA_PHONE

    console.log("Twilio config check:", {
      hasSid: !!twilioSid,
      hasToken: !!twilioToken,
      hasTwilioPhone: !!twilioPhone,
      hasChuksPhone: !!chuksPhone,
      hasUchennaPhone: !!uchennaPhone,
    })

    // Send SMS notifications using Twilio REST API directly
    if (twilioSid && twilioToken && twilioPhone) {
      try {
        console.log("Using Twilio REST API directly")

        const auth = Buffer.from(`${twilioSid}:${twilioToken}`).toString("base64")
        const smsMessage = `New C3 Labs contact: ${name} (${email}) - ${contactReason}. Phone: ${phone}, LinkedIn: ${linkedin}. Message: ${message.substring(0, 100)}${message.length > 100 ? "..." : ""}`

        console.log("Preparing to send SMS with message length:", smsMessage.length)

        // Send to team members
        const teamNumbers = [chuksPhone, uchennaPhone].filter(Boolean)
        console.log("Team numbers to notify:", teamNumbers.length)

        for (const phoneNumber of teamNumbers) {
          if (phoneNumber) {
            try {
              console.log(`Sending SMS to team member: ${phoneNumber.substring(0, 5)}...`)

              const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`, {
                method: "POST",
                headers: {
                  Authorization: `Basic ${auth}`,
                  "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                  From: twilioPhone,
                  To: phoneNumber,
                  Body: smsMessage,
                }),
              })

              if (response.ok) {
                const result = await response.json()
                console.log(`SMS sent successfully to ${phoneNumber.substring(0, 5)}..., SID: ${result.sid}`)
              } else {
                const errorText = await response.text()
                console.error(`Failed to send SMS to ${phoneNumber.substring(0, 5)}...:`, {
                  status: response.status,
                  statusText: response.statusText,
                  error: errorText,
                })
              }
            } catch (smsError) {
              console.error(`SMS error for ${phoneNumber.substring(0, 5)}...:`, smsError)
            }
          }
        }

        // Send thank you SMS to user
        if (phone && phone.length >= 10) {
          try {
            console.log(`Sending thank you SMS to user: ${phone.substring(0, 5)}...`)

            const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`, {
              method: "POST",
              headers: {
                Authorization: `Basic ${auth}`,
                "Content-Type": "application/x-www-form-urlencoded",
              },
              body: new URLSearchParams({
                From: twilioPhone,
                To: phone,
                Body: `Hi ${name}! Thank you for contacting C3 Labs. We received your message about ${contactReason} and will get back to you soon. - C3 Labs Team`,
              }),
            })

            if (response.ok) {
              const result = await response.json()
              console.log(`Thank you SMS sent successfully to user, SID: ${result.sid}`)
            } else {
              const errorText = await response.text()
              console.error("Failed to send thank you SMS to user:", {
                status: response.status,
                statusText: response.statusText,
                error: errorText,
              })
            }
          } catch (userSmsError) {
            console.error("SMS error for user:", userSmsError)
          }
        } else {
          console.log("User phone number invalid or too short:", phone)
        }
      } catch (twilioError) {
        console.error("Twilio API error:", twilioError)
        return NextResponse.json(
          {
            error: "SMS sending failed",
            details: twilioError instanceof Error ? twilioError.message : "Unknown Twilio API error",
          },
          { status: 500 },
        )
      }
    } else {
      console.log("Twilio not configured - missing credentials")
      return NextResponse.json(
        {
          error: "SMS service not configured",
          details: "Missing Twilio credentials",
        },
        { status: 500 },
      )
    }

    return NextResponse.json(
      {
        message: "Contact form submitted successfully",
        debug: {
          twilioConfigured: !!(twilioSid && twilioToken && twilioPhone),
          teamMembersConfigured: !!(chuksPhone && uchennaPhone),
        },
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      {
        error: "Failed to process contact form",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
