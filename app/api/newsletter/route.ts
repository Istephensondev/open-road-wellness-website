import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    if (!resend) {
      console.log('Newsletter signup (email not configured):', email)
      return NextResponse.json({ success: true })
    }

    // Send notification email to you
    await resend.emails.send({
      from: 'Open Road Wellness <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'openroadwellnessco@gmail.com',
      subject: 'New Newsletter Subscriber!',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed;">New Newsletter Subscriber</h2>
          <p>Someone just signed up for your newsletter:</p>
          <div style="background: #fef3c7; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <p style="margin: 0; font-size: 18px;"><strong>Email:</strong> ${email}</p>
          </div>
          <p style="color: #666; font-size: 14px;">Add this email to your mailing list to keep them updated!</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Newsletter signup error:', error)
    return NextResponse.json(
      { error: 'Failed to process signup' },
      { status: 500 }
    )
  }
}
