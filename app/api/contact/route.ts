import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: Request) {
  try {
    const { name, email, service, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (!resend) {
      console.log('Contact form submission (email not configured):', { name, email, service, message })
      return NextResponse.json({ success: true })
    }

    const serviceLabels: Record<string, string> = {
      'hypnosis': 'Hypnosis',
      'intuitive-readings': 'Intuitive Readings',
      'sound-bath': 'Sound Bath',
      'package': 'Package Deal',
      'other': 'Other / Not Sure'
    }

    await resend.emails.send({
      from: 'Open Road Wellness <hello@send.openroadwellness.org>',
      to: process.env.CONTACT_EMAIL || 'hello@openroadwellness.com',
      replyTo: email,
      subject: `New Contact: ${name} - ${serviceLabels[service] || 'General Inquiry'}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #78350f;">New Contact Form Submission</h2>
          <div style="background: #fef3c7; padding: 20px; border-radius: 12px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Service Interest:</strong> ${serviceLabels[service] || 'Not specified'}</p>
          </div>
          <div style="background: #f5f5f4; padding: 20px; border-radius: 12px;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #78716c; font-size: 14px; margin-top: 20px;">
            Reply directly to this email to respond to ${name}.
          </p>
        </div>
      `
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
