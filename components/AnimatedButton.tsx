import { ReactNode } from 'react'

interface AnimatedButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
}

export default function AnimatedButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
}: AnimatedButtonProps) {
  const baseStyles =
    'group relative inline-flex items-center justify-center overflow-hidden rounded-lg px-6 py-3 font-medium transition-all duration-300'

  const variants = {
    primary:
      'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg hover:shadow-xl hover:from-primary-600 hover:to-primary-700',
    secondary:
      'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700',
    outline:
      'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white dark:border-primary-400 dark:text-primary-400',
  }

  const content = (
    <>
      <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
        {children}
      </span>
      <span className="absolute inset-0 z-0 h-full w-full scale-0 rounded-lg bg-white/20 transition-transform duration-300 group-hover:scale-100"></span>
    </>
  )

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {content}
    </button>
  )
}
