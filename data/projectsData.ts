import personalConfig from './personalConfig'

export interface Project {
  title: string
  description: string
  href: string
  imgSrc?: string
  demoUrl?: string
  technologies?: string[]
  contributions?: string
  timeline?: string
  status?: string
  category?: string
  featured?: boolean
  lastUpdated?: string
  role?: string
}

const projectsData: Project[] = personalConfig.projects as Project[]

export default projectsData
