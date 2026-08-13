import { NextResponse } from 'next/server'
import { escapeHtml, sendTransactionalEmail } from '@/lib/send-email'

const OWNER_EMAIL = 'openroadwellnessco@gmail.com'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    const subscriber = String(email).trim()
    const safeEmail = escapeHtml(subscriber)

    await sendTransactionalEmail({
      to: process.env.CONTACT_EMAIL || OWNER_EMAIL,
      replyTo: subscriber,
      subject: `New Newsletter Subscriber: ${subscriber}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed;">New Newsletter Subscriber</h2>
          <p>Someone just signed up for the Open Road Wellness newsletter.</p>
          <div style="background: #fef3c7; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <p style="margin: 0; font-size: 18px;"><strong>Subscriber email:</strong> ${safeEmail}</p>
          </div>
          <p style="color: #666; font-size: 14px;">Reply to this email to reach them directly.</p>
        </div>
      `,
    })

    try {
      if (subscriber.toLowerCase() !== OWNER_EMAIL.toLowerCase()) {
        await sendTransactionalEmail({
          to: subscriber,
          subject: 'Thanks for subscribing to Open Road Wellness',
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #7c3aed;">You're on the list</h2>
              <p>Thank you for subscribing to the Open Road Wellness newsletter.</p>
              <p>I'll share monthly insights on chair yoga, gentle movement, and holistic wellness for seniors and individuals across Central Florida.</p>
              <p style="color: #666; font-size: 14px; margin-top: 24px;">If you didn't subscribe, you can ignore this email.</p>
            </div>
          `,
        })
      }
    } catch (confirmationError) {
      console.error('Newsletter confirmation email error:', confirmationError)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Newsletter signup error:', error)
    return NextResponse.json(
      { error: 'Failed to process signup' },
      { status: 500 }
    )
  }
}
