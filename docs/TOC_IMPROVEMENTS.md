# Table of Contents - Visual Improvements

The Table of Contents has been enhanced with better visual hierarchy and proper indentation.

## 🎨 Visual Hierarchy

### **Before:**

```
Table of Contents
├ Introduction
├ Main Topic
├   Subsection        (simple indent)
├ Another Section
```

### **After:**

```
CONTENTS
━━━━━━━━━━━━━━━━━━━━

● Introduction        (h2 - bullet point, bold)
● Main Topic          (h2 - bullet point, bold)
  │ Subsection        (h3 - left border, indented)
  │ Another Sub       (h3 - left border, indented)
● Another Section     (h2 - bullet point, bold)
  │ Sub Content       (h3 - left border, indented)
● Conclusion          (h2 - bullet point, bold)
```

## 📐 Spacing & Indentation

### **H2 Headings (Main Sections)**

- Orange bullet point (•)
- **Bold font** by default
- **Bolder + orange** when active
- No indentation
- More spacing

### **H3 Headings (Subsections)**

- Indented **16px** (4 units)
- Left **border** (gray)
- Active state shows **orange border**
- Normal font weight
- Clearly nested under parent

## 🎯 Active State

### **When scrolling to a section:**

**H2 (Main Section):**

```
● Introduction         ← Bold, orange text
```

**H3 (Subsection):**

```
  ┃ Subsection        ← Orange left border, bold text
```

## 🖥️ Visual Example

```
╔═══════════════════════════╗
║ CONTENTS                  ║
║━━━━━━━━━━━━━━━━━━━━━━━━━║
║                           ║
║ ● Introduction            ║  ← h2
║ ● Getting Started         ║  ← h2 (active = orange + bold)
║   │ Prerequisites         ║  ← h3 (indented + border)
║   │ Installation          ║  ← h3 (indented + border)
║ ● Main Content            ║  ← h2
║   ┃ Important Concept     ║  ← h3 active (orange border)
║   │ Code Examples         ║  ← h3
║ ● Conclusion              ║  ← h2
║                           ║
╚═══════════════════════════╝
```

## 🎨 Styling Details

### **Container**

- Gradient background (white → gray-50)
- Rounded corners
- Subtle shadow
- Border
- Sticky positioning

### **Header**

- Uppercase text
- Icon (list icon)
- Bottom border separator
- Smaller, more refined

### **H2 Items**

- Orange dot bullet (●)
- Font: Medium weight
- Active: Bold + orange
- Spacing: 4px vertical

### **H3 Items**

- Indented 16px
- Left border (2px gray)
- Active: Orange border
- Font: Normal weight
- Clear visual nesting

### **Hover States**

- Text color transitions to orange
- Smooth 200ms transition
- Cursor pointer

### **Scroll Behavior**

- Smooth scroll to section
- Prevents default jump
- Centers section in view

## 🎯 Benefits

✅ **Clear hierarchy** - Easy to see parent/child relationships  
✅ **Better scanning** - Bullets help identify main sections  
✅ **Visual feedback** - Active section is obvious  
✅ **Improved spacing** - Not cramped, easy to read  
✅ **Professional look** - Clean, modern design  
✅ **Color consistency** - Matches orange theme

## 📱 Responsive Behavior

- **Desktop (≥1280px)**: Full TOC visible
- **Tablet/Mobile (<1280px)**: TOC hidden (saves space)

## 🔧 Customization

### **Change Indentation**

In `TableOfContents.tsx`:

```tsx
// Current: 16px (ml-4)
className={`${isH3 ? 'ml-4 border-l-2 ...' : ''}`}

// To increase: ml-6 (24px) or ml-8 (32px)
className={`${isH3 ? 'ml-6 border-l-2 ...' : ''}`}
```

### **Change Bullet Style**

```tsx
// Current: filled circle
<span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-primary-500"></span>

// To change to square:
<span className="mr-2 inline-block h-1.5 w-1.5 bg-primary-500"></span>

// To change to larger:
<span className="mr-2 inline-block h-2 w-2 rounded-full bg-primary-500"></span>
```

### **Change Border Color**

```tsx
// Current: gray with orange on active
border-gray-200 dark:border-gray-700

// To use different color:
border-blue-200 dark:border-blue-700
```

## 🎨 Color Scheme

- **Primary orange**: Active states, bullets
- **Gray**: Borders, inactive text
- **White → Gray-50**: Background gradient
- **Dark mode**: Automatic color adaptation

## ✨ Final Result

The TOC now has:

- Professional visual hierarchy
- Clear parent-child relationships
- Easy-to-scan structure
- Consistent orange branding
- Smooth interactions
- Perfect spacing

---

**Your blog posts now have a beautiful, functional Table of Contents!** 📑✨
