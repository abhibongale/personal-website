import { ReactNode } from 'react'
import TableOfContents from './TableOfContents'
import ViewCounter from './ViewCounter'

interface BlogPostLayoutProps {
  children: ReactNode
  slug: string
  title: string
  date: string
  readingTime?: string
}

export default function BlogPostLayout({
  children,
  slug,
  title,
  date,
  readingTime,
}: BlogPostLayoutProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_250px]">
      <article className="min-w-0">
        <header className="mb-8">
          <h1 className="mb-2 text-4xl font-extrabold text-gray-900 dark:text-gray-100">{title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <time dateTime={date}>{date}</time>
            {readingTime && <span>• {readingTime}</span>}
            <ViewCounter slug={slug} />
          </div>
        </header>
        <div className="prose prose-lg dark:prose-invert max-w-none">{children}</div>
      </article>
      <aside className="hidden lg:block">
        <TableOfContents />
      </aside>
    </div>
  )
}
