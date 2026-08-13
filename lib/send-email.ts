import { Resend } from "resend"

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export async function sendTransactionalEmail({
  subject,
  html,
  replyTo,
}: {
  subject: string
  html: string
  replyTo?: string
}) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error("Email is not configured")
  }

  const resend = new Resend(apiKey)
  const to = process.env.CONTACT_EMAIL || "openroadwellnessco@gmail.com"
  const fromAddresses = [
    "Open Road Wellness <hello@openroadwellness.org>",
    "Open Road Wellness <onboarding@resend.dev>",
  ]

  let lastError: Error | null = null

  for (const from of fromAddresses) {
    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo,
      subject,
      html,
    })

    if (!error) {
      return data
    }

    lastError = new Error(error.message)
    const unverified = /not verified/i.test(error.message)
    if (!unverified) {
      break
    }
  }

  throw lastError || new Error("Failed to send email")
}
