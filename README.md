# Abhishek Bongale - Personal Website

A modern, feature-rich personal website and blog built with Next.js, Tailwind CSS, and TypeScript.

## 🚀 Features

- ✨ **Modern Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS
- 📝 **Blog System**: MDX-powered blog with automatic Table of Contents
- 🎨 **McLaren Orange Theme**: Vibrant, professional color scheme
- 🌓 **Dark Mode**: Full dark mode support with smooth transitions
- 📊 **Analytics**: Google Analytics integration
- 🔍 **SEO Optimized**: Open Graph, Twitter Cards, structured data
- 📱 **Fully Responsive**: Mobile-first design
- ⚡ **Performance**: Optimized images (WebP/AVIF), lazy loading
- 🎯 **Centralized Config**: Single file (`data/personalConfig.js`) for all personal info

## 📚 Documentation

**All documentation is in the [`docs/`](./docs/) folder:**

- 📖 [Documentation Index](./docs/README.md) - Start here!
- ⚙️ [Personal Config Guide](./docs/PERSONAL_CONFIG.md) - Main configuration file
- 🎯 [Configuration Guide](./docs/CONFIGURATION_GUIDE.md) - Setup checklist
- 📝 [Blog Features](./docs/BLOG_FEATURES.md) - Enhanced blog capabilities
- 📊 [Google Analytics Setup](./docs/GOOGLE_ANALYTICS_SETUP.md) - Analytics guide

## 🛠️ Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/abhibongale/personal-website.git
cd personal-website

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see your website.

## 🎯 Customization

### 1. Update Personal Information

Edit `data/personalConfig.js` - this is your **single source of truth**:

```javascript
const personalConfig = {
  name: 'Your Name',
  occupation: 'Your Job Title',
  company: 'Your Company',
  email: 'your@email.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourprofile',
  skills: [...],
  projects: [...],
  achievements: [...],
  // ... and more!
}
```

### 2. Add Google Analytics

Create `.env` file:

```bash
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

See [Google Analytics Setup Guide](./docs/GOOGLE_ANALYTICS_SETUP.md) for details.

### 3. Write Blog Posts

Create a new file in `data/blog/`:

```mdx
---
title: 'Your Post Title'
date: '2024-04-22'
tags: ['tag1', 'tag2']
summary: 'Brief description...'
---

## Introduction

Your content here with automatic Table of Contents!
```

## 📂 Project Structure

```
/
├── data/
│   ├── personalConfig.js      ← Main configuration (EDIT THIS!)
│   ├── siteMetadata.js        ← Auto-imports from personalConfig
│   ├── blog/                  ← Your blog posts (.mdx)
│   └── authors/               ← Author profiles
├── docs/                      ← Documentation
├── components/                ← React components
├── layouts/                   ← Page layouts
├── app/                       ← Next.js app pages
├── public/static/             ← Static assets (images, etc.)
└── css/                       ← Styles
```

## 🎨 Key Features

### Automatic Table of Contents

All blog posts automatically get a sticky TOC based on headings.

### Skills & Achievements

Managed in `personalConfig.js`, displayed on About page with:

- GitHub Stats widget (live data)
- Skills categorization
- Certifications & awards

### Projects Showcase

Portfolio projects with descriptions, images, and links.

### Dark Mode

Automatic theme switching with optimized colors.

### Social Proof

- GitHub statistics
- Blog view counters
- Achievement badges

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variable: `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`
4. Deploy!

### Other Platforms

Build command: `npm run build`  
Output directory: `.next`

## 📝 Writing Blog Posts

See [Blog Consistency Guide](./docs/BLOG_CONSISTENCY_GUIDE.md) for:

- Recommended post structure
- Best practices
- Formatting guidelines

## 🤝 Contributing

This is a personal website, but feel free to:

- Report issues
- Suggest improvements
- Fork for your own use

## 📄 License

MIT License - feel free to use this template for your own website!

## 🙏 Credits

Built with:

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Contentlayer](https://www.contentlayer.dev/)
- Based on [Tailwind Nextjs Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog)

---

**Made with ❤️ by Abhishek Bongale**

🌐 [Website](https://yourdomain.com) • 💼 [LinkedIn](https://linkedin.com/in/abhishekbongale) • 🐙 [GitHub](https://github.com/abhibongale)
