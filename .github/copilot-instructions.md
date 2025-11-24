# GitHub Copilot Instructions for Sam's Interiors Website

## Project Overview

**Sam's Interiors & Architects** is a luxury interior design studio website showcasing award-winning residential and commercial projects. The site is a static HTML5/CSS3/JavaScript application with a focus on SEO optimization for "Luxury Interior Designers in Bangalore."

**Goal:** Rank #1 on Google for "Luxury Interior Designers in Bangalore" search term

## Technical Stack

- **Frontend:** HTML5, CSS3 (custom properties), Vanilla JavaScript (ES6+)
- **Architecture:** Static Site (no build tools, no framework)
- **Design System:** Playfair Display (headings), Inter (body), custom CSS variables
- **Responsive Design:** Mobile-first approach with breakpoints: 480px, 768px, 1024px
- **Deployment:** Static file hosting (GitHub Pages compatible)
- **Analytics:** Google Analytics (GA4) with ID: G-PGJJYRX9Z6
- **SEO:** LocalBusiness schema, Open Graph, Twitter Cards, XML sitemap

## Project Structure

```
Sam's/
├── index.html                 # Homepage (hero, portfolio preview, stats, testimonials)
├── about.html                 # About us, team, awards, philosophy
├── services.html              # Service offerings (Residential, Commercial, Hospitality)
├── portfolio.html             # Portfolio gallery with filtering
├── contact.html               # Contact form and information
├── blog.html                  # Design insights and tips
├── post.html                  # Individual blog post template
├── profile.html               # Team/profile information
├── 404.html                   # 404 error page
├── portfolio.json             # Portfolio data (items, galleries)
├── robots.txt                 # SEO crawler configuration
├── sitemap.xml                # XML sitemap for search engines
├── CNAME                       # Custom domain configuration
├── css/
│   └── styles.css             # Master stylesheet with design tokens
├── js/
│   ├── main.js                # Core functionality (nav, portfolio, widgets)
│   └── portfolio-data.js      # Portfolio data fallback
├── assets/
│   └── images/                # Logo, hero images, project photos
└── .github/
    └── copilot-instructions.md # This file
```

## Key Features

### 1. Hero Section
- Centered logo with translucent background
- Responsive image handling (mobile, tablet, desktop)
- Call-to-action button linking to contact form

### 2. Portfolio Gallery
- Dynamic loading from `portfolio.json` with fallback to `portfolio-data.js`
- Category filtering (All, Residential, Commercial, Hospitality)
- Featured video: "Full Interior Showcase" (assets/FullInterior vedio.mp4)
- Lightbox for image viewing
- Responsive grid layout

### 3. Floating Contact Widget
- Fixed position WhatsApp and Call buttons
- Responsive (shifts left when mobile nav is open)
- All pages included via `initContactWidget()` in main.js

### 4. Team Section (About Page)
- 2-column grid layout (max-width: 900px)
- Team member cards with images (400px height, centered)
- Equal-height cards with flexbox
- Includes: Santhosh Suriya (Founder), Venkat (CMO)

### 5. SEO Optimization
- **Meta Tags:** Description, keywords, Open Graph, Twitter Cards
- **Structured Data:** LocalBusiness schema with Bangalore location
- **XML Sitemap:** All pages indexed with priority levels
- **robots.txt:** Allows crawlers, specifies sitemap
- **Canonical URLs:** Self-referencing on all pages
- **Keywords:** Primary "Luxury Interior Designers in Bangalore"

## SEO Strategy

### Target Keyword
**Primary:** "Luxury Interior Designers in Bangalore"
**Secondary:** Award-winning, bespoke, premium, sustainable luxury
**Long-tail:** "Luxury interior design services", "High-end interior designers Bangalore"

### Implementation

1. **Title Tags (50-60 chars):** Include primary keyword in first 50 characters
   - Example: "Luxury Interior Designers in Bangalore | Sam's Interiors | Award-Winning Design"

