import nodemailer from "nodemailer"
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
  const user = process.env.GMAIL_USER || SITE_EMAIL
  const pass = process.env.GMAIL_APP_PASSWORD

  if (!pass) {
    throw new Error("Email is not configured")
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  })

  await transporter.sendMail({
    from: `"${SITE_NAME}" <${user}>`,
    to: to || SITE_EMAIL,
    replyTo,
    subject,
    html,
  })
}
