import { NextResponse } from 'next/server'
import { escapeHtml, sendTransactionalEmail } from '@/lib/send-email'

export async function POST(request: Request) {
  try {
    const { name, email, service, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const serviceLabels: Record<string, string> = {
      'chair-yoga': 'Chair Yoga — Private or Small Group',
      'gentle-dance': 'Gentle Dance & Movement',
      'hypnosis': 'Hypnosis',
      'sound-bath': 'Sound Bath',
      'mini-transformation': 'Mini Transformation',
      'smoke-free': 'Smoke-Free Transformation',
      'weight-loss': 'Weight Loss & Healthy Habits',
      'anxiety-relief': 'Anxiety & Stress Relief',
      'confidence': 'Confidence & Self-Esteem',
      'facility-booking': 'Chair Yoga for Senior Living Communities',
      'other': 'Other / Not Sure'
    }

    const safeName = escapeHtml(String(name))
    const safeEmail = escapeHtml(String(email))
    const safeService = escapeHtml(serviceLabels[service] || 'Not specified')
    const safeMessage = escapeHtml(String(message))

    await sendTransactionalEmail({
      replyTo: String(email),
      subject: `New Contact: ${name} - ${serviceLabels[service] || 'General Inquiry'}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #78350f;">New Contact Form Submission</h2>
          <div style="background: #fef3c7; padding: 20px; border-radius: 12px; margin: 20px 0;">
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Service Interest:</strong> ${safeService}</p>
          </div>
          <div style="background: #f5f5f4; padding: 20px; border-radius: 12px;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${safeMessage}</p>
          </div>
          <p style="color: #78716c; font-size: 14px; margin-top: 20px;">
            Reply directly to this email to respond to ${safeName}.
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
