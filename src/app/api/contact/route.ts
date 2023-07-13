import { NextResponse } from "next/server"

import sendEmail from "../../../../utils/email"

export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json()
  const to = process.env.MAIL_TO ?? "andrew@toddprod.com"

  // Send Email
  await sendEmail({
    subject: "New Contact Submission - B2 Tech Solutions",
    to,
    template: "contact",
    context: {
      name,
      email,
      phone,
      message,
    },
  })

  return NextResponse.json({
    message: "Contact Email Has Been Sent",
  })
}
