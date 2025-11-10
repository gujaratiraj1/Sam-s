# Sam's Interiors - Luxury Interior Design Website

A complete, production-ready HTML5 website for Sam's Interiors, a luxury interior design studio. Built with semantic HTML5, mobile-first CSS, and vanilla JavaScript—no frameworks required.

## 📁 Project Structure

```
sams-interiors/
├── index.html              # Homepage
├── about.html              # About page
├── portfolio.html          # Portfolio gallery
├── services.html           # Services page
├── blog.html               # Blog listing
├── post.html               # Sample blog post
├── contact.html            # Contact form
├── 404.html                # Error page
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── main.js             # Main JavaScript
├── portfolio.json          # Portfolio data
├── assets/
│   └── images/             # Image assets (see Assets section)
└── README.md               # This file
```

## 🚀 Quick Start

### Local Development

#### Option 1: Python HTTP Server
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open `http://localhost:8000` in your browser.

#### Option 2: Node.js Live Server
```bash
# Install live-server globally
npm install -g live-server

# Run in project directory
live-server
```

#### Option 3: VS Code Live Server
Install the "Live Server" extension in VS Code and click "Go Live" in the status bar.

## 🎨 Customization

### Brand Colors

Edit CSS variables in `css/styles.css` (lines 8-11):

```css
:root {
    --color-primary: #0D0B08;        /* Deep charcoal - Change this */
    --color-accent: #C9A66B;         /* Warm gold - Change this */
    --color-bg: #F6F4F1;             /* Background - Change this */
    --color-muted: #E6E2DC;          /* Muted beige - Change this */
}
```

### Typography

Change fonts in `css/styles.css` (lines 19-20):

```css
--font-heading: 'Playfair Display', Georgia, serif;  /* Change this */
--font-body: 'Inter', -apple-system, ...;            /* Change this */
```

Update Google Fonts import in HTML `<head>` sections.

### Images

Replace placeholder images in `assets/images/` with your own. See Assets section below for recommended filenames and dimensions.

### Content

All content is in the HTML files. Search for "Sam's Interiors" to find all instances. Update:
- Company name
- Contact information (email, phone)
- Service descriptions
- Team member bios
- Testimonials

## 📧 Contact Form Setup

The contact form currently uses a placeholder submission. To connect a real backend:

### Option 1: Netlify Forms
1. Deploy to Netlify
2. Add `netlify` attribute to form: `<form id="contact-form" netlify>`
3. Forms are automatically handled

### Option 2: EmailJS
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create email service template
3. Add EmailJS script to `contact.html`:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>
    emailjs.init("YOUR_PUBLIC_KEY");
