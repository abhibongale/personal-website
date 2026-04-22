import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Reading Shelf',
  description:
    'Curated collection of books and research papers on distributed systems, software architecture, and engineering practices that have shaped my technical thinking.',
})

export default function ShelfLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
