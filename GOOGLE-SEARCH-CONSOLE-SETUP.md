# Google Search Console Setup & Indexing Guide
## For "Luxury Interior Designers in Bangalore"

**Last Updated:** December 4, 2025  
**Target Keyword:** Luxury Interior Designers in Bangalore  
**Primary Domain:** www.samsinteriors.com

---

## 🔍 Overview

This guide walks you through setting up Google Search Console (GSC), verifying your domain, submitting your sitemap, and requesting indexing for key pages targeting "luxury interior designers in bangalore" and related long-tail keywords.

---

## ✅ Pre-Submission Checklist

Before submitting to Google:

- [x] Sitemap created and valid: `sitemap.xml` ✓
- [x] Robots.txt configured: allows crawling ✓
- [x] CNAME fixed to single domain: `www.samsinteriors.com` ✓
- [x] Meta tags & Open Graph present on all pages ✓
- [x] LocalBusiness schema implemented ✓
- [x] HTTPS enabled (GitHub Pages + custom domain) ⏳ **Pending: certificate renewal**
- [x] Page titles include target keywords ✓
- [x] Meta descriptions optimized ✓
- [x] Internal linking structure in place ✓

**⚠️ CRITICAL:** HTTPS must be working before submitting to Google Search Console. The certificate issue from the duplicate CNAME should be resolved now that we've corrected it to a single canonical domain (`www.samsinteriors.com`).

---

## 🚀 Step 1: Verify HTTPS is Working

**Action:** Before proceeding, ensure HTTPS is active on your domain.

1. Open your browser and visit: **https://www.samsinteriors.com/**
2. Check the padlock icon in the address bar — it should show "Secure"
3. If the certificate error persists:
   - Go to **GoDaddy > DNS Management**
   - Ensure DNS records match GitHub Pages requirements:
     - For `www`: CNAME record pointing to `gujaratiraj1.github.io`
     - For apex (`samsinteriors.com`): A records for GitHub Pages (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153)
   - Return to **GitHub Repo > Settings > Pages** and enable "Enforce HTTPS"
   - Wait 5–15 minutes for certificate issuance

---

## 📋 Step 2: Access Google Search Console

1. Go to **https://search.google.com/search-console/about**
2. Sign in with your Google account (use the email associated with the business or create one if needed)
3. You'll be taken to the **GSC dashboard**

---

## 🔐 Step 3: Add Your Property & Verify Ownership

Google requires verification that you own the domain. Use the **DNS (CNAME) method** — it's the fastest for custom domains.

### Option A: DNS Verification (Recommended for GitHub Pages + Custom Domain)

1. In **Google Search Console**, click **+ Add Property**
2. Select **Domain property** (not URL prefix)
3. Enter your domain: `samsinteriors.com` (apex, without `www`)
4. Click **Continue**
5. Google will display a **DNS TXT record** to add. Copy it. Example:
   ```
   google-site-verification=abc123xyz...
   ```
6. Go to **GoDaddy > DNS Management > Add Record**
7. Add a **TXT record** with:
   - Name: `@` (or leave blank for apex)
   - Type: TXT
   - Value: `google-site-verification=abc123xyz...`
8. Click **Save**
9. Return to Google Search Console and click **Verify**
10. Google will check the TXT record (can take a few minutes)

### Option B: HTML File Verification (Fallback)

If DNS verification fails:
1. Download the verification HTML file from GSC
2. Upload it to your GitHub repo root (alongside `index.html`)
3. Commit and push: `git add google*.html && git commit -m "Add Google Search Console verification" && git push`
4. Verify in GSC

---

## 📡 Step 4: Submit Sitemap

1. In **Google Search Console**, go to **Sitemaps** (left sidebar)
2. In the input field, enter: `sitemap.xml`
3. Click **Submit**
4. Google will fetch and parse your sitemap
5. You should see a success message: "Sitemap submitted successfully"

**Expected:** All 12 URLs in your sitemap should be detected.

---

## 🔗 Step 5: Request Indexing for Key Pages

After sitemap submission, request immediate indexing for high-priority pages:

1. In **Google Search Console**, go to **URL Inspection** (top search bar)
2. Enter the first URL you want to prioritize:
   ```
   https://www.samsinteriors.com/interior-designers-bangalore.html
   ```
3. Click the **Request Indexing** button
4. Repeat for these high-priority pages:
   - `https://www.samsinteriors.com/` (homepage)
   - `https://www.samsinteriors.com/services.html`
   - `https://www.samsinteriors.com/portfolio.html`
   - `https://www.samsinteriors.com/about.html`
   - `https://www.samsinteriors.com/blog/modular-kitchen-guide-bangalore.html`
   - `https://www.samsinteriors.com/blog/bangalore-case-study-flat1.html`

**Expected Timeline:** Pages typically appear in Google Search results within 1–7 days after request.

---

## 📊 Step 6: Monitor Indexing Status

1. In **Google Search Console**, go to **Coverage** (left sidebar)
2. You'll see a breakdown:
   - **Indexed:** Pages Google has indexed
   - **Not indexed:** Pages Google hasn't crawled yet
   - **Excluded:** Pages excluded by robots.txt or meta tags
   - **Errors:** Pages with crawl issues

**Target:** All pages should move to "Indexed" within a week.

---

## 🎯 Step 7: Track Keyword Rankings

1. In **Google Search Console**, go to **Performance** (left sidebar)
2. Click **Queries** tab to see:
   - Search queries that drive traffic
   - Click-through rate (CTR)
   - Average position in search results
   - Impressions

**Monitor these keywords over time:**
- "luxury interior designers in bangalore"
- "interior designers bangalore"
- "best interior designers bangalore"
- "interior design services bangalore"
- "luxury home interiors bangalore"

