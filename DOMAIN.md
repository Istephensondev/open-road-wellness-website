# Domain cutover: 5dunleashed.com

The site now uses **https://www.5dunleashed.com** in code (`SITE_URL` in `lib/site.ts`). The live Vercel project still needs the new domain attached, and the old domain should redirect.

Do these steps in order. Do not redirect `openroadwellness.org` until `5dunleashed.com` is live.

## 1. Buy the domain

If you do not already own it, purchase **5dunleashed.com** from your registrar (Namecheap, GoDaddy, Google Domains / Squarespace, etc.).

## 2. Add the domain in Vercel

1. Open the Open Road Wellness / 5D Unleashed project in [Vercel](https://vercel.com).
2. Go to **Settings → Domains**.
3. Add `5dunleashed.com` and `www.5dunleashed.com`.
4. Set **www.5dunleashed.com** as the primary domain if Vercel offers that option.

## 3. Point DNS at Vercel

Vercel will show the exact records. Typical setup:

- `A` record for `@` → `76.76.21.21` (or the value Vercel displays)
- `CNAME` for `www` → `cname.vercel-dns.com`

Wait until both names show as **Valid**.

## 4. Redirect the old domain

Keep `openroadwellness.org` and `www.openroadwellness.org` on the **same Vercel project**.

Then add a **301 redirect** from the old host to the new one:

- In Vercel **Domains**, use the redirect option on `openroadwellness.org` → `https://www.5dunleashed.com`
- Redirect both apex and `www`

Old paths such as `/chair-yoga` already 301 to `/` in `next.config.mjs`.

## 5. Email (optional, later)

Contact still uses `openroadwellnessco@gmail.com`.

When you are ready:

1. Create `hello@5dunleashed.com` at your registrar or Google Workspace.
2. Verify `5dunleashed.com` in [Resend](https://resend.com).
3. The app already tries `5D Unleashed <hello@5dunleashed.com>` first, then falls back to the old `hello@openroadwellness.org` address and Resend’s onboarding sender.

## 6. After cutover

- Visit `https://www.5dunleashed.com` and confirm the homepage, `/hypnosis`, `/group-guided-meditation`, and `/sound-bath`.
- Visit `https://www.openroadwellness.org` and confirm it redirects.
- Visit `https://www.openroadwellness.org/chair-yoga` and confirm it lands on the new homepage.
- Update Instagram, TikTok, and YouTube handles in `lib/site.ts` when the new accounts exist.
