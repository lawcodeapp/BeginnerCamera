# Beginner Cam website

A static landing page (HTML, CSS, JavaScript, no build step) for GitHub Pages or any static host.

```
website/
  index.html        landing page (hero, how it works, features, screens, FAQ, download)
  privacy.html      privacy policy (draft, review before publishing)
  terms.html        terms of use (draft, review before publishing)
  404.html          not-found page (GitHub Pages uses it automatically)
  css/style.css     all styles
  js/main.js        sticky download bar, scroll reveals, gallery arrows
  assets/           icon, screenshots, social share image
  robots.txt, sitemap.xml, site.webmanifest, favicon.ico, apple-touch-icon.png, .nojekyll
```

## Before you publish: replace the placeholders

Search the folder for `YOUR_` and replace every match:

| Placeholder | Replace with | Where |
|---|---|---|
| `YOUR_APP_ID` | the number in your App Store link (`https://apps.apple.com/app/id1234567890`) | download buttons, Smart App Banner, structured data |
| `YOUR_PACKAGE` | your Android package name, once the app is on Google Play | Google Play buttons |

Until a store link is filled in, its button shows "· soon" and is not clickable, so the Google Play buttons (hero and final section) can stay as they are until Android ships. The sticky bar has only the App Store button.

The domain is set to `www.beginnercam.com` (canonical links, Open Graph, sitemap, robots, and the `CNAME` file). The app already links to `https://www.beginnercam.com/privacy.html`; its Terms of Use open Apple's Standard EULA, and Support opens an email to sopheareachte@gmail.com.

## Also replace

- **Store badges.** The buttons are styled to look like the store badges. Apple and Google ask you to use their official artwork, so swap them in before launch: Apple's badge from <https://developer.apple.com/app-store/marketing/guidelines/> (App Store marketing tools) and Google's from <https://play.google.com/intl/en_us/badges/>.
- **Logo.** The golden ratio camera icon: `assets/icon.webp` (256px, rounded corners baked in) on the page, `assets/icon-192.png` / `icon-512.png` in the web manifest and `apple-touch-icon.png` (180px, square; iOS rounds it). The favicon is the separate golden spiral emblem on a navy circle: `favicon.ico` (16/32/48px) and `assets/favicon-96.png`, with the gold lines thickened at small sizes so they stay visible.
- **Screenshots.** `assets/screens/*.jpg` are 600 px wide captures from the simulator. Retake them when the design changes. Photos showing people need model releases.
- **Privacy policy and terms.** Final for the app as of October 22, 2026 (no account, nothing uploaded, RevenueCat for purchases, local notifications, offer times in Keychain and iCloud). Update them whenever the app starts handling data differently (for example analytics or v2 ads), and keep them in step with the App Store privacy labels.

## Host on GitHub Pages

1. Create a new repository and put the **contents** of this folder at its root (so `index.html` is at the top level).
2. Push to the `main` branch.
3. In the repository: **Settings › Pages › Build and deployment**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
4. Custom domain: the `CNAME` file already says `www.beginnercam.com`. In **Settings › Pages › Custom domain**, enter `www.beginnercam.com` and save. At your domain registrar, add a DNS record: `CNAME` for `www` pointing to `<your-github-user>.github.io`. To make `beginnercam.com` (without www) work too, add `A` records for the bare domain pointing to GitHub Pages' IP addresses (listed in GitHub's "Managing a custom domain" docs); GitHub then redirects it to www.
5. When the DNS check passes, tick **Enforce HTTPS**. The privacy link inside the app only works once the site is live.

All links inside the site are relative, so it works both on a custom domain and under a repository path.

## After it is live

- Submit `https://www.beginnercam.com/sitemap.xml` in Google Search Console.
- Check the share preview with a link debugger (for example the Facebook Sharing Debugger or LinkedIn Post Inspector).
- Run Lighthouse in Chrome DevTools for performance, accessibility and SEO.

## Edit locally

Open `index.html` in a browser, or serve the folder so everything behaves like the live site:

```bash
cd website
python3 -m http.server 8000
# open http://localhost:8000
```
