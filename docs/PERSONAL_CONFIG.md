# Data Configuration Guide

## Quick Start

**All your personal information is now in ONE file:** `data/personalConfig.js`

Edit this file to update your entire website!

## What You Can Configure

### 📝 Personal Information

```javascript
name: 'Your Name',
occupation: 'Your Job Title',
company: 'Your Company',
bio: 'Your bio text...', // Keep this in sync with data/authors/default.mdx
```

**Note:** The bio field is kept in both `personalConfig.js` and `data/authors/default.mdx`. If you update one, update the other to keep them in sync.

### 🔗 Social Links

```javascript
email: 'your@email.com',
github: 'https://github.com/yourusername',
githubUsername: 'yourusername',
linkedin: 'https://www.linkedin.com/in/yourprofile',
twitter: 'https://twitter.com/yourhandle',
```

### 🎨 Hero Section (Homepage Banner)

```javascript
hero: {
  title: 'Latest',
  subtitle: 'Thoughts & Projects',
  description: 'Your tagline...',
  badges: [
    { text: 'Software Engineer', visible: true },
    { text: '@ Company', visible: true },
  ],
},
```

### 💪 Skills

```javascript
skills: [
  { name: 'JavaScript', category: 'Languages', level: 'expert' },
  { name: 'React', category: 'Frontend', level: 'advanced' },
  // Add more skills...
],
```

**Skill Levels:**

- `expert` - Orange gradient (highest proficiency)
- `advanced` - Medium orange
- `intermediate` - Light orange

**Categories:**
Auto-grouped on the skills page. Common categories:

- Languages
- Frontend
- Backend
- Database
- DevOps
- Cloud

### 🚀 Projects

```javascript
projects: [
  {
    title: 'Project Name',
    description: 'Project description...',
    imgSrc: '/static/images/projects/yourproject.png',
    href: 'https://github.com/user/repo',
    technologies: ['Tech1', 'Tech2'], // Optional
    contributions: '10+ PRs', // Optional
  },
],
```

### 🏆 Achievements & Certifications

```javascript
achievements: [
  {
    title: 'Your Certification',
    issuer: 'Issuing Organization',
    date: '2024',
    icon: '🏅', // Any emoji
    link: 'https://credential-url.com', // Optional
  },
],
```

### 💼 Work Experience (Optional)

```javascript
experience: [
  {
    role: 'Software Engineer',
    company: 'Company Name',
    location: 'Remote',
    startDate: '2022',
    endDate: 'Present',
    description: 'Brief description...',
    highlights: [
      'Achievement 1',
      'Achievement 2',
    ],
  },
],
```

### 🎓 Education (Optional)

```javascript
education: [
  {
    degree: 'Bachelor of Engineering',
    institution: 'University Name',
    location: 'City, Country',
    year: '2020',
    gpa: '3.8/4.0', // Optional
  },
],
```

### ⚙️ Preferences

```javascript
preferences: {
  showGitHubStats: true,      // Show/hide GitHub stats widget
  showAchievements: true,     // Show/hide achievements
  showSkills: true,           // Show/hide skills section
  maxProjectsOnHomepage: 6,   // Number of projects on homepage
  maxBlogPostsOnHomepage: 5,  // Number of blog posts on homepage
},
```

### 📊 Analytics & Site Settings

```javascript
analytics: {
  googleAnalyticsId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || '',
},

site: {
  title: 'Your Name',
  description: 'Your site description...',
  siteUrl: 'https://yourdomain.com',
  language: 'en-us',
  theme: 'system', // system, dark, or light
  stickyNav: true,
},
```

## How to Update

1. **Open the file:**

   ```bash
   code data/personalConfig.js
   ```

2. **Edit your information**

3. **Save the file**

4. **Restart dev server** (if needed):
   ```bash
   npm run dev
   ```

## File Structure

```
data/
├── personalConfig.js      ← EDIT THIS FILE!
├── siteMetadata.js        ← Site-wide settings (title, analytics)
├── headerNavLinks.ts      ← Navigation menu items
├── projectsData.ts        ← Imports from personalConfig.js
└── authors/
    └── default.mdx        ← Your author profile
```

## Tips

✅ **DO:**

- Update `personalConfig.js` for personal info
- Keep skill levels accurate
- Add real project links
- Update achievements as you earn them
- Test changes locally before deploying

❌ **DON'T:**

- Hardcode personal info in components
- Leave template placeholder text
- Forget to update social links
- Add fake achievements or skills

## Common Updates

### Adding a New Skill

```javascript
skills: [
  // ... existing skills
  { name: 'Rust', category: 'Languages', level: 'intermediate' },
],
```

### Adding a New Project

```javascript
projects: [
  // ... existing projects
  {
    title: 'My New Project',
    description: 'What it does...',
    imgSrc: '/static/images/projects/new-project.png',
    href: 'https://github.com/you/project',
  },
],
```

### Adding a New Achievement

```javascript
achievements: [
  // ... existing achievements
  {
    title: 'New Certification',
    issuer: 'Platform',
    date: '2024',
    icon: '🎓',
    link: 'https://cert-url.com',
  },
],
```

### Hiding a Section

```javascript
preferences: {
  showGitHubStats: false, // This will hide GitHub stats
},
```

## Need Help?

- Check the existing examples in `personalConfig.js`
- All fields are well-commented
- Most fields are optional - only fill what you need

---

**Remember:** One file to rule them all! 🎯