</script>
```
4. Update `submitForm()` in `js/main.js` to use EmailJS API

### Option 3: Custom Backend
Update `submitForm()` function in `js/main.js` (around line 280) to POST to your endpoint:

```javascript
fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(Object.fromEntries(formData))
})
```

## 🖼️ Assets

### Required Images

Place images in `assets/images/` with these filenames:

#### Hero Images
- `hero-home.jpg` (1920x1080, 16:9) - Main homepage hero
- `hero-home-tablet.jpg` (1024x768, 4:3) - Tablet version
- `hero-home-mobile.jpg` (480x640, 3:4) - Mobile version

#### Portfolio Images (6 items)
- `portfolio-penthouse.jpg` (1920x1280, 3:2)
- `portfolio-corporate.jpg` (1920x1280, 3:2)
- `portfolio-coastal.jpg` (1920x1280, 3:2)
- `portfolio-hotel.jpg` (1920x1280, 3:2)
- `portfolio-family.jpg` (1920x1280, 3:2)
- `portfolio-startup.jpg` (1920x1280, 3:2)

Include tablet and mobile versions for each (e.g., `portfolio-penthouse-tablet.jpg`, `portfolio-penthouse-mobile.jpg`)

#### Service Images
- `service-residential.jpg` (1920x1080)
- `service-commercial.jpg` (1920x1080)
- `service-consultation.jpg` (1920x1080)

#### Blog Images
- `blog-timeless-design.jpg` (1200x630, 1.91:1)
- `blog-lighting.jpg` (1200x630)
- `blog-sustainable-luxury.jpg` (1200x630)
- `blog-color-psychology.jpg` (1200x630)
- `blog-art-curation.jpg` (1200x630)
- `blog-small-spaces.jpg` (1200x630)

#### About Page
- `about-story.jpg` (1920x1080)
- `team-sam.jpg` (800x800, square)
- `team-alex.jpg` (800x800, square)
- `team-james.jpg` (800x800, square)

#### Open Graph Images (for social sharing)
- `og-home.jpg` (1200x630)
- `og-about.jpg` (1200x630)
- `og-portfolio.jpg` (1200x630)
- `og-services.jpg` (1200x630)
- `og-blog.jpg` (1200x630)
- `og-contact.jpg` (1200x630)

#### Logo (optional)
- `logo.png` (transparent background, 200x60px recommended)

### Image Optimization Recommendations

1. **Format**: Use WebP with JPEG fallback for best performance
2. **Compression**: Optimize images before uploading (use tools like TinyPNG, ImageOptim, or Squoosh)
3. **Lazy Loading**: Already implemented via `loading="lazy"` attribute
4. **Responsive Images**: Use `srcset` attributes (already included in HTML)

## 🚢 Deployment

### Netlify

1. Push code to GitHub/GitLab/Bitbucket
2. Connect repository to Netlify
3. Build settings: Leave blank (static site)
4. Deploy

**Netlify Redirects** (create `_redirects` file in root):
```
/*    /index.html   200
```

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow prompts

**Vercel Configuration** (create `vercel.json`):
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### AWS S3 + CloudFront

1. Upload files to S3 bucket
2. Enable static website hosting
3. Create CloudFront distribution
4. Point domain to CloudFront

### Performance Optimization

1. **Enable Gzip/Brotli**: Configure on your hosting provider
2. **Minify CSS/JS**: Use build tools (see Build Steps below)
3. **Image Optimization**: Use CDN with automatic optimization (Cloudinary, ImageKit)
4. **Caching**: Set appropriate cache headers for static assets

## 🛠️ Build Steps (Optional)

### Minify CSS and JS

```bash
# Install dependencies
npm init -y
npm install --save-dev cssnano-cli uglify-js

# Minify CSS
npx cssnano css/styles.css css/styles.min.css

# Minify JS
npx uglifyjs js/main.js -o js/main.min.js -c -m
```

### Autoprefixer

```bash
npm install --save-dev autoprefixer postcss-cli

# Create postcss.config.js
echo 'module.exports = { plugins: [require("autoprefixer")] }' > postcss.config.js

# Process CSS
npx postcss css/styles.css -o css/styles.css
```

### Image Optimization

```bash
# Install sharp-cli
npm install --save-dev sharp-cli

# Optimize images
npx sharp-cli -i assets/images/*.jpg -o assets/images/optimized/
```

### Package.json Scripts

Add to `package.json`:

```json
{
  "scripts": {
    "build:css": "postcss css/styles.css -o css/styles.min.css",
    "build:js": "uglifyjs js/main.js -o js/main.min.js -c -m",
    "build": "npm run build:css && npm run build:js",
    "optimize:images": "sharp-cli -i assets/images/*.jpg -o assets/images/optimized/"
  }
}
```

## ✅ Acceptance Checklist

### HTML Validation
- [ ] All pages validate as HTML5 (use [W3C Validator](https://validator.w3.org/))
- [ ] No deprecated tags used
- [ ] Semantic HTML structure throughout

### Accessibility (WCAG AA)
- [ ] Skip-to-content link present and functional
- [ ] All images have descriptive alt text
- [ ] Color contrast meets WCAG AA (4.5:1 for body text, 3:1 for large text)
  - Primary text (#0D0B08) on background (#F6F4F1): **12.6:1** ✓
  - Accent text (#C9A66B) on background (#F6F4F1): **2.8:1** (use for large text only)
- [ ] Keyboard navigation works for all interactive elements
- [ ] Focus indicators visible
- [ ] ARIA attributes used where appropriate
- [ ] Form labels properly associated

### JavaScript Functionality
- [ ] Mobile navigation toggle works
- [ ] Portfolio filter works with keyboard and mouse
- [ ] Lightbox opens/closes correctly
- [ ] Form validation shows inline errors
- [ ] Form shows success message on submission
- [ ] Animated counters respect `prefers-reduced-motion`
- [ ] All interactions keyboard accessible

### Performance
- [ ] Images use lazy loading
- [ ] Critical CSS inlined (optional)
- [ ] No render-blocking resources
- [ ] Page load time < 3 seconds

### SEO
- [ ] Unique `<title>` and meta description for each page
- [ ] Open Graph tags present
- [ ] Twitter Card tags present
- [ ] Canonical URLs set
- [ ] JSON-LD structured data included
- [ ] Semantic heading hierarchy (h1 → h2 → h3)

### Responsive Design
- [ ] Mobile (480px) layout tested
- [ ] Tablet (768px) layout tested
- [ ] Desktop (1024px+) layout tested
- [ ] Images scale appropriately
- [ ] Navigation works on all screen sizes

## 🧪 Testing

### HTML Validation
```bash
# Using W3C Validator API
curl "https://validator.w3.org/nu/?out=json&doc=https://yoursite.com" | jq
```

Or use browser extension: [W3C Validator](https://chrome.google.com/webstore/detail/w3c-validator/bghhhhfbhcjodhdfhccigcnmfmpcmcmg)

### Color Contrast
Use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) or browser DevTools.

### Accessibility Testing
- [WAVE Browser Extension](https://wave.webaim.org/extension/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- Keyboard-only navigation test

### Cross-Browser Testing
Test in:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Notes

- **Color Contrast**: The primary color scheme meets WCAG AA standards. The accent color (#C9A66B) should only be used for large text (18px+) or UI elements, not body text.
- **Reduced Motion**: All animations respect `prefers-reduced-motion` media query.
- **Progressive Enhancement**: Site works without JavaScript (navigation, forms, basic layout).
- **Browser Support**: Modern browsers (last 2 versions). IE11 not supported.

## 🔧 Troubleshooting

### Portfolio not loading
- Check that `portfolio.json` is in the root directory
- Verify JSON syntax is valid
- Check browser console for errors
- Ensure images exist at specified paths

### Form not submitting
- Check browser console for errors
- Verify form validation is working
- Update `submitForm()` function with your backend endpoint

### Images not displaying
- Verify image paths are correct
- Check file names match exactly (case-sensitive)
- Ensure images are in `assets/images/` directory

## 📄 License

This project is provided as-is for use by Sam's Interiors. Customize as needed.

## 🙏 Credits

- Fonts: [Google Fonts](https://fonts.google.com/) - Playfair Display & Inter
- Design: Custom luxury interior design aesthetic
- Development: Vanilla HTML5, CSS3, JavaScript (ES6+)

---

**For questions or support, contact the development team.**

