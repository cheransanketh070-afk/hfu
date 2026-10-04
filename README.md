# HFU Enterprise — Vercel-ready website

A responsive Next.js website concept for HFU Enterprise Ltd, designed as a modern UK logistics/courier brand experience.

## Included
- Homepage / commercial landing page
- Services page
- Fleet page with vehicle capacity data
- About page
- Contact page
- Quote request page with client-side validation and success state
- Responsive mobile navigation
- SEO metadata
- HFU logo/icon supplied in `public/hfu-icon.png`
- Vercel-compatible Next.js project

## Run locally
```bash
npm install
npm run dev
```
Then open http://localhost:3000.

## Production
```bash
npm run build
npm start
```

## Deploy to Vercel
Import this folder/repository into Vercel. The default Next.js settings are sufficient.

## Important: quote form
The current form is a polished frontend/demo submission flow. It intentionally does not send email or write to a CRM. For production, connect the form action to Formspree, Resend, a CRM webhook, or a Next.js server action/API route with the client's preferred email/CRM credentials.

## Source content
Company information, services, fleet specifications, contact details and locations were adapted from the existing HFU Enterprise website: https://hfuenterprise.com/

## Dependency security

The project pins Next.js to the patched 15.5 maintenance line and overrides nested PostCSS to a patched 8.5.x release. After extracting or replacing the project, run `npm install` and then `npm audit` to refresh and verify the local dependency tree. Avoid `npm audit fix --force` unless you have reviewed the major-version changes it proposes.

If Next.js reports that it found multiple lockfiles, check whether a stray `package-lock.json` exists in a parent folder (for example, your user profile). Only remove a parent lockfile if it is not used by another project. Run `npm run dev` from this project's folder.