2. **Meta Descriptions (155-160 chars):** Natural keyword integration with call-to-action
   - Example: "Sam's Interiors - Leading luxury interior designers in Bangalore. 150+ award-winning projects..."

3. **Structured Data:** LocalBusiness schema with:
   - Business name, address (Bangalore), phone, email
   - Service types: Interior Design, Residential, Commercial, Luxury
   - Area served: Bangalore, Hyderabad
   - Aggregate rating: 5 stars, 150+ reviews

4. **Content Optimization:**
   - H1 tags contain or relate to target keyword
   - Natural keyword distribution (2-3% density)
   - Internal linking structure
   - Image alt text with keywords

### Pages & Optimization Status

| Page | URL | Focus | Priority |
|------|-----|-------|----------|
| Homepage | index.html | Service overview, hero | 1.0 |
| Services | services.html | Interior design services | 0.8 |
| Portfolio | portfolio.html | Project showcase | 0.8 |
| About | about.html | Company story, awards, team | 0.7 |
| Contact | contact.html | Contact form, location | 0.7 |
| Blog | blog.html | Design insights, tips | 0.6 |
| Profile | profile.html | Team information | 0.5 |
| Post | post.html | Blog post template | 0.6 |

## Development Guidelines

### Code Standards

1. **HTML:**
   - Use semantic HTML5 elements (header, nav, main, article, section, footer)
   - Implement proper heading hierarchy (H1 > H2 > H3)
   - Always include alt attributes on images
   - Use ARIA labels for accessibility

2. **CSS:**
   - Use custom properties for design tokens (--color-*, --font-*, --spacing-*)
   - Mobile-first approach with min-width media queries
   - Maintain responsive breakpoints: 480px, 768px, 1024px
   - Prefix vendor-specific properties if needed

3. **JavaScript:**
   - Use vanilla JavaScript (no jQuery required)
   - Implement ES6+ features (arrow functions, const/let, template literals)
   - DOMContentLoaded event for initialization
   - MutationObserver for responsive nav widget positioning
   - Graceful degradation with fallback data

### File Naming Conventions

- **HTML files:** lowercase with hyphens (e.g., `portfolio.html`)
- **CSS files:** lowercase with hyphens (e.g., `styles.css`)
- **JavaScript files:** lowercase with hyphens (e.g., `main.js`, `portfolio-data.js`)
- **Image files:** Use descriptive names, avoid spaces (e.g., `hero-home-mobile.png`)
- **JSON files:** lowercase with hyphens (e.g., `portfolio.json`)

### Important Notes on File Paths

**Asset Image Filenames with Spaces:**
- Video file: `assets/FullInterior vedio.mp4` (note: "vedio" is misspelled, but keep as-is)
- Logo: `assets/images/Sam'sLogo.jpeg` (contains apostrophe)

These files must be referenced with URL encoding in code:
- Video: `getSafeAssetUrl('assets/FullInterior vedio.mp4')` → URL encoded with spaces
- Logo: `assets/images/Sam'sLogo.jpeg` (apostrophe in URLs is acceptable)

### Key JavaScript Functions

**Portfolio Management:**
- `loadPortfolioData()` - Fetch portfolio.json with fallback to portfolio-data.js
- `normalizePortfolioData()` - Sanitize URLs, handle video items
- `renderPortfolio()` - Render portfolio grid with video/image detection
- `initPortfolioFilters()` - Handle category filtering
- `getSafeAssetUrl(url)` - URL encode special characters

**Widget Management:**
- `initContactWidget()` - Initialize floating contact buttons
- MutationObserver watches nav for aria-hidden changes
- Shifts widget left when mobile nav is open

**Navigation:**
- `initNavigation()` - Setup mobile/desktop nav toggle
- `initSmoothScroll()` - Smooth scrolling to sections

### Common Tasks

