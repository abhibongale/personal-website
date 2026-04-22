'use client'

import { KBarSearchProvider } from 'pliny/search/KBar'
import { useRouter } from 'next/navigation'
import { CoreContent } from 'pliny/utils/contentlayer'
import { Blog } from 'contentlayer/generated'

interface ShelfItem {
  title: string
  summary: string
  author: string
  tags: string[]
  type: 'Shelf'
  slug: string
  path: string
  date: string
  itemType: string
  year?: string
  link?: string
}

type SearchDocument = CoreContent<Blog> | ShelfItem

export const SearchProvider = ({ children }) => {
  const router = useRouter()
  return (
    <KBarSearchProvider
      kbarConfig={{
        searchDocumentsPath: 'search.json',
        defaultActions: [
          {
            id: 'homepage',
            name: 'Homepage',
            keywords: '',
            shortcut: ['h'],
            section: 'Navigation',
            perform: () => router.push('/'),
          },
          {
            id: 'blog',
            name: 'Blog',
            keywords: 'posts articles writing',
            shortcut: ['b'],
            section: 'Navigation',
            perform: () => router.push('/blog'),
          },
          {
            id: 'projects',
            name: 'Projects',
            keywords: 'code work portfolio',
            shortcut: ['p'],
            section: 'Navigation',
            perform: () => router.push('/projects'),
          },
          {
            id: 'shelf',
            name: 'Reading Shelf',
            keywords: 'books papers reading recommendations',
            shortcut: ['s'],
            section: 'Navigation',
            perform: () => router.push('/shelf'),
          },
          {
            id: 'about',
            name: 'About',
            keywords: 'bio information contact',
            shortcut: ['a'],
            section: 'Navigation',
            perform: () => router.push('/about'),
          },
        ],
        onSearchDocumentsLoad(json) {
          return json.map((item: SearchDocument) => {
            // Handle Shelf items
            if (item.type === 'Shelf') {
              const shelfItem = item as ShelfItem
              return {
                id: shelfItem.slug,
                name: shelfItem.title,
                keywords: `${shelfItem.summary} ${shelfItem.author} ${shelfItem.tags.join(' ')}`,
                section: `📚 ${shelfItem.itemType === 'book' ? 'Books' : 'Papers'}`,
                subtitle: `${shelfItem.author}${shelfItem.year ? ' • ' + shelfItem.year : ''}`,
                perform: () => router.push('/shelf'),
              }
            }

            // Handle Blog posts
            const post = item as CoreContent<Blog>
            return {
              id: post.path,
              name: post.title,
              keywords: post?.summary || '',
              section: '📝 Blog Posts',
              subtitle: post.tags?.join(', ') || '',
              perform: () => router.push('/' + post.path),
            }
          })
        },
      }}
    >
      {children}
    </KBarSearchProvider>
  )
}
