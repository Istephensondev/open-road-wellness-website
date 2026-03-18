import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.log('RESEND_API_KEY not found')
      return NextResponse.json({ success: true, note: 'no_api_key' })
    }

    const resend = new Resend(apiKey)
    const toEmail = process.env.CONTACT_EMAIL || 'wildeasewellness@gmail.com'

    const result = await resend.emails.send({
      from: 'Open Road Wellness <onboarding@resend.dev>',
      to: toEmail,
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

    console.log('Resend result:', result)
    return NextResponse.json({ success: true, result })
  } catch (error) {
    console.error('Newsletter signup error:', error)
    return NextResponse.json(
      { error: 'Failed to process signup', details: String(error) },
      { status: 500 }
    )
  }
}
