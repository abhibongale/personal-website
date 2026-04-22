# Blog Consistency Guide

All blog posts now have a **consistent, unified look** with automatic Table of Contents!

## ✅ What's Standardized

### **1. Default Layout: PostSimple**

All blog posts now use the `PostSimple` layout by default, featuring:

- Clean, distraction-free reading experience
- Sticky Table of Contents on the right sidebar
- Consistent spacing and typography
- Author information at the bottom
- Previous/Next post navigation

### **2. Automatic Table of Contents**

Every blog post automatically displays:

- TOC on right sidebar (desktop)
- Active section highlighting in orange
- Smooth scroll navigation
- Hidden on mobile for better UX

### **3. Consistent Styling**

All posts now have:

- Same header formatting
- Consistent font sizes and spacing
- Unified code block styling
- Matching dark mode appearance
- Same navigation elements

## 🎨 Available Layouts

You can override the default layout in individual posts if needed:

### **PostSimple** (Default - Recommended)

```yaml
---
title: 'Your Post Title'
layout: PostSimple
---
```

- Clean, minimal design
- TOC on right sidebar
- Best for most blog posts
- Fastest to read

### **PostLayout** (Full Featured)

```yaml
---
title: 'Your Post Title'
layout: PostLayout
authors: ['default']
---
```

- Author info sidebar on left
- TOC in footer sidebar
- Tags and metadata display
- Best for multi-author blogs

### **PostBanner** (Featured Image)

```yaml
---
title: 'Your Post Title'
layout: PostBanner
images: ['/static/images/banner.jpg']
---
```

- Large banner image at top
- TOC on right sidebar
- Eye-catching header
- Best for featured posts

## 📝 Writing Consistent Posts

### **Recommended Structure**

```mdx
---
title: 'Your Blog Post Title'
date: '2024-04-22'
tags: ['tag1', 'tag2', 'tag3']
draft: false
summary: 'A compelling summary of your post (1-2 sentences)'
---

## Introduction

Start with context and what the reader will learn...

## Main Section 1

Your main content here...

### Subsection 1.1

Details and examples...

### Subsection 1.2

More details...

## Main Section 2

Continue your content...

### Code Example

\`\`\`javascript
// Code examples are automatically formatted
const example = 'This looks great!';
\`\`\`

## Main Section 3

Keep building your narrative...

## Conclusion

Wrap up with key takeaways...
```

### **Best Practices**

✅ **DO:**

- Use descriptive h2 (`##`) and h3 (`###`) headings
- Include 4-6 main sections minimum
- Write clear, concise summaries
- Add relevant tags (3-5 tags)
- Use code blocks with language specification
- Include introduction and conclusion sections

❌ **DON'T:**

- Skip heading levels (h2 → h4)
- Use h1 (`#`) - reserved for title
- Write headings longer than 60 characters
- Leave out the summary field
- Forget to set the date

## 🎯 Typography & Formatting

All posts automatically use:

### **Headings**

- **h1**: Page title (auto-generated)
- **h2**: Main sections (blue-purple gradient on hover)
- **h3**: Subsections (indented in TOC)
- **Bold**: `**important text**`
- **Italic**: `*emphasized text*`

### **Code Blocks**

```javascript
// Automatically syntax highlighted
// With line numbers and copy button
function example() {
  return 'Consistently styled!'
}
```

### **Lists**

- Bullet points look great
- Consistent spacing
- Perfect indentation
  - Nested items work too

### **Links**

Links have [orange hover color](https://example.com) matching your brand.

### **Quotes**

> Blockquotes are styled with left border
> And look professional

## 🔧 Configuration

### **Change Default Layout**

Edit `data/personalConfig.js`:

```javascript
preferences: {
  defaultBlogLayout: 'PostSimple', // or 'PostLayout' or 'PostBanner'
}
```

### **Customize TOC**

Edit `components/TableOfContents.tsx` to:

- Change which headings are included
- Modify styling
- Adjust sticky position

### **Override Per Post**

Add `layout` field in frontmatter:

```yaml
---
title: 'Special Post'
layout: PostBanner
images: ['/path/to/image.jpg']
---
```

## 📱 Responsive Design

All layouts are responsive:

### **Desktop (≥1280px)**

- TOC visible on right sidebar
- Wide content area
- Full navigation

### **Tablet (768px-1279px)**

- TOC hidden
- Medium content width
- Simplified navigation

### **Mobile (<768px)**

- TOC hidden
- Full-width content
- Stacked navigation

## 🎨 Dark Mode

All posts automatically adapt to dark mode:

- Proper contrast ratios
- Orange accents remain visible
- Code blocks switch themes
- TOC adapts colors

## 📊 Consistency Checklist

Before publishing a blog post:

- [ ] Title is clear and descriptive
- [ ] Date is set correctly
- [ ] Summary is 1-2 sentences
- [ ] At least 3 tags added
- [ ] Has Introduction section
- [ ] Has 4-6 main h2 sections
- [ ] Subsections use h3 (not h4/h5)
- [ ] Code blocks specify language
- [ ] Has Conclusion section
- [ ] All links tested
- [ ] Images are optimized
- [ ] Preview looks good in dark mode

## 🚀 Quick Start

Create a new blog post:

```bash
# Create new file
touch data/blog/my-new-post.mdx
```

Use this template:

```mdx
---
title: 'My Awesome Post Title'
date: '2024-04-22'
tags: ['tag1', 'tag2', 'tag3']
draft: false
summary: 'Learn how to do something amazing in this comprehensive guide.'
---

## Introduction

Welcome to this guide where you'll learn...

## Getting Started

Let's dive into the basics...

### Prerequisites

Before we begin, make sure you have...

### Setup

Follow these steps...

## Main Content

Here's the core of what you need to know...

### Important Concept

Understanding this is key...

## Advanced Topics

For those who want to go deeper...

## Conclusion

In this post, we covered... Next steps include...
```

## 🎉 Result

Every blog post now:

- ✅ Looks identical in styling
- ✅ Has automatic TOC
- ✅ Uses consistent typography
- ✅ Provides great reading experience
- ✅ Works perfectly in dark mode
- ✅ Is fully responsive

---

**Your blog now has a professional, consistent appearance across all posts!** 🎨📝
