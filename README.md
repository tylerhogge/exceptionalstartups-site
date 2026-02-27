# Exceptional Startups — Static Site

A free replacement for your Squarespace site, deployable to Vercel in minutes.

## 🚀 Deploy to Vercel (free)

1. Go to [vercel.com](https://vercel.com) and sign in (use your GitHub account)
2. Click **"Add New Project"**
3. Choose **"Upload"** (or drag-and-drop this entire folder)
4. Click Deploy — done!
5. In Vercel settings, add your custom domain `exceptionalstartups.com`

## ⚠️ Before You Cancel Squarespace

Do these things **FIRST** while Squarespace is still active:

1. **Export your email list** — Go to Squarespace → Marketing → Email Campaigns → export your subscriber list as CSV
2. **Download your images** — The VC logos and site images are currently served from Squarespace's CDN. Once you cancel, those URLs will break. Download them and host them somewhere (Cloudflare Images, Vercel's `/public` folder, etc.)

## 📧 Wiring Up the Newsletter Form

The email signup forms currently show a "Thank you" message but don't actually send emails. You need to connect an email provider:

- **Mailchimp**: Create a form, copy their embedded HTML form action URL, replace the `<form>` tag in `index.html` and `newsletter/index.html`
- **Beehiiv**: Use their embed widget code
- **Kit (ConvertKit)**: Use their inline form embed

## 📁 File Structure

```
/
├── index.html          → Homepage
├── about/
│   └── index.html      → About page
├── list-2025/
│   └── index.html      → 2025 List (embeds your Vercel app)
├── list-2024/
│   └── index.html      → 2024 List (embeds your Vercel app)
├── newsletter/
│   └── index.html      → Newsletter signup page
└── vercel.json         → Vercel routing config
```

## 🎨 Design Notes

- Font: **Barlow** (Google Fonts) — free substitute for Pragmatica Extended
- Lime green: `hsl(67.39deg, 95.83%, 71.76%)`
- The 2024 and 2025 lists remain embedded from your existing Vercel apps — no changes needed there!
