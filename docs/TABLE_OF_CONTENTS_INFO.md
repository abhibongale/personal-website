# Table of Contents - Now Automatic! 📑

The Table of Contents (TOC) feature is now **automatically enabled** on all blog posts!

## ✅ What's Been Added

The TOC component is now integrated into **all blog post layouts**:

1. **PostLayout.tsx** - Sidebar layout with TOC in footer section
2. **PostSimple.tsx** - Clean layout with TOC on right sidebar
3. **PostBanner.tsx** - Banner layout with TOC on right sidebar

## 🎯 How It Works

### **Automatic Generation**

- TOC is generated from your blog post headings (`## h2` and `### h3`)
- Updates dynamically as user scrolls
- Highlights current section
- Smooth scroll navigation

### **Responsive Design**

- **Desktop (XL)**: Sticky sidebar on the right
- **Tablet/Mobile**: Hidden (for better mobile UX)
- Stays in view as you scroll

### **Active Section Tracking**

- Current section is highlighted in orange
- Uses intersection observer for accuracy
- Updates as you read through the post

## 📝 How to Use in Your Blog Posts

### **1. Use Proper Heading Structure**

```mdx
---
title: 'Your Blog Post Title'
date: '2024-04-22'
tags: ['tag1', 'tag2']
---

## Introduction

Your introduction text...

## Main Topic

Content for main topic...

### Subsection

Subsection content...

## Another Section

More content...

### Another Subsection

Details here...

## Conclusion

Wrap up...
```

### **2. TOC Automatically Appears**

- No extra code needed
- TOC generates from h2 (`##`) and h3 (`###`) headings
- h1 is reserved for post title
- h4-h6 are not included in TOC

### **3. Best Practices**

✅ **DO:**

- Use descriptive heading names
- Follow logical hierarchy (h2 → h3, not h2 → h4)
- Keep heading text concise (< 60 characters)
- Use at least 3-4 h2 headings for TOC to be useful

❌ **DON'T:**

- Skip heading levels (h2 → h4)
- Use headings for styling only
- Make headings too long
- Use special characters that break IDs

## 🎨 Styling

The TOC matches your site theme:

- Orange highlight for active section
- Smooth hover transitions
- Matches primary color scheme
- Auto-adapts to dark mode

## 📍 Where It Appears

### **PostLayout** (Default)

```
┌─────────────────────────────────┐
│         Post Header             │
├──────────┬─────────────────────┤
│ Author   │  Main Content        │
│ Info     │                      │
│          │                      │
│ Tags     │                      │
│          │                      │
│ TOC      │  (Blog Post)         │
│ (sidebar)│                      │
│          │                      │
│ Prev/Next│                      │
└──────────┴─────────────────────┘
```

### **PostSimple** (Cleaner)

```
┌──────────────────────────────────────┐
│          Post Header                 │
├─────────────────────┬───────────────┤
│                     │               │
│  Main Content       │  TOC          │
│                     │  (sticky)     │
│  (Blog Post)        │               │
│                     │               │
│                     │               │
└─────────────────────┴───────────────┘
```

### **PostBanner** (With Image)

```
┌──────────────────────────────────────┐
│       Banner Image                   │
│          Post Title                  │
├─────────────────────┬───────────────┤
│                     │               │
│  Main Content       │  TOC          │
│                     │  (sticky)     │
│  (Blog Post)        │               │
│                     │               │
└─────────────────────┴───────────────┘
```

## 🔧 Customization

### **Change TOC Position**

The TOC is sticky and positioned at `top-24` (96px from top). Edit in layout files:

```tsx
<div className="sticky top-24">
  <TableOfContents />
</div>
```

### **Change Which Headings Are Included**

Edit `components/TableOfContents.tsx`:

```tsx
// Current: h2 and h3
const elements = document.querySelectorAll('h2, h3')

// To include h4:
const elements = document.querySelectorAll('h2, h3, h4')
```

### **Disable on Specific Posts**

Add custom frontmatter (requires additional code):

```yaml
---
title: 'My Post'
showTOC: false
---
```

## 📱 Mobile Behavior

On mobile/tablet (< 1280px):

- TOC is hidden via `hidden xl:block`
- Saves screen space
- Better reading experience
- Users can still navigate via scrolling

## 🎯 Example Blog Post Structure

```mdx
---
title: 'Complete Guide to Docker'
date: '2024-04-22'
tags: ['docker', 'devops']
---

## Introduction

Docker has revolutionized application deployment...

## What is Docker?

Docker is a containerization platform...

### Containers vs VMs

The key difference between...

### Docker Architecture

Docker uses a client-server architecture...

## Getting Started

Let's install Docker on your system...

### Installation on Linux

Run the following commands...

### Installation on macOS

For macOS users, download...

## Basic Commands

Here are essential Docker commands...

### Running Containers

To run your first container...

### Managing Images

Docker images are...

## Best Practices

Follow these best practices...

## Conclusion

Docker is an essential tool...
```

**Result:** TOC will show:

- Introduction
- What is Docker?
  - Containers vs VMs
  - Docker Architecture
- Getting Started
  - Installation on Linux
  - Installation on macOS
- Basic Commands
  - Running Containers
  - Managing Images
- Best Practices
- Conclusion

## ✨ Features

1. **Auto-highlighting** - Current section is orange
2. **Smooth scroll** - Click to jump to section
3. **Sticky positioning** - Stays visible while reading
4. **Responsive** - Hides on mobile
5. **Dark mode** - Adapts to theme
6. **Accessible** - Semantic HTML

## 🚀 That's It!

Just write your blog posts with proper headings and the TOC appears automatically. No configuration needed! 🎉

---

**Pro Tip:** Write an outline first using your h2 and h3 headings. This helps structure your post and creates a better TOC!
