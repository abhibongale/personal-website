import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import Image from 'next/image'

const Header = () => {
  let headerClass = 'flex items-center w-full justify-between py-10 transition-all duration-300'
  if (siteMetadata.stickyNav) {
    headerClass +=
      ' sticky top-0 z-50 bg-white/80 backdrop-blur-md dark:bg-gray-950/80 border-b border-gray-200/50 dark:border-gray-800/50'
  } else {
    headerClass += ' bg-white dark:bg-gray-950'
  }

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center gap-3">
          <Image
            src="/static/images/logo.png"
            alt={siteMetadata.headerTitle}
            width={64}
            height={64}
            className="rounded-lg transition-transform hover:scale-105"
          />
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="hidden text-2xl font-semibold sm:block">{siteMetadata.headerTitle}</div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-40 items-center gap-x-4 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="group hover:text-primary-500 dark:hover:text-primary-400 relative m-1 font-medium text-gray-900 transition-colors duration-200 dark:text-gray-100"
              >
                {link.title}
                <span className="from-primary-500 to-primary-600 absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
        </div>
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
