# Reading List Feature

A curated reading list of books and research papers appears at the bottom of each blog post, replacing traditional tags with valuable resources!

## 📚 **What It Does**

The Reading List feature automatically shows relevant books and research papers at the end of each blog post, filtered by the post's tags.

## 🎯 **How It Works**

### **Automatic Filtering**

- Blog posts have tags (e.g., `distributed-systems`, `kubernetes`)
- Reading list items also have tags
- System automatically shows items matching the post's topics

### **Example**

**Blog Post:**

```yaml
---
title: 'Building Distributed Systems'
tags: ['distributed-systems', 'databases']
---
```

**Shows Reading Items tagged with:**

- `distributed-systems`
- `databases`

## 🎨 **Visual Design**

```
┌─────────────────────────────────────────────────┐
│ 📖 Recommended Reading                          │
├─────────────────────────────────────────────────┤
│                                                 │
│ ┌─────────────────────────────────────────┐   │
│ │ 📚  Designing Data-Intensive Applications│   │
│ │     Martin Kleppmann • 2017             │   │
│ │                                          │   │
│ │     The big ideas behind reliable,      │   │
│ │     scalable systems...                 │   │
│ │                                          │   │
│ │     Read more ↗                         │   │
│ └─────────────────────────────────────────┘   │
│                                                 │
│ ┌─────────────────────────────────────────┐   │
│ │ 📄  The Google File System              │   │
│ │     Paper                                │   │
│ │     Sanjay Ghemawat et al. • 2003       │   │
│ │                                          │   │
│ │     Foundational paper on distributed   │   │
│ │     file systems...                     │   │
│ │                                          │   │
│ │     Read more ↗                         │   │
│ └─────────────────────────────────────────┘   │
│                                                 │
│ 💡 These resources have shaped my thinking     │
└─────────────────────────────────────────────────┘
```

## ⚙️ **Configuration**

### **1. Add Items to Your Reading List**

Edit `data/personalConfig.js`:

```javascript
readingList: [
  {
    title: 'Your Book Title',
    author: 'Author Name',
    type: 'book', // or 'research-paper'
    description: 'What you learned from it or why it's valuable...',
    link: 'https://link-to-book.com',
    year: '2024',
    tags: ['distributed-systems', 'databases'], // Match your blog tags
  },
  {
    title: 'Research Paper Title',
    author: 'Authors',
    type: 'research-paper',
    description: 'Key insights and why it matters...',
    link: 'https://link-to-paper.pdf',
    year: '2020',
    tags: ['algorithms', 'performance'],
  },
  // Add more...
]
```

### **2. Customize Display Settings**

```javascript
preferences: {
  showReadingList: true,        // Enable/disable feature
  maxReadingListItems: 5,       // Max items per post
}
```

## 📖 **Item Types**

### **Books** (📚)

- Orange icon background
- Book icon
- "📚 Book" badge

### **Research Papers** (📄)

- Blue icon background
- Document icon
- "📄 Paper" badge

## 🎯 **Features**

### **Smart Filtering**

- Automatically matches blog post tags
- Shows most relevant resources
- Limits to avoid overwhelming readers

### **Rich Information**

- Title (clickable if link provided)
- Author name
- Publication year
- Description (why it's valuable)
- External link with icon

### **Professional Design**

- Orange gradient container (matches theme)
- Card-based layout
- Hover effects on cards
- Icon indicators for type
- Clean typography

### **Responsive**

- Works on all screen sizes
- Stacks nicely on mobile
- Maintains readability

## 📝 **Best Practices**

### **Writing Descriptions**

✅ **Good:**

- "Essential reading for understanding distributed consensus algorithms"
- "Foundational paper that influenced modern database design"
- "Practical guide with real-world examples from Google's experience"

❌ **Avoid:**

- "Good book"
- "Interesting paper"
- Too long (keep under 200 characters)

### **Choosing Tags**

- Use same tags as your blog posts
- Be specific (not just "technology")
- Common tags: `distributed-systems`, `kubernetes`, `databases`, `sre`, `python`

### **Link Selection**

- Official publisher links
- Arxiv for papers
- Author's website
- Amazon/O'Reilly for books

## 🎨 **Customization**

### **Change Number of Items Per Post**

In blog layouts, adjust `maxItems`:

```tsx
<ReadingList filterTags={tags} maxItems={3} />  // Show 3 items
<ReadingList filterTags={tags} maxItems={5} />  // Show 5 items
```

### **Show All Items (No Filtering)**

```tsx
<ReadingList filterTags={[]} maxItems={10} /> // Show first 10, unfiltered
```

### **Disable on Specific Posts**

Set in `personalConfig.js`:

```javascript
preferences: {
  showReadingList: false,  // Hides reading list globally
}
```

Or remove the `<ReadingList />` component from specific layout files.

## 🌈 **Styling**

### **Container**

- Orange gradient background
- Rounded corners
- Border accent

### **Cards**

- White background
- Hover border color change (orange)
- Shadow on hover
- Smooth transitions

### **Icons**

- Book: Orange background
- Paper: Blue background
- Rounded corners
- Consistent sizing

## 📊 **Where It Appears**

Reading List shows on:

- ✅ Individual blog posts (all layouts)
- ✅ PostSimple layout
- ✅ PostLayout layout
- ✅ PostBanner layout

Does NOT show on:

- ❌ Blog listing pages
- ❌ Homepage
- ❌ Tags pages

## 💡 **Use Cases**

### **Tutorial Posts**

Show foundational books/papers for deeper learning

### **Technical Deep Dives**

Reference research papers you discussed

### **Review Posts**

Link to the actual resources you're reviewing

### **Opinion Pieces**

Support your arguments with authoritative sources

## 🔧 **Troubleshooting**

**Reading list not showing?**

- Check `showReadingList: true` in preferences
- Verify tags match between post and reading items
- Ensure items exist in `personalConfig.js`

**Wrong items showing?**

- Check tag spelling (case-sensitive)
- Verify tags array in reading items
- Review `filterTags` parameter

**Too many/few items?**

- Adjust `maxItems` parameter
- Modify `maxReadingListItems` in preferences

## ✨ **Pre-Loaded Examples**

Your config comes with 5 example items:

1. **Designing Data-Intensive Applications** (Book)
2. **The Google File System** (Research Paper)
3. **Site Reliability Engineering** (Book)
4. **Kubernetes: The Definitive Guide** (Book)
5. **Bigtable: A Distributed Storage System** (Research Paper)

Feel free to:

- Edit these examples
- Add your own
- Remove what's not relevant

## 🎯 **Benefits**

✅ **Adds Value** - Gives readers resources to learn more  
✅ **Shows Expertise** - Demonstrates your knowledge sources  
✅ **Better Than Tags** - More useful than just topic labels  
✅ **Encourages Learning** - Points readers to quality resources  
✅ **Professional** - Makes blog feel like a learning hub

---

**Your blog posts now include curated, valuable resources for continued learning!** 📚✨
