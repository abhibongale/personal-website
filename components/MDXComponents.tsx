import TOCInline from 'pliny/ui/TOCInline'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'
import CodePlayground from './CodePlayground'
import SeriesBanner from './SeriesBanner'
import ViewCounter from './ViewCounter'
import AnimatedButton from './AnimatedButton'
import GitHubStats from './GitHubStats'
import Achievements from './Achievements'
import Pre from './Pre'

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
  CodePlayground,
  SeriesBanner,
  ViewCounter,
  AnimatedButton,
  GitHubStats,
  Achievements,
}
