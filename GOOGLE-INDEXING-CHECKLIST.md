# Google Search Indexing Checklist
## For "Luxury Interior Designers in Bangalore"

**Status as of:** December 4, 2025  
**Target:** Rank #1 for "luxury interior designers in bangalore" on Google

---

## ✅ Pre-Indexing Tasks (Complete These First)

- [x] **Domain Setup**
  - [x] CNAME corrected to single entry: `www.samsinteriors.com`
  - [x] GitHub Pages HTTPS enabled (or pending certificate renewal)
  - [x] DNS records configured in GoDaddy

- [x] **Technical SEO**
  - [x] Sitemap created & updated: `sitemap.xml` (12 URLs)
  - [x] Robots.txt configured: allows crawlers + includes sitemap
  - [x] Meta tags on all pages (title, description, keywords)
  - [x] Open Graph & Twitter Card tags
  - [x] LocalBusiness schema with Bangalore location

- [x] **Content**
  - [x] Bangalore landing page: `interior-designers-bangalore.html`
  - [x] Hyderabad landing page: `interior-designers-hyderabad.html`
  - [x] Blog articles: 2 case studies + guides
  - [x] Services page with local keywords
  - [x] Portfolio & testimonials

- [x] **Performance**
  - [x] Mobile responsive (tested)
  - [x] Images optimized (WebP + JPG variants)
  - [x] Draggable contact widget (improved UX)

---

## 📋 Google Search Console Setup (DO THIS NOW)

### Phase 1: Verification (1-2 days)
- [ ] **Step 1:** Visit https://search.google.com/search-console
- [ ] **Step 2:** Sign in with Google account
- [ ] **Step 3:** Click "+ Add Property"
- [ ] **Step 4:** Choose "Domain property"
- [ ] **Step 5:** Enter apex domain: `samsinteriors.com`
- [ ] **Step 6:** Get DNS TXT verification record from Google
- [ ] **Step 7:** Add TXT record in GoDaddy DNS:
  - Name: `@`
  - Type: TXT
  - Value: `google-site-verification=XXXXXX` (from GSC)
- [ ] **Step 8:** Return to GSC and click "Verify"
- [ ] **Step 9:** Confirm verification success message

**⏱️ Expected Time:** 5–30 minutes

---

### Phase 2: Sitemap Submission (Immediate)
- [ ] **Step 1:** In GSC, go to "Sitemaps" (left sidebar)
- [ ] **Step 2:** Enter: `sitemap.xml`
- [ ] **Step 3:** Click "Submit"
- [ ] **Step 4:** Confirm: "Sitemap submitted successfully"
- [ ] **Step 5:** Check "Coverage" report — should show ~12 URLs indexed

**⏱️ Expected Time:** 5 minutes  
**Crawl Time:** 24–48 hours for initial indexing

---

### Phase 3: Request Indexing (High-Priority Pages)
- [ ] **Step 1:** In GSC, go to "URL Inspection" (top bar search)
- [ ] **Step 2:** Enter URL and click "Request Indexing":
  1. https://www.samsinteriors.com/
  2. https://www.samsinteriors.com/interior-designers-bangalore.html
  3. https://www.samsinteriors.com/services.html
  4. https://www.samsinteriors.com/portfolio.html
  5. https://www.samsinteriors.com/about.html
  6. https://www.samsinteriors.com/blog/modular-kitchen-guide-bangalore.html
  7. https://www.samsinteriors.com/blog/bangalore-case-study-flat1.html

**⏱️ Expected Time:** 3-5 minutes  
**Indexing Time:** 1–7 days per page

---

## 🔍 Monitor Indexing Progress

### Week 1 (After Submission)
- [ ] Check **Coverage** report daily
  - Expected: 0–6 indexed pages initially
  - Gradual increase to 12 over 3-5 days
- [ ] Check for crawl errors or warnings in **Coverage**
- [ ] Monitor **Core Web Vitals** (should show no issues)

### Week 2–4 (After Indexing)
- [ ] Check **Performance** tab for:
  - [ ] Impressions for "luxury interior designers in bangalore"
  - [ ] Click-through rate (CTR)
  - [ ] Average position (ranking)
  - [ ] Identify which queries drive traffic
- [ ] Monitor ranking position for target keywords:
  - "luxury interior designers in bangalore" (Goal: Top 10)
  - "interior designers bangalore" (Goal: Top 20)
  - "best interior designers bangalore" (Goal: Top 15)

### Month 2–3 (Ongoing Optimization)
- [ ] Analyze low-CTR queries in Performance tab
- [ ] Improve page titles/descriptions for low-performing queries
- [ ] Create new content targeting high-impression, low-CTR keywords
- [ ] Build backlinks to priority pages (guest posts, local directories)
- [ ] Monitor ranking improvements

