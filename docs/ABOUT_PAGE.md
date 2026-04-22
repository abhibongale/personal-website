# About Page Documentation

The About page has been enhanced with a modern, engaging layout that showcases your professional profile, experience, and personality.

## 🎨 **Features**

### **1. Hero Section**

- Orange gradient background with grid pattern
- Circular avatar with ring border
- Personalized greeting
- Occupation and company
- Social media icons

### **2. Quick Stats Cards**

- Years of experience
- Number of projects
- Blog post count
- Tech stack size
- Hover effects

### **3. About Me Section**

- Rich text content from MDX file
- Markdown support
- Custom styling

### **4. Currently Working On**

- Highlighted current focus
- Learning goals
- Orange gradient background

### **5. Experience Timeline**

- Visual timeline with dots
- Current role highlighted in orange
- Past roles in gray
- Period, role, company, description

### **6. Fun Facts**

- Grid layout (2 columns on desktop)
- Emoji icons
- Personal touch

### **7. Skills, GitHub Stats, Achievements**

- Automatically included from components
- Can be toggled in preferences

### **8. Let's Connect CTA**

- Call-to-action section
- Email and GitHub buttons
- Encouraging message

## 📝 **Customization**

### **Update Your Bio**

Edit `data/authors/default.mdx`:

```mdx
---
name: Your Name
avatar: /static/images/avatar.png
occupation: Your Role
company: Your Company
email: your@email.com
twitter: https://twitter.com/username
linkedin: https://linkedin.com/in/username
github: https://github.com/username
---

Your bio content here with **Markdown** support!

## Sections

Use headings, lists, and formatting as needed.
```

### **Update Experience**

Edit `data/personalConfig.js`:

```javascript
experience: [
  {
    role: 'Senior Software Engineer',
    company: 'Tech Corp',
    period: '2020 - Present',
    current: true, // Highlights in orange
    description: 'What you do in this role...',
  },
  {
    role: 'Software Engineer',
    company: 'Previous Company',
    period: '2018 - 2020',
    current: false,
    description: 'What you did here...',
  },
  // Add more entries
],
```

### **Update Fun Facts**

Edit `data/personalConfig.js`:

```javascript
funFacts: [
  '☕ Coffee enthusiast - fuel for late-night coding',
  '🏔️ Love hiking and outdoor adventures',
  '📖 Always reading about distributed systems',
  '🎮 Casual gamer in free time',
  // Add your own with emoji + text format
],
```

### **Update Currently Working On**

Shown automatically from:

- Open-source projects (from `projects` array)
- Learning goals (from `currentlyExploring`)

### **Update Quick Stats**

Edit in `layouts/AuthorLayout.tsx`:

```javascript
const quickStats = [
  { label: 'Years Experience', value: '5+', icon: '💼' },
  { label: 'Open Source Projects', value: '2', icon: '🚀' },
  { label: 'Blog Posts', value: '10+', icon: '📝' },
  { label: 'Tech Stack', value: '15+', icon: '🛠️' },
]
```

## 🎯 **Toggle Sections**

In `data/personalConfig.js`:

```javascript
preferences: {
  showSkills: true,           // Show/hide Skills section
  showGitHubStats: true,      // Show/hide GitHub Stats
  showAchievements: true,     // Show/hide Achievements
}
```

## 🎨 **Styling**

All sections use:

- **Orange theme**: McLaren papaya orange accents
- **Rounded corners**: Modern card design
- **Shadows**: Subtle depth
- **Hover effects**: Interactive elements
- **Dark mode**: Fully supported
- **Responsive**: Mobile-first design

## 📸 **Avatar**

Place your avatar image at:

```
public/static/images/avatar.png
```

Recommended:

- Size: 400x400px or larger
- Format: PNG with transparent background (or JPG)
- Square aspect ratio

## 🔗 **Social Links**

Update in `data/authors/default.mdx` frontmatter:

- email
- twitter (or x)
- linkedin
- github
- bluesky (optional)

## 💡 **Tips**

1. **Keep bio concise**: 3-4 paragraphs max
2. **Use emojis**: Makes sections more engaging
3. **Update stats regularly**: Keep numbers current
4. **Add personality**: Fun facts make you memorable
5. **Professional + personal**: Balance both aspects

## 🚀 **Example Content**

See the current implementation for a complete example of:

- Professional yet approachable tone
- Clear value proposition
- Personal interests
- Call to action

---

**Your enhanced About page is ready!** 🎉

It showcases your professional expertise while adding personality and making it easy for visitors to connect with you.
