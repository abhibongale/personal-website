# Documentation Index

Welcome to your website's documentation! All guides are organized here.

## 📚 Main Documentation

### **Getting Started**

- [PERSONAL_CONFIG.md](./PERSONAL_CONFIG.md) - **START HERE!** Complete guide to `data/personalConfig.js`
- [CONFIGURATION_GUIDE.md](./CONFIGURATION_GUIDE.md) - Setup checklist and best practices

### **Feature Guides**

- [BLOG_FEATURES.md](./BLOG_FEATURES.md) - Blog enhancement features (TOC, Related Posts, Code Playground, etc.)
- [BLOG_CONSISTENCY_GUIDE.md](./BLOG_CONSISTENCY_GUIDE.md) - Writing consistent blog posts
- [TABLE_OF_CONTENTS_INFO.md](./TABLE_OF_CONTENTS_INFO.md) - How the automatic TOC works

### **Analytics & Integrations**

- [GOOGLE_ANALYTICS_SETUP.md](./GOOGLE_ANALYTICS_SETUP.md) - Setting up Google Analytics

## 🎯 Quick Links

### **To Update Personal Info:**

Edit: `data/personalConfig.js`

- Personal information
- Skills
- Projects
- Achievements
- Social links
- Analytics
- Site settings

### **To Write a Blog Post:**

1. Create file: `data/blog/my-post.mdx`
2. Use proper h2/h3 headings
3. TOC appears automatically
4. See: [BLOG_CONSISTENCY_GUIDE.md](./BLOG_CONSISTENCY_GUIDE.md)

### **To Change Site Appearance:**

- Colors: `css/tailwind.css`
- Fonts: `app/layout.tsx`
- Navigation: `data/headerNavLinks.ts`

## 📂 File Structure

```
/
├── data/
│   ├── personalConfig.js      ← Main configuration file
│   ├── siteMetadata.js        ← Auto-imports from personalConfig
│   ├── headerNavLinks.ts      ← Navigation menu
│   ├── blog/                  ← Your blog posts
│   └── authors/               ← Author profiles
├── docs/                      ← You are here!
│   ├── README.md
│   ├── PERSONAL_CONFIG.md
│   ├── CONFIGURATION_GUIDE.md
│   └── ...
├── components/                ← React components
├── layouts/                   ← Page layouts
└── app/                       ← Next.js app pages
```

## 🚀 Common Tasks

### **Add a New Skill**

Edit `data/personalConfig.js`:

```javascript
skills: [{ name: 'Your Skill', category: 'Category', level: 'expert' }]
```

### **Add a New Project**

Edit `data/personalConfig.js`:

```javascript
projects: [
  {
    title: 'Project Name',
    description: 'What it does...',
    href: 'https://github.com/user/repo',
  },
]
```

### **Update Social Links**

Edit `data/personalConfig.js`:

```javascript
github: 'https://github.com/yourusername',
linkedin: 'https://linkedin.com/in/yourprofile',
twitter: 'https://twitter.com/yourhandle',
```

### **Change Homepage Blog Post Limit**

Edit `data/personalConfig.js`:

```javascript
preferences: {
  maxBlogPostsOnHomepage: 5,
}
```

## 🆘 Troubleshooting

**Changes not showing?**

1. Save the file
2. Restart dev server: `npm run dev`
3. Clear browser cache

**Build errors?**

1. Check syntax in `personalConfig.js`
2. Ensure all required fields are filled
3. Check console for specific errors

**Need help?**

- Check the specific guide for your issue
- All guides are detailed and comprehensive
- Start with CONFIGURATION_GUIDE.md for overview

---

**Pro Tip:** Bookmark `data/personalConfig.js` - it's your main control center! 🎯