---

## 📊 Expected Results Timeline

| Timeframe | Expected Progress |
|-----------|-------------------|
| **Day 0–1** | GSC verification complete |
| **Day 1–2** | Sitemap submitted; initial crawl |
| **Day 2–7** | Pages begin appearing in index |
| **Week 2** | 8–12 URLs indexed; first impressions appear in Performance |
| **Week 3–4** | 12/12 URLs indexed; ranking position data available |
| **Month 2** | Target keywords showing in search results (positions 20–100) |
| **Month 3–6** | Gradual ranking improvements (with content optimization) |
| **Month 6–12** | Expected: Top 20–50 for "luxury interior designers in bangalore" |

---

## 🚀 Content Optimization for Ranking Growth

### Quick Wins (Implement While GSC Processes)
- [ ] Add internal links:
  - Homepage → Bangalore page
  - Bangalore page → Services (local)
  - Services → Contact (strong CTA)
- [ ] Add FAQ schema to services page
- [ ] Expand blog with 2–3 more local articles:
  - "Luxury Villa Interiors in Bangalore"
  - "Office Interior Design in Bangalore"
  - "Sustainable Luxury Home Design"
- [ ] Build local backlinks:
  - Submit to Justdial, LocalCircles, Sulekha
  - Guest post on Bangalore design blogs
  - Contact interior design directories

### Medium-Term (Month 2–3)
- [ ] Create comparison content: "Sam's Interiors vs [Local Competitors]"
- [ ] Add video testimonials from Bangalore clients
- [ ] Build location-specific pages for top Bangalore areas:
  - Sarjapura
  - Koramangala
  - Jayanagar
  - Whitefield
- [ ] Launch email newsletter with SEO-friendly content

### Long-Term (Month 3–6)
- [ ] Implement structured data (FAQs, reviews, products)
- [ ] Build authority with industry partnerships
- [ ] Create resource hub (calculators, guides, tools)
- [ ] Develop video content (home tours, design tips)

---

## ⚠️ Critical Tasks Before Submitting to GSC

**MUST FIX:**
1. [ ] Verify HTTPS is working:
   - Open https://www.samsinteriors.com/ in browser
   - Should show padlock icon (Secure)
   - If error persists, contact GitHub Pages support
2. [ ] Confirm CNAME is set to `www.samsinteriors.com` only
3. [ ] Test sitemap is accessible: https://www.samsinteriors.com/sitemap.xml
4. [ ] Verify robots.txt allows indexing: https://www.samsinteriors.com/robots.txt

---

## 📞 Troubleshooting

| Issue | Solution |
|-------|----------|
| GSC won't verify domain | Try HTML file verification method (upload verification file to repo) |
| Sitemap shows "error" | Check XML syntax, ensure all URLs are valid with https:// |
| Pages not indexed after 2 weeks | Check Coverage report for errors; request indexing manually via URL Inspection |
| HTTPS certificate error | Verify CNAME is single entry; enable "Enforce HTTPS" in GitHub Settings > Pages |

---

## 📈 Success Metrics

Track these KPIs monthly in Google Search Console:

| Metric | Current | Target (3 months) |
|--------|---------|-------------------|
| **Pages Indexed** | 0 | 12 |
| **Impressions (all keywords)** | 0 | 500+ |
| **Impressions ("luxury interior designers bangalore")** | 0 | 50+ |
| **CTR (average)** | — | >3% |
| **Position (target keyword)** | Not ranked | Top 50 |
| **Organic traffic** | 0 | 20+ sessions/month |

---

## 🎯 Action Items (Today)

1. **Verify HTTPS is working** — open https://www.samsinteriors.com/ in browser
2. **Go to Google Search Console** — https://search.google.com/search-console
3. **Add Property** using DNS verification method (domains are faster)
4. **Submit Sitemap** once verified
5. **Request Indexing** for 7 high-priority pages

**Estimated time to complete:** 30 minutes  
**Estimated time to first results:** 1–2 weeks

---

## 📚 Reference Links

- **Google Search Console:** https://search.google.com/search-console
- **Google Keyword Planner:** https://ads.google.com/home/tools/keyword-planner
- **Google Mobile-Friendly Test:** https://search.google.com/test/mobile-friendly
- **Schema.org Validator:** https://validator.schema.org/
- **Lighthouse Audit:** Built into Chrome DevTools (F12)

---

**Last Updated:** December 4, 2025  
**Next Review:** December 11, 2025 (1 week after submission)