#### Adding a New Portfolio Item
1. Add entry to `portfolio.json` with all required properties
2. Provide images (JPG/PNG, optimized for web)
3. Add fallback entry to `portfolio-data.js`
4. Refresh page to verify rendering

#### Adding a New Service
1. Add section in `services.html` following existing pattern
2. Update meta description to include keyword
3. Add appropriate heading tags
4. Ensure responsive layout works on all breakpoints

#### Updating Team Section
1. Add team member object to team section in `about.html`
2. Include image (400px height recommended)
3. Add name, role, bio
4. Update team-grid CSS if needed for equal heights

#### Creating Blog Post
1. Duplicate `post.html` for new post
2. Update title, meta tags, content
3. Add entry link to `blog.html`
4. Include appropriate schema markup

#### Fixing Mobile Issues
1. Test in Chrome DevTools at 375px (mobile), 768px (tablet)
2. Check touch targets are 44x44px minimum
3. Ensure contact widget doesn't overlap content
4. Verify viewport meta tag is present

### SEO Checklist for New Pages

- [ ] Page title includes primary keyword (50-60 chars)
- [ ] Meta description with keyword and CTA (155-160 chars)
- [ ] Open Graph tags for social sharing
- [ ] Twitter Card meta tags
- [ ] Canonical URL (self-referencing)
- [ ] H1 tag on page (single, includes/relates to keyword)
- [ ] H2/H3 tags for hierarchy
- [ ] Image alt text with descriptive keywords
- [ ] Internal links to relevant pages
- [ ] Mobile responsive tested
- [ ] LocalBusiness schema updated if relevant
- [ ] Page added to sitemap.xml with priority
- [ ] robots.txt allows indexing

### Performance Optimization

1. **Images:**
   - Use modern formats (WebP with JPG fallback)
   - Compress images before uploading
   - Use responsive images with srcset
   - Optimize hero images (< 200KB)

2. **CSS/JS:**
   - Minimize CSS (production builds)
   - Defer non-critical JavaScript
   - Use CSS variables for maintainability
   - Remove unused CSS rules

3. **Core Web Vitals:**
   - LCP (Largest Contentful Paint): < 2.5s
   - FID (First Input Delay): < 100ms
   - CLS (Cumulative Layout Shift): < 0.1

### Testing Guidelines

1. **Cross-Browser:**
   - Chrome/Edge (latest)
   - Firefox (latest)
   - Safari (latest)
   - Mobile Safari (iOS)
   - Chrome Mobile (Android)

2. **SEO Testing:**
   - Google Search Console (index, keywords)
   - Google PageSpeed Insights (Core Web Vitals)
   - Schema.org Validator (structured data)
   - Lighthouse Audit (mobile & desktop)

3. **Accessibility:**
   - Keyboard navigation (Tab, Enter)
   - Screen reader testing (NVDA, JAWS)
   - Color contrast (WCAG AA)
   - ARIA labels and roles

## Contact & Social Media

- **Email:** samsinterior2021@gmail.com
- **Phone:** +91-9003032732
- **Instagram:** @sams.interiors
- **Facebook:** facebook.com/samsinteriors
- **LinkedIn:** linkedin.com/company/sam's-interiors

## Future Enhancements

1. **SEO Expansion:**
   - Additional location pages (Hyderabad, etc.)
   - FAQ schema for common questions
   - Breadcrumb schema on all pages
   - More blog content targeting long-tail keywords

2. **Features:**
   - Virtual room tour (360° images)
   - Client testimonial video carousel
   - Before/after gallery
   - Online consultation booking system

3. **Technical:**
   - Progressive Web App (PWA) capabilities
   - Service worker for offline functionality
   - Image optimization pipeline
   - Automated sitemap generation

## Related Documentation

- **SEO Checklist:** See `SEO-CHECKLIST.md` for detailed checklist
- **Sitemap:** `sitemap.xml` - All indexed pages
- **Crawlers:** `robots.txt` - Crawler configuration

---

**Last Updated:** November 24, 2025
**Maintained by:** Development Team
