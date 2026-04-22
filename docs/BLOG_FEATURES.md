# Blog Enhancement Features

This document describes how to use the new blog enhancement features.

## Table of Contents

Automatically generated for blog posts with h2 and h3 headings. Shows on the right sidebar on desktop.

**Usage:** Already integrated into `BlogPostLayout` component. Just use proper heading structure in your MDX files.

```mdx
## Introduction

Content here...

### Subsection

More content...

## Main Topic
```

## Related Posts

Shows related articles at the bottom of blog posts based on shared tags.

**Usage in blog post layout:**

```tsx
import RelatedPosts from '@/components/RelatedPosts'
import { allBlogs } from 'contentlayer/generated'

// In your component
;<RelatedPosts currentSlug={post.slug} currentTags={post.tags} allPosts={allBlogs} maxPosts={3} />
```

## Series/Collections

Group related posts into a series with navigation between parts.

**Usage in MDX frontmatter:**

```yaml
---
title: 'Building a Kubernetes Cluster - Part 1'
series:
  name: 'Kubernetes from Scratch'
  part: 1
---
```

**Usage in blog post:**

```tsx
import SeriesBanner from '@/components/SeriesBanner'

;<SeriesBanner
  seriesName="Kubernetes from Scratch"
  currentPart={1}
  posts={[
    { slug: 'k8s-part-1', title: 'Introduction', part: 1 },
    { slug: 'k8s-part-2', title: 'Setup', part: 2 },
    { slug: 'k8s-part-3', title: 'Networking', part: 3 },
  ]}
/>
```

## Code Playground

Interactive JavaScript code editor with live execution.

**Usage in MDX:**

```mdx
import CodePlayground from '@/components/CodePlayground'

<CodePlayground
  title="Try JavaScript Array Methods"
  initialCode={`const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled);`}
  language="javascript"
/>
```

## View Counter

Tracks and displays page views for blog posts.

**Usage:**

```tsx
import ViewCounter from '@/components/ViewCounter'

;<ViewCounter slug={post.slug} showCount={true} />
```

**Note:** Currently uses localStorage. In production, integrate with your analytics service (Vercel Analytics, Google Analytics, etc.)

## Social Proof Components

### GitHub Stats

Displays your GitHub statistics and top repositories.

**Usage:**

```tsx
import GitHubStats from '@/components/GitHubStats'

;<GitHubStats username="abhibongale" />
```

### Achievements

Shows certifications and awards.

**Customize in:** `components/Achievements.tsx`

```tsx
const achievements = [
  {
    title: 'Your Certification',
    issuer: 'Issuing Organization',
    date: '2024',
    icon: '🏆',
    link: 'https://...',
  },
  // Add more...
]
```

## Complete Blog Post Example

```mdx
---
title: 'Understanding Kubernetes Networking - Part 1'
date: '2024-04-22'
tags: ['kubernetes', 'networking', 'devops']
summary: 'Deep dive into Kubernetes networking fundamentals'
series:
  name: 'Kubernetes Networking'
  part: 1
---

import CodePlayground from '@/components/CodePlayground'
import SeriesBanner from '@/components/SeriesBanner'

<SeriesBanner
  seriesName="Kubernetes Networking"
  currentPart={1}
  posts={[
    { slug: 'k8s-networking-1', title: 'Fundamentals', part: 1 },
    { slug: 'k8s-networking-2', title: 'Services', part: 2 },
  ]}
/>

## Introduction

This is the first post in our series...

## Network Basics

### Pod Networking

Pods communicate through...

## Try It Yourself

<CodePlayground
  title="Create a Simple Network Request"
  initialCode={`fetch('https://api.example.com')
  .then(res => res.json())
  .then(data => console.log(data));`}
/>

## Conclusion

In the next part, we'll explore...
```

## Integration Checklist

- [x] Table of Contents - Auto-generated
- [x] View Counter - Integrated in BlogPostLayout
- [x] Related Posts - Add to blog post layout template
- [x] Series Banner - Available as MDX component
- [x] Code Playground - Available as MDX component
- [x] GitHub Stats - Added to About page
- [x] Achievements - Added to About page

## Performance Notes

- All interactive components are client-side ('use client')
- GitHub Stats fetches on mount (cached by browser)
- View counter uses localStorage (replace with API in production)
- Code playground runs in browser sandbox (JavaScript only)
