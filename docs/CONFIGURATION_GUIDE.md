# 🎯 Complete Configuration Guide

Your website now has a **centralized configuration system**! All your personal information is managed from one file.

## 📍 Main Configuration File

**Location:** `data/personalConfig.js`

This is your **single source of truth** for all personal information across the website.

## 🚀 Quick Setup Checklist

### 1. Personal Information

- [ ] Update your name, occupation, and company
- [ ] Write your bio
- [ ] Add your email address

### 2. Social Links

- [ ] Update GitHub username
- [ ] Add LinkedIn profile URL
- [ ] Add Twitter/X handle
- [ ] (Optional) Add other social profiles

### 3. Skills

- [ ] Review and update your skills list
- [ ] Adjust skill levels (expert/advanced/intermediate)
- [ ] Add any missing technologies
- [ ] Update "Currently Exploring" section

### 4. Projects

- [ ] Add your real projects
- [ ] Remove or update template projects
- [ ] Add project images to `/public/static/images/projects/`
- [ ] Include GitHub links

### 5. Achievements

- [ ] Update certifications with real credentials
- [ ] Add credential/verification links
- [ ] Update dates and issuers
- [ ] Add any awards or speaking engagements

### 6. Site Settings & Analytics

- [ ] Update site URL in `personalConfig.js`
- [ ] Add Google Analytics ID to `.env`
- [ ] Verify analytics configuration in `personalConfig.js`
- [ ] Test analytics in development

## 📂 Configuration Files Overview

| File                       | Purpose               | What to Edit                                                                |
| -------------------------- | --------------------- | --------------------------------------------------------------------------- |
| `data/personalConfig.js`   | **Main config**       | Personal info, skills, projects, achievements, **analytics**, site settings |
| `data/siteMetadata.js`     | Site settings         | Auto-imports from personalConfig _(rarely need to edit)_                    |
| `data/headerNavLinks.ts`   | Navigation menu       | Add/remove menu items                                                       |
| `.env`                     | Environment variables | API keys (Google Analytics ID)                                              |
| `data/authors/default.mdx` | Author profile        | Uses personalConfig automatically                                           |

## 🎨 What's Connected to personalConfig.js

### Components Using Personal Config:

- ✅ **Skills** - Auto-populates from `personalConfig.skills`
- ✅ **Achievements** - Auto-populates from `personalConfig.achievements`
- ✅ **GitHubStats** - Uses `personalConfig.githubUsername`
- ✅ **Projects** - Auto-populates from `personalConfig.projects`
- ✅ **Hero Banner** - Uses `personalConfig.hero`
- ✅ **About Page** - Uses `personalConfig.bio`

### Pages Using Personal Config:

- ✅ Homepage (Hero section)
- ✅ About page (Bio, Skills, GitHub, Achievements)
- ✅ Projects page (Project cards)

## 🔧 Common Customizations

### Change Number of Blog Posts on Homepage

```javascript
preferences: {
  maxBlogPostsOnHomepage: 5, // Change to any number
}
```

### Hide/Show Sections

```javascript
preferences: {
  showGitHubStats: false,    // Hide GitHub stats
  showAchievements: true,    // Show achievements
  showSkills: true,          // Show skills
}
```

### Update Hero Section

```javascript
hero: {
  title: 'Welcome',
  subtitle: 'My Portfolio',
  description: 'Your custom description',
  badges: [
    { text: 'Developer', visible: true },
    { text: 'Designer', visible: false }, // Won't show
  ],
}
```

### Add a New Skill Category

```javascript
skills: [
  // ... existing skills
  { name: 'TensorFlow', category: 'AI/ML', level: 'intermediate' },
  { name: 'PyTorch', category: 'AI/ML', level: 'intermediate' },
]
```

## 🎯 Best Practices

### ✅ DO:

1. **Keep it updated** - Regularly add new skills and projects
2. **Be honest** - Accurately represent your skill levels
3. **Add links** - Link to GitHub repos, certificates, etc.
4. **Use emojis thoughtfully** - For achievements icons
5. **Test locally** - Always check changes before deploying

### ❌ DON'T:

1. **Leave placeholders** - Remove or update all template content
2. **Exaggerate** - Be truthful about skills and experience
3. **Break URLs** - Ensure all links are valid
4. **Forget images** - Add project images for better visuals
5. **Hardcode in components** - Always use personalConfig

## 📝 Example: Adding a New Project

1. **Add to personalConfig.js:**

```javascript
projects: [
  // ... existing projects
  {
    title: 'My Awesome Project',
    description: 'A full-stack application that does X, Y, and Z.',
    imgSrc: '/static/images/projects/awesome-project.png',
    href: 'https://github.com/yourusername/awesome-project',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    contributions: 'Creator & Maintainer',
  },
]
```

2. **Add project image:**
   - Save image to `/public/static/images/projects/awesome-project.png`
   - Recommended size: 544x306 pixels (16:9 ratio)

3. **Save and restart:**
   ```bash
   npm run dev
   ```

## 🔒 Security Notes

- **Never commit** sensitive data to `personalConfig.js`
- **Use `.env`** for API keys and secrets
- **Keep `.env` in `.gitignore`**
- **Update `.env.example`** with variable names (not values)

## 🌐 Deployment

When deploying to production:

1. **Set environment variables** in your hosting platform
2. **Verify personalConfig.js** has correct production URLs
3. **Check analytics** is configured
4. **Test all links** work in production

### Vercel Deployment:

```bash
# Add environment variable
vercel env add NEXT_PUBLIC_GOOGLE_ANALYTICS_ID

# Deploy
vercel --prod
```

### Netlify Deployment:

Add environment variables in: Site settings → Build & deploy → Environment

## 📚 Related Documentation

- `data/README.md` - Detailed config options
- `BLOG_FEATURES.md` - Blog enhancement features
- `GOOGLE_ANALYTICS_SETUP.md` - Analytics setup guide

## 🆘 Troubleshooting

**Changes not appearing?**

1. Save the file
2. Restart dev server (`npm run dev`)
3. Clear browser cache
4. Check for syntax errors in console

**Import errors?**

- Ensure `personalConfig.js` exports `default`
- Check file path imports are correct

**Skills not showing?**

- Verify skill objects have `name`, `category`, and `level`
- Check `showSkills: true` in preferences

## 🎉 You're All Set!

Your website is now fully configured with a centralized system. Just edit `data/personalConfig.js` and watch your entire site update!

**Pro Tip:** Bookmark `data/personalConfig.js` in your editor for quick access. 📌
