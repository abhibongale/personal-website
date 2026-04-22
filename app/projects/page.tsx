import ProjectsLayout from '@/layouts/ProjectsLayout'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Projects',
  description:
    'Open-source contributions to OpenStack Ironic and Metal³, building the future of cloud infrastructure and bare metal automation.',
})

export default function Projects() {
  return <ProjectsLayout />
}
