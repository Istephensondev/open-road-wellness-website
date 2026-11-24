import { Resend } from "resend"
import { SITE_EMAIL, SITE_NAME } from "@/lib/site"

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export async function sendTransactionalEmail({
  to,
  subject,
  html,
  replyTo,
}: {
  to?: string
  subject: string
  html: string
  replyTo?: string
}) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error("Email is not configured")
  }

  const resend = new Resend(apiKey)
  const recipient = to || SITE_EMAIL
  const fromAddresses = [
    `${SITE_NAME} <hello@5dunleashed.com>`,
    `${SITE_NAME} <onboarding@resend.dev>`,
  ]

  let lastError: Error | null = null

  for (const from of fromAddresses) {
    const { data, error } = await resend.emails.send({
      from,
      to: recipient,
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
