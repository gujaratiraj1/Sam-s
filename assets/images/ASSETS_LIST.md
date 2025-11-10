# Image Assets List

This directory should contain all image assets for Sam's Interiors website.

## Required Images

### Hero Images (Homepage)
- **hero-home.jpg** - 1920x1080px (16:9 aspect ratio)
  - Alt: "Luxurious living room with elegant furnishings and natural light"
  - Focal point: Center
  - Use: Full-bleed hero background

- **hero-home-tablet.jpg** - 1024x768px (4:3 aspect ratio)
- **hero-home-mobile.jpg** - 480x640px (3:4 aspect ratio)

### Portfolio Images (6 items)

1. **portfolio-penthouse.jpg** - 1920x1280px (3:2 aspect ratio)
   - Alt: "Luxury Manhattan penthouse living room with modern furnishings and city views"
   - Category: Residential
   - Include: tablet and mobile versions

2. **portfolio-corporate.jpg** - 1920x1280px (3:2 aspect ratio)
   - Alt: "Modern corporate office space with open work areas and natural lighting"
   - Category: Commercial

3. **portfolio-coastal.jpg** - 1920x1280px (3:2 aspect ratio)
   - Alt: "Coastal estate interior with natural textures and ocean views"
   - Category: Residential

4. **portfolio-hotel.jpg** - 1920x1280px (3:2 aspect ratio)
   - Alt: "Luxury boutique hotel lobby with elegant furnishings and ambient lighting"
   - Category: Hospitality

5. **portfolio-family.jpg** - 1920x1280px (3:2 aspect ratio)
   - Alt: "Modern family home living space with comfortable seating and warm color palette"
   - Category: Residential

6. **portfolio-startup.jpg** - 1920x1280px (3:2 aspect ratio)
   - Alt: "Modern tech startup office with collaborative workspaces and vibrant design"
   - Category: Commercial

**For each portfolio image, also create:**
- `portfolio-[name]-tablet.jpg` - 1024x768px
- `portfolio-[name]-mobile.jpg` - 480x640px

### Service Images

- **service-residential.jpg** - 1920x1080px (16:9)
  - Alt: "Luxurious residential living space with elegant furnishings"
  - Include tablet and mobile versions

- **service-commercial.jpg** - 1920x1080px (16:9)
  - Alt: "Modern commercial office space with sophisticated design"

- **service-consultation.jpg** - 1920x1080px (16:9)
  - Alt: "Design consultation showing color samples and material swatches"

### Blog Images

All blog images: 1200x630px (1.91:1 aspect ratio - optimal for social sharing)

- **blog-timeless-design.jpg**
  - Alt: "Timeless interior design elements showcasing classic elegance"

- **blog-lighting.jpg**
  - Alt: "Layered lighting design in luxury interior"

- **blog-sustainable-luxury.jpg**
  - Alt: "Sustainable luxury design materials"

- **blog-color-psychology.jpg**
  - Alt: "Color palette selection for interior design"

- **blog-art-curation.jpg**
  - Alt: "Art curation in luxury interior design"

- **blog-small-spaces.jpg**
  - Alt: "Luxury design for small spaces"

### About Page Images

- **about-story.jpg** - 1920x1080px
  - Alt: "Elegant interior design workspace showing design materials and inspiration boards"
  - Include tablet and mobile versions

- **team-sam.jpg** - 800x800px (square, 1:1)
  - Alt: "Sam Johnson, Founder and Creative Director"

- **team-alex.jpg** - 800x800px (square, 1:1)
  - Alt: "Alexandra Martinez, Senior Design Director"

- **team-james.jpg** - 800x800px (square, 1:1)
  - Alt: "James Chen, Commercial Design Lead"

### Open Graph Images (Social Sharing)

All OG images: 1200x630px (1.91:1 aspect ratio)

- **og-home.jpg** - Homepage social preview
- **og-about.jpg** - About page social preview
- **og-portfolio.jpg** - Portfolio page social preview
- **og-services.jpg** - Services page social preview
- **og-blog.jpg** - Blog page social preview
- **og-contact.jpg** - Contact page social preview

### Logo (Optional)

- **logo.png** - 200x60px (transparent background recommended)
  - Use: Header logo (currently using text logo)

## Image Optimization Guidelines

1. **Format**: Use JPEG for photos, PNG for logos/graphics
2. **Quality**: 80-85% JPEG quality for best size/quality balance
3. **Compression**: Optimize all images before uploading
4. **File Size**: Aim for < 200KB per image when possible
5. **Responsive**: Always provide multiple sizes (desktop, tablet, mobile)

## Tools for Image Optimization

- [TinyPNG](https://tinypng.com/) - Online compression
- [Squoosh](https://squoosh.app/) - Advanced compression with preview
- [ImageOptim](https://imageoptim.com/) - Desktop app (Mac)
- [Sharp](https://sharp.pixelplumbing.com/) - Node.js library

## Usage Notes

- All images use `loading="lazy"` for performance
- Responsive images use `srcset` attributes
- Images use `object-fit: cover` for consistent aspect ratios
- Alt text is provided in HTML for accessibility