---

## 🛠️ Step 8: Configure Google Search Console Settings

### Mobile Usability
1. Go to **Mobile Usability**
2. Check for errors (should show none)
3. Google will flag issues if buttons are too small, content is cramped, etc.

### Core Web Vitals
1. Go to **Core Web Vitals**
2. Monitor:
   - **Largest Contentful Paint (LCP):** < 2.5s ✓
   - **First Input Delay (FID):** < 100ms ✓
   - **Cumulative Layout Shift (CLS):** < 0.1 ✓
3. If you see poor scores, optimize images and defer non-critical JS

### International Targeting
1. Go to **Settings > International Targeting**
2. Set:
   - **Language:** English
   - **Country:** India (if you want to target locally)
3. This helps Google prioritize your site for Bangalore/India searches

---

## 📝 Step 9: On-Page SEO Checklist (Verify)

Ensure all pages have these elements optimized for "luxury interior designers in bangalore":

### Homepage (`index.html`)
- [ ] Title includes target keyword
- [ ] Meta description with CTA
- [ ] H1 contains keyword or synonym
- [ ] Internal links to services, portfolio, contact

### Interior Designers Bangalore Page (`interior-designers-bangalore.html`)
- [x] Title: "Best Interior Designers in Bangalore & Hyderabad | Sam's Interiors"
- [x] Meta: "Best interior designers in Bangalore..."
- [x] H1: "Best & Luxury Interior Designers in Bangalore & Hyderabad"
- [x] LocalBusiness schema with Bangalore location
- [x] Local phone number & address

### Services Page (`services.html`)
- [ ] Add section: "Luxury Interior Design Services in Bangalore"
- [ ] Include FAQs targeting long-tail keywords

### Blog Articles
- [x] **Modular Kitchen Guide:** Targets "modular kitchens bangalore"
- [x] **Case Study (Flat 1):** Targets "interior design projects bangalore"

---

## 🔄 Step 10: Link Building & Content Expansion

After indexing, grow organic search visibility:

1. **Build Local Backlinks:**
   - Contact Bangalore interior design blogs/directories
   - Submit to Bangalore business listings (Justdial, LocalCircles, etc.)
   - Guest post on local blogs

2. **Create More Content:**
   - FAQ page: "What do luxury interior designers cost in Bangalore?"
   - Location pages: Already have Bangalore & Hyderabad (good!)
   - Comparison posts: "Sam's Interiors vs [Competitor]"
   - Video content: Walkthrough of award-winning projects

3. **Optimize for Long-Tail Keywords:**
   - "Affordable luxury interior designers bangalore"
   - "Luxury villa interiors bangalore"
   - "Office interior design bangalore"
   - "Sustainable luxury interiors bangalore"

---

## 📈 Monitoring & Reporting

### Daily/Weekly Tasks
- Check **Google Search Console > Performance** for new queries
- Monitor **Coverage** for new crawl errors
- Track **Core Web Vitals** trends

### Monthly Tasks
- Review ranking positions for target keywords
- Analyze which pages drive the most impressions
- Identify low-CTR pages and improve titles/descriptions
- Check for new indexing issues

### Quarterly Tasks
- Conduct content gap analysis (missing keywords/topics)
- Audit internal linking strategy
- Review competitor rankings
- Plan new content pieces

---

## ⚠️ Troubleshooting

### Sitemap Not Appearing in GSC
**Solution:**
1. Verify `sitemap.xml` is accessible: `https://www.samsinteriors.com/sitemap.xml`
2. Check `robots.txt` contains: `Sitemap: https://www.samsinteriors.com/sitemap.xml`
3. Resubmit sitemap in GSC
4. Wait 24 hours

### Pages Not Indexed
**Solution:**
1. Check **Coverage** report for errors
2. Common issues:
   - Blocked by `robots.txt` (remove from disallow)
   - Duplicate content (use canonical URLs)
   - Low-quality content (improve word count, add images)
   - Redirect chains (fix to direct redirects)
3. Request indexing manually via **URL Inspection**

### Certificate/HTTPS Errors
**Solution:**
1. Verify CNAME is single entry: `www.samsinteriors.com` ✓ (just fixed)
2. In **GitHub > Settings > Pages**:
   - Enable "Enforce HTTPS"
   - Wait 5–15 minutes for certificate issuance
3. Check GoDaddy DNS has correct A + CNAME records
4. Test: Open `https://www.samsinteriors.com/` (should show padlock)

---

## 🎁 Quick Command Reference

### Check Sitemap Validity
```bash
# From project root
python -m http.server 8000
# Open http://localhost:8000/sitemap.xml in browser
# Should show XML with 12 URLs
```

### Test Robots.txt
```bash
# Open in browser
http://localhost:8000/robots.txt
# Should show allowance and sitemap URL
```

### Verify DNS Records (via CLI)
```bash
# On Windows PowerShell:
nslookup samsinteriors.com
# Should resolve to GoDaddy nameservers
```

---

## 📞 Support & Next Steps

1. **Complete HTTPS Fix:**
   - Verify certificate is active at `https://www.samsinteriors.com/`
   - If issues persist, contact GitHub Support or GoDaddy support

2. **Complete GSC Verification:**
   - Follow Steps 1–5 above
   - Allow 24–48 hours for initial crawl

3. **Monitor Rankings:**
   - After 1–2 weeks, check GSC Performance for "luxury interior designers in bangalore" impressions
   - Expect gradual ranking improvements over 4–12 weeks

4. **Iterate Content:**
   - Use GSC data to identify gaps
   - Create targeted content for high-impression, low-CTR queries
   - Link new content to existing pages

---

**Remember:** SEO is a long-term play. Consistent, quality content + technical optimization = sustainable organic growth. 🚀

