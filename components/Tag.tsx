import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 mr-2 mb-2 inline-block rounded-full bg-gradient-to-r px-4 py-1.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
