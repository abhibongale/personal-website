/**
 * Personal Configuration
 *
 * This is your centralized configuration file.
 * Edit this file to update your personal information across the entire website.
 */

const personalConfig = {
  // ============================================
  // PERSONAL INFORMATION
  // ============================================
  name: 'Abhishek Bongale',
  occupation: 'Software Engineer',
  company: 'NuoDB',
  // Note: Bio is in data/authors/default.mdx (MDX files can't import from here)
  bio: `Abhishek Bongale is a passionate Software Engineer working at NuoDB, where he builds scalable distributed database solutions.

With a strong foundation in computer engineering, Abhishek specializes in backend systems, cloud architecture, and performance optimization. He loves exploring new technologies, contributing to open-source projects, and sharing knowledge through technical writing.

When not coding, you'll find him reading tech blogs, experimenting with new frameworks, or working on side projects that solve real-world problems.`,

  // ============================================
  // CONTACT & SOCIAL LINKS
  // ============================================
  email: 'abhishekpbongale@gmail.com',
  github: 'https://github.com/abhibongale',
  githubUsername: 'abhibongale', // Just the username for API calls
  linkedin: 'https://www.linkedin.com/in/abhibongale',
  twitter: 'https://twitter.com/abhibongale', // Update with your actual Twitter
  // Optional social links (uncomment to use)
  // mastodon: 'https://mastodon.social/@yourusername',
  // youtube: 'https://youtube.com/@yourchannel',
  // instagram: 'https://www.instagram.com/yourusername',
  // medium: 'https://medium.com/@yourusername',
  // bluesky: 'https://bsky.app/profile/yourusername',

  // ============================================
  // HERO SECTION (Homepage Banner)
  // ============================================
  hero: {
    title: 'Latest',
    subtitle: 'Thoughts & Projects',
    description:
      'Software Engineer crafting scalable solutions. Exploring distributed systems, cloud tech, and building cool stuff.',
    badges: [
      { text: 'Software Engineer', visible: true },
      { text: '@ NuoDB', visible: true },
    ],
  },

  // ============================================
  // SKILLS & TECHNOLOGIES
  // ============================================
  skills: [
    // Languages
    { name: 'Java', category: 'Languages', level: 'expert', icon: '☕', yearsOfExperience: 3 },
    { name: 'Python', category: 'Languages', level: 'advanced', icon: '🐍', yearsOfExperience: 4 },
    {
      name: 'JavaScript/TypeScript',
      category: 'Languages',
      level: 'advanced',
      icon: '🟨',
      yearsOfExperience: 4,
    },
    { name: 'C++', category: 'Languages', level: 'intermediate', icon: '⚡', yearsOfExperience: 2 },
    { name: 'Go', category: 'Languages', level: 'intermediate', icon: '🔷', yearsOfExperience: 2 },

    // Frontend
    { name: 'React', category: 'Frontend', level: 'advanced', icon: '⚛️', yearsOfExperience: 3 },
    { name: 'Next.js', category: 'Frontend', level: 'advanced', icon: '▲', yearsOfExperience: 2 },
    {
      name: 'Tailwind CSS',
      category: 'Frontend',
      level: 'advanced',
      icon: '🎨',
      yearsOfExperience: 2,
    },

    // Backend
    { name: 'Node.js', category: 'Backend', level: 'advanced', icon: '🟢', yearsOfExperience: 4 },
    { name: 'Spring Boot', category: 'Backend', level: 'expert', icon: '🍃', yearsOfExperience: 5 },
    { name: 'REST APIs', category: 'Backend', level: 'expert', icon: '🔌', yearsOfExperience: 5 },

    // Database
    {
      name: 'PostgreSQL',
      category: 'Database',
      level: 'advanced',
      icon: '🐘',
      yearsOfExperience: 4,
    },
    {
      name: 'MongoDB',
      category: 'Database',
      level: 'intermediate',
      icon: '🍃',
      yearsOfExperience: 2,
    },
    { name: 'MySQL', category: 'Database', level: 'advanced', icon: '🐬', yearsOfExperience: 4 },
    {
      name: 'Redis',
      category: 'Database',
      level: 'intermediate',
      icon: '🔴',
      yearsOfExperience: 2,
    },

    // DevOps & Cloud
    { name: 'Docker', category: 'DevOps', level: 'advanced', icon: '🐳', yearsOfExperience: 4 },
    {
      name: 'Kubernetes',
      category: 'DevOps',
      level: 'intermediate',
      icon: '☸️',
      yearsOfExperience: 2,
    },
    { name: 'AWS', category: 'Cloud', level: 'advanced', icon: '☁️', yearsOfExperience: 3 },
    { name: 'CI/CD', category: 'DevOps', level: 'advanced', icon: '🔄', yearsOfExperience: 4 },
  ],

  // You can also add logos instead of icons:
  // { name: 'React', category: 'Frontend', level: 'advanced', logo: '/static/images/tech/react.svg', yearsOfExperience: 3 },

  // Technologies you're currently learning
  currentlyExploring: 'Rust, GraphQL, and AI/ML Engineering',

  // ============================================
  // ABOUT PAGE - EXPERIENCE & FUN FACTS
  // ============================================
  experience: [
    {
      role: 'Software Quality Engineer Intern',
      company: 'RH',
      period: '2024 - Present',
      current: true,
      description: 'Making sure Quality stays',
    },
    {
      role: 'Software Quality Engineer Intern',
      company: 'NuoDB',
      period: '2023 - 2024',
      current: false,
      description:
        'Building scalable distributed database solutions and contributing to open-source infrastructure projects',
    },
    {
      role: 'Software Developer',
      company: 'Freelancer',
      period: '2020 - 2021',
      current: false,
      description: 'Build a Dashboard application that allows to monitor huge battries',
    },

    // Add more experience entries here
  ],

  funFacts: [
    '☕ Coffee enthusiast - fuel for late-night coding sessions',
    '🏔️ Love hiking and outdoor adventures',
    '📖 Always reading about distributed systems',
    '🎮 Casual gamer in free time',
  ],

  // ============================================
  // PROJECTS
  // ============================================
  projects: [
    {
      title: 'OpenStack Ironic',
      description: `Contributing to OpenStack Ironic, a bare metal provisioning service that enables organizations to manage physical servers as easily as virtual machines. Working on features for automated hardware deployment, power management, and integration with modern cloud platforms.`,
      imgSrc: '/static/images/projects/ironic.svg',
      href: 'https://github.com/openstack/ironic',
      technologies: ['Python', 'OpenStack', 'REST API', 'SQLAlchemy'],
      contributions: '15+ merged PRs',
      timeline: '2023 - Present',
      status: 'active',
      category: 'Infrastructure',
      featured: true,
      lastUpdated: 'January 2026',
      role: 'Core Contributor',
      // demoUrl: 'https://demo.example.com', // Optional: Add if you have a demo
    },
    {
      title: 'Metal³',
      description: `Active contributor to Metal³, a Kubernetes-native bare metal infrastructure manager. Helping build tooling that brings declarative, Kubernetes-style APIs to bare metal host management, enabling GitOps workflows for physical infrastructure.`,
      imgSrc: '/static/images/projects/metal3.svg',
      href: 'https://github.com/metal3-io/metal3-docs',
      technologies: ['Go', 'Kubernetes', 'Bare Metal', 'GitOps'],
      contributions: 'Active Contributor',
      timeline: '2024 - Present',
      status: 'active',
      category: 'Cloud Native',
      featured: false,
      lastUpdated: 'December 2025',
      role: 'Contributor',
    },
    // Add more projects here
    // {
    //   title: 'Your Project',
    //   description: 'Description of your project...',
    //   imgSrc: '/static/images/projects/yourproject.png',
    //   href: 'https://github.com/yourusername/project',
    //   technologies: ['Tech1', 'Tech2'],
    //   contributions: '10 PRs',
    //   timeline: '2024 - Present',
    //   status: 'active', // 'active', 'completed', or 'archived'
    //   category: 'Backend', // e.g., 'Frontend', 'Backend', 'Infrastructure', 'Cloud Native'
    //   featured: false, // Set to true to feature on homepage and projects page
    //   lastUpdated: 'January 2026',
    //   role: 'Maintainer', // e.g., 'Creator', 'Maintainer', 'Contributor', 'Core Contributor'
    //   demoUrl: 'https://demo.example.com', // Optional: Add if you have a live demo
    // },
  ],

  // ============================================
  // ACHIEVEMENTS & CERTIFICATIONS
  // Note: Control visibility via preferences.showCertifications, showContributions, etc.
  // ============================================
  achievements: [
    // Open Source Contributions
    {
      title: 'OpenStack Ironic Core Contributor',
      issuer: 'OpenStack Foundation',
      date: '2023',
      icon: '🚀',
      link: 'https://github.com/openstack/ironic',
      category: 'contribution',
      verified: true,
      description:
        'Active contributor to OpenStack Ironic bare metal provisioning service with 15+ merged pull requests',
      skills: ['Python', 'OpenStack', 'Bare Metal', 'REST APIs', 'SQLAlchemy'],
    },
    {
      title: 'Metal³ Community Contributor',
      issuer: 'Metal³ Project',
      date: '2024',
      icon: '🔧',
      link: 'https://github.com/metal3-io',
      category: 'contribution',
      verified: true,
      description:
        'Contributing to Kubernetes-native bare metal infrastructure management and GitOps workflows',
      skills: ['Kubernetes', 'Go', 'Bare Metal', 'GitOps', 'Cluster API'],
    },

    // Certifications (update with your actual certifications)
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'January 2024',
      expiryDate: 'January 2027',
      icon: '☁️',
      image: '/static/images/certifications/aws-saa.png', // Optional: Add certification badge image
      link: '#', // Update with your credential link
      category: 'certification',
      credentialId: 'AWS-SAA-C03-XXXXX',
      verified: true,
      description:
        'Professional-level certification for designing distributed systems and scalable applications on AWS',
      skills: [
        'AWS',
        'Cloud Architecture',
        'Solutions Design',
        'High Availability',
        'Cost Optimization',
      ],
    },

    // Speaking Engagements (update with your actual talks)
    {
      title: 'Cloud Native Summit Speaker',
      issuer: 'Cloud Native Computing Foundation',
      date: 'March 2024',
      icon: '🎤',
      link: '#', // Update with event link
      category: 'speaking',
      verified: false,
      description:
        'Presented on "Bare Metal as Code: Managing Physical Infrastructure with Kubernetes"',
      skills: ['Public Speaking', 'Kubernetes', 'Infrastructure as Code'],
    },

    // Awards (update with your actual awards)
    {
      title: 'Best Open Source Contribution Award',
      issuer: 'OpenStack Foundation',
      date: '2023',
      icon: '🏆',
      link: '#',
      category: 'award',
      verified: true,
      description: 'Recognized for significant contributions to OpenStack Ironic project',
      skills: ['Open Source', 'Collaboration', 'Community Engagement'],
    },
    // Add more achievements here
    // {
    //   title: 'Your Certification',
    //   issuer: 'Issuing Organization',
    //   date: '2024',
    //   icon: '🏅',
    //   image: '/static/images/certifications/your-cert.png', // Optional badge/logo image
    //   link: 'https://...',
    //   category: 'certification', // 'certification' | 'contribution' | 'speaking' | 'award'
    //   credentialId: 'CERT-123456',
    //   expiryDate: '2027',
    //   verified: true,
    //   description: 'Description of the certification...',
    //   skills: ['Skill 1', 'Skill 2', 'Skill 3'],
    // },
  ],

  // ============================================
  // WORK EXPERIENCE (Deprecated - use experience array above)
  // ============================================
  // Note: The experience array is defined earlier in this file (line 90)
  // This section is kept for reference only

  // ============================================
  // EDUCATION (Optional)
  // ============================================
  education: [
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'Your University',
      location: 'City, Country',
      year: '2020',
      gpa: '3.8/4.0', // Optional
    },
    // Add more education here
  ],

  // ============================================
  // FEATURED BLOG POSTS (Optional)
  // Use this to highlight specific posts on homepage
  // ============================================
  featuredPosts: [
    // 'contributing-to-openstack-ironic', // slug of blog post
    // Add post slugs here to feature them
  ],

  // ============================================
  // ANALYTICS & INTEGRATIONS
  // ============================================
  analytics: {
    // Google Analytics - Get your ID from https://analytics.google.com
    // Format: G-XXXXXXXXXX
    googleAnalyticsId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || '',

    // Uncomment to use other analytics services:
    // umamiAnalytics: {
    //   umamiWebsiteId: process.env.NEXT_UMAMI_ID,
    //   src: 'https://analytics.umami.is/script.js',
    // },
    // plausibleAnalytics: {
    //   plausibleDataDomain: 'yourdomain.com',
    // },
  },

  // ============================================
  // READING LIST (Books & Research Papers)
  // ============================================
  readingList: [
    {
      title: 'Designing Data-Intensive Applications',
      author: 'Martin Kleppmann',
      type: 'book',
      description:
        'The big ideas behind reliable, scalable, and maintainable systems. Essential reading for understanding distributed systems and database internals.',
      link: 'https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/',
      year: '2017',
      tags: ['distributed-systems', 'databases', 'architecture'],
      status: 'completed',
      rating: 5,
      publisher: "O'Reilly Media",
      dateRead: 'December 2023',
      featured: true,
      notes:
        'A must-read for anyone working with distributed systems. The chapter on replication and partitioning changed how I think about data architecture.',
      // coverImage: '/static/images/shelf/ddia.jpg', // Optional: Add cover image
    },
    {
      title: 'The Google File System',
      author: 'Sanjay Ghemawat, Howard Gobioff, and Shun-Tak Leung',
      type: 'research-paper',
      description:
        'Foundational paper on distributed file systems. Introduced concepts that influenced Hadoop HDFS and many modern distributed storage systems.',
      link: 'https://static.googleusercontent.com/media/research.google.com/en//archive/gfs-sosp2003.pdf',
      year: '2003',
      tags: ['distributed-systems', 'storage'],
      status: 'completed',
      rating: 5,
      conference: 'SOSP 2003',
      dateRead: 'January 2024',
      featured: true,
      notes:
        'Fundamental concepts in distributed file systems. Understanding the trade-offs between consistency and availability in large-scale systems.',
    },
    {
      title: 'Site Reliability Engineering',
      author: 'Google',
      type: 'book',
      description:
        "Google's approach to building and running production systems at scale. Learn about SLOs, error budgets, and automation.",
      link: 'https://sre.google/books/',
      year: '2016',
      tags: ['sre', 'devops', 'reliability'],
      status: 'reading',
      rating: 4,
      publisher: "O'Reilly Media",
      notes:
        'Currently working through the chapters on monitoring and alerting. The concept of error budgets is fascinating.',
    },
    {
      title: 'Kubernetes: The Definitive Guide',
      author: 'Kelsey Hightower, Brendan Burns, Joe Beda',
      type: 'book',
      description:
        'Comprehensive guide to Kubernetes from its creators. Essential for understanding container orchestration and cloud-native architecture.',
      link: 'https://www.oreilly.com/library/view/kubernetes-up-and/9781098110192/',
      year: '2022',
      tags: ['kubernetes', 'containers', 'cloud-native'],
    },
    {
      title: 'Bigtable: A Distributed Storage System',
      author: 'Fay Chang et al.',
      type: 'research-paper',
      description:
        'Google Bigtable paper that influenced HBase, Cassandra, and other NoSQL databases. Key concepts in distributed data storage.',
      link: 'https://static.googleusercontent.com/media/research.google.com/en//archive/bigtable-osdi06.pdf',
      year: '2006',
      tags: ['nosql', 'distributed-systems', 'databases'],
    },
    // Add more books and research papers here
    // Template with all fields:
    // {
    //   title: 'Book or Paper Title',
    //   author: 'Author Name',
    //   type: 'book', // or 'research-paper'
    //   description: 'Brief description of the content...',
    //   link: 'https://...',
    //   year: '2024',
    //   tags: ['tag1', 'tag2', 'tag3'],
    //   status: 'completed', // 'want-to-read', 'reading', or 'completed'
    //   rating: 5, // 1-5 stars (optional)
    //   coverImage: '/static/images/shelf/cover.jpg', // Optional cover image
    //   publisher: 'Publisher Name', // For books
    //   conference: 'Conference Name', // For research papers
    //   dateRead: 'Month Year', // When you finished it
    //   featured: false, // Set to true to feature in "Recommended Reading"
    //   notes: 'Your personal notes or key takeaways...', // Optional
    // },
  ],

  // ============================================
  // SITE PREFERENCES
  // ============================================
  preferences: {
    showGitHubStats: true,
    showAchievements: true,
    showSkills: true,
    maxProjectsOnHomepage: 6,
    maxBlogPostsOnHomepage: 5,
    // Blog layout options: 'PostSimple', 'PostLayout', 'PostBanner'
    // PostSimple: Clean layout with TOC sidebar (recommended)
    // PostLayout: Full layout with author info and TOC
    // PostBanner: Layout with featured image banner and TOC
    defaultBlogLayout: 'PostSimple',
    // Reading list
    showReadingList: true,
    maxReadingListItems: 5, // Max items to show per blog post
    // Achievement categories to show (set to false to hide entire category)
    // This allows you to control which types of achievements are displayed without deleting them
    showCertifications: false, // Certifications: Set to true when you get certifications
    showContributions: true, // Open Source: Currently showing OpenStack & Metal³ contributions
    showSpeaking: false, // Speaking: Set to true when you speak at events
    showAwards: false, // Awards: Set to true when you receive awards
    // Projects settings
    showFeaturedProjects: true, // Show featured projects section
    showProjectFilters: true, // Show technology and status filters on projects page
  },

  // ============================================
  // SITE METADATA
  // ============================================
  site: {
    title: 'Abhishek Bongale',
    description:
      'Software Engineer specializing in distributed systems, cloud infrastructure, and bare metal automation. Active contributor to OpenStack Ironic and Metal³. Writing about Kubernetes, software architecture, and modern engineering practices.',
    siteUrl: 'https://yourdomain.com', // Update with your deployed URL
    language: 'en-us',
    theme: 'system', // system, dark or light
    stickyNav: true,
  },
}

export default personalConfig
