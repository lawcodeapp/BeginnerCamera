# Beginner Cam website

A static landing page (HTML, CSS, JavaScript, no build step) for GitHub Pages or any static host.

```
website/
  index.html        landing page (hero, how it works, features, screens, FAQ, download)
  privacy.html      privacy policy (draft, review before publishing)
  terms.html        terms of use (draft, review before publishing)
  404.html          not-found page (GitHub Pages uses it automatically)
  download.html     short link page for QR codes and bios (sends phones to their store)
  support.html      support page and FAQ
  guides/           composition guides (hub plus six articles), images in assets/guides/
  css/style.css     all styles
  js/main.js        sticky download bar, scroll reveals, gallery arrows
  assets/           icon, screenshots, social share image
  robots.txt, sitemap.xml, site.webmanifest, favicon.ico, apple-touch-icon.png, .nojekyll
```

## Release day: the iPhone app goes live

The App Store links already point to `https://apps.apple.com/app/id6823768363`. Until the app is out, the App Store buttons show "· soon" and are not clickable. On the day it is live:

1. `js/main.js` and `download.html`: set `APP_STORE_LIVE = true` (one line in each).
2. `index.html`: uncomment the Smart App Banner line (`apple-itunes-app`).
3. `index.html` structured data: add `https://apps.apple.com/app/id6823768363` to the Organization `sameAs` list and the MobileApplication `downloadUrl` list.
4. Update `<lastmod>` in `sitemap.xml` for the pages you changed.

The sticky bar shows only the store for the visitor's phone (both on desktop); see `js/main.js`.

The site lives at `beginnercam.com` (the `CNAME` file); `www.beginnercam.com` redirects there. Canonical links, Open Graph, the sitemap and robots.txt all use `https://beginnercam.com`, so Google never sees a canonical URL that redirects (that confuses the search result, including its favicon). The app already links to `https://beginnercam.com/privacy.html`; its Terms of Use open Apple's Standard EULA, and Support opens an email to sopheareachte@gmail.com. The support page is at `https://beginnercam.com/support`; use it as the App Store Support URL.

## Also replace

- **Store badges.** The buttons are styled to look like the store badges. Apple and Google ask you to use their official artwork, so swap them in before launch: Apple's badge from <https://developer.apple.com/app-store/marketing/guidelines/> (App Store marketing tools) and Google's from <https://play.google.com/intl/en_us/badges/>.
- **Logo.** The golden ratio camera icon: `assets/icon.webp` (256px, rounded corners baked in) on the page, `assets/icon-192.png` / `icon-512.png` in the web manifest and `apple-touch-icon.png` (180px, square; iOS rounds it). The favicon is the separate golden spiral emblem on a navy circle: `favicon.ico` (16/32/48px) and `assets/favicon-96.png`, with the gold lines thickened at small sizes so they stay visible.
- **Screenshots.** `assets/screens/*.jpg` (and the `.webp` copies) are 600 px wide captures from the simulator. Retake both when the design changes. Photos showing people need model releases.
- **Privacy policy and terms.** Final for the app as of October 22, 2026 (no account, nothing uploaded, RevenueCat for purchases, local notifications, offer times in Keychain and iCloud). Update them whenever the app starts handling data differently (for example analytics or v2 ads), and keep them in step with the App Store privacy labels.

## Host on GitHub Pages

1. Create a new repository and put the **contents** of this folder at its root (so `index.html` is at the top level).
2. Push to the `main` branch.
3. In the repository: **Settings › Pages › Build and deployment**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
4. Custom domain: the `CNAME` file says `beginnercam.com`. In **Settings › Pages › Custom domain**, enter `beginnercam.com` and save. At your domain registrar, add a DNS record: `CNAME` for `www` pointing to `<your-github-user>.github.io`. To make `beginnercam.com` (without www) work too, add `A` records for the bare domain pointing to GitHub Pages' IP addresses (listed in GitHub's "Managing a custom domain" docs); GitHub then redirects it to www.
5. When the DNS check passes, tick **Enforce HTTPS**. The privacy link inside the app only works once the site is live.

All links inside the site are relative, so it works both on a custom domain and under a repository path.

## Search (SEO)

What is on the site:
- Home title matches the store name ("Beginner Cam: Aesthetic Guide"). Structured data on the home page: Organization (with the social profiles in `sameAs`), WebSite, MobileApplication (no ratings: Google needs real ones shown on the page) and the FAQ.
- Social links in every footer and on the download page (`rel="me"`). Update all of them together if a profile URL changes.
- Guides in `guides/`: hand-written, illustrated with the app's own guide overlays. Add new ones to the hub (`guides/index.html`), the home "Learn" section and `sitemap.xml`. Write each one by hand; mass-produced pages count as spam to Google.
- WebP screenshots with a JPG fallback (`<picture>`); keep both when retaking screenshots.
- No analytics or cookies (the privacy policy promises that); Search Console gives search data without them.

Checklist for the owner (accounts only you can reach):
- [x] Facebook username `beginnercamapp` (facebook.com/beginnercamapp).
- [x] Instagram: professional account, and Settings › Privacy › allow public photos and videos to appear in search engine results.
- [x] Every bio links to `https://beginnercam.com/download` (sends phones to their store); one display name everywhere: "Beginner Cam: Aesthetic Guide".
- [ ] Google Search Console: submit `https://beginnercam.com/sitemap.xml`, request indexing for the guide pages, and add the Instagram, TikTok and YouTube platform properties (search data for your posts).
- [ ] Bing Webmaster Tools: import the site from Search Console and submit the sitemap (Bing also feeds Copilot and ChatGPT search).
- [x] App Store Connect and Play Console: Marketing URL `https://beginnercam.com`, Support URL `https://beginnercam.com/support`.
- [ ] Post a short video for each guide on YouTube with the same title, and use the same words in captions ("photo composition", "rule of thirds", "aesthetic photos").
- [ ] Honest, disclosed outreach: Product Hunt, photography communities' self-promotion threads, phone-photography blogs.

## After it is live

- Submit `https://beginnercam.com/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
- Test the structured data with the Schema Markup Validator (validator.schema.org) and Google's Rich Results Test.
- Check the share preview with a link debugger (for example the Facebook Sharing Debugger or LinkedIn Post Inspector).
- Run Lighthouse in Chrome DevTools for performance, accessibility and SEO.

## Edit locally

Open `index.html` in a browser, or serve the folder so everything behaves like the live site:

```bash
cd website
python3 -m http.server 8000
# open http://localhost:8000
```
