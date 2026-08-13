import { NextResponse } from 'next/server'
import { escapeHtml, sendTransactionalEmail } from '@/lib/send-email'

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
    const notifyEmail = process.env.CONTACT_EMAIL || 'openroadwellnessco@gmail.com'
    let confirmationSent = false

    try {
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
      confirmationSent = true
    } catch (confirmationError) {
      console.error('Newsletter confirmation email error:', confirmationError)
    }

    if (subscriber.toLowerCase() !== notifyEmail.toLowerCase()) {
      await sendTransactionalEmail({
        to: notifyEmail,
        subject: 'New Newsletter Subscriber!',
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #7c3aed;">New Newsletter Subscriber</h2>
            <p>Someone just signed up for your newsletter:</p>
            <div style="background: #fef3c7; padding: 20px; border-radius: 10px; margin: 20px 0;">
              <p style="margin: 0; font-size: 18px;"><strong>Email:</strong> ${safeEmail}</p>
            </div>
          </div>
        `,
      })
    } else if (!confirmationSent) {
      throw new Error('Failed to send newsletter confirmation')
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
