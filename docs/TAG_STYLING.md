# Tag Styling - Button/Card Design

Tags now have a beautiful button/card style with orange gradient accent colors!

## 🎨 New Tag Design

### **Visual Appearance**

```
┌──────────────┐  ┌───────────┐  ┌─────────────┐
│  javascript  │  │  python   │  │  react      │
└──────────────┘  └───────────┘  └─────────────┘
   Orange Pill      Orange Pill     Orange Pill
   Gradient         Gradient        Gradient
```

### **Style Features**

✅ **Rounded Pill Shape** - Fully rounded corners (`rounded-full`)  
✅ **Orange Gradient** - From `primary-500` to `primary-600`  
✅ **White Text** - High contrast on orange background  
✅ **Shadow Effect** - Subtle shadow for depth  
✅ **Hover Animation** - Scales up 5% on hover  
✅ **Dark Mode Support** - Darker gradient in dark mode

## 🎯 Where Tags Appear

### **1. Blog Post Cards (Homepage & Blog List)**

```
┌─────────────────────────────────────┐
│ Blog Post Title                     │
│                                     │
│ ┌──────────┐ ┌──────────┐         │
│ │ python   │ │ devops   │         │
│ └──────────┘ └──────────┘         │
│                                     │
│ Post summary text...                │
└─────────────────────────────────────┘
```

### **2. Individual Blog Posts**

Below the title and metadata, tags appear as clickable orange pills.

### **3. Tags Page**

```
Tags
━━━━━━━━━━━━━━━━━━━━━━━

┌──────────┐  5     ← Tag with count
│ python   │
└──────────┘

┌──────────┐  3
│ devops   │
└──────────┘

┌──────────┐  2
│ react    │
└──────────┘
```

## 🎨 Color Specifications

### **Light Mode**

- **Background**: Gradient from `#FF8700` to `#FF6B00` (orange)
- **Text**: White (`#FFFFFF`)
- **Shadow**: Soft shadow (`shadow-sm`)
- **Hover Shadow**: Enhanced shadow (`shadow-md`)

### **Dark Mode**

- **Background**: Gradient from `#FF7700` to `#FF5500` (darker orange)
- **Text**: White (`#FFFFFF`)
- **Same shadow effects**

## 💫 Hover Effects

When you hover over a tag:

1. **Scale up** - Grows by 5% (`hover:scale-105`)
2. **Shadow increases** - From `shadow-sm` to `shadow-md`
3. **Smooth transition** - 200ms duration
4. **Cursor changes** - Pointer cursor indicates clickability

## 📱 Responsive Design

Tags automatically wrap and adjust:

- **Mobile**: Stacked/wrapped tags with proper spacing
- **Tablet**: Multiple tags per row
- **Desktop**: Optimal spacing and layout

## 🔧 Customization

### **Change Tag Color**

Edit `components/Tag.tsx`:

```tsx
// Current: Orange gradient
className = '... from-primary-500 to-primary-600 ...'

// To blue gradient:
className = '... from-blue-500 to-blue-600 ...'

// To solid color:
className = '... bg-primary-500 ...'
```

### **Change Shape**

```tsx
// Current: Pill (fully rounded)
className = '... rounded-full ...'

// To rounded rectangle:
className = '... rounded-lg ...'

// To sharp corners:
className = '... rounded ...'
```

### **Change Size**

```tsx
// Current: Default size
className = '... px-4 py-1.5 text-sm ...'

// Smaller:
className = '... px-3 py-1 text-xs ...'

// Larger:
className = '... px-5 py-2 text-base ...'
```

### **Remove Hover Animation**

```tsx
// Remove these classes:
hover:scale-105 hover:shadow-md
```

## 🎯 Accessibility

Tags are fully accessible:

- ✅ Semantic HTML (`<Link>` element)
- ✅ Keyboard navigable
- ✅ Screen reader friendly
- ✅ Clear hover/focus states
- ✅ High contrast ratio (white on orange)

## 📊 Consistency

All tags across the site now use the same styling:

- ✅ Blog listings
- ✅ Individual blog posts
- ✅ Tags page
- ✅ Tag archive pages
- ✅ Search results (if applicable)

## 🎨 Visual Examples

### **Blog Post Tags**

```html
<div class="flex flex-wrap gap-2">[javascript] [typescript] [react]</div>
```

### **Tags Page Display**

```html
[python] 5 posts [javascript] 3 posts [devops] 2 posts
```

### **Hover State**

```
Normal:  [javascript]
         ↓
Hover:   [javascript]  ← Slightly larger + more shadow
```

## 🌈 Theme Integration

Tags perfectly match your orange McLaren theme:

- Same orange gradient used throughout site
- Consistent with primary color scheme
- Works in both light and dark modes
- Matches button and accent colors

## ✨ Benefits

✅ **More visible** - Stand out from regular text  
✅ **Clickable appearance** - Look like buttons  
✅ **Professional** - Modern, polished design  
✅ **Consistent** - Same style everywhere  
✅ **Interactive** - Nice hover feedback  
✅ **Branded** - Matches orange theme

---

**Your tags are now eye-catching, professional button-style elements!** 🎨🏷️
