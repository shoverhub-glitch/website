export const siteConfig = {
  name: 'ShoverHub',
  tagline: 'Digital Product Studio',
  description: 'Building apps, websites, and tools that push beyond limits. Remote-first studio serving clients globally with a lean, focused approach.',
  url: 'https://shoverhub.com',
  email: 'contact@shoverhub.com',
  social: {
    twitter: 'https://twitter.com/shoverhub',
    github: 'https://github.com/shoverhub',
    linkedin: 'https://linkedin.com/company/shoverhub',
  },
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const services = [
  {
    id: 'app-development',
    title: 'App Development',
    description: 'Native and cross-platform mobile applications built for performance, scalability, and exceptional user experience.',
    icon: 'Smartphone',
    features: ['iOS & Android', 'Cross-Platform', 'API Integration', 'Offline-First'],
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Modern web applications and platforms engineered with cutting-edge frameworks and best practices.',
    icon: 'Globe',
    features: ['React & Next.js', 'Full-Stack', 'Progressive Web Apps', 'Performance Optimized'],
  },
  {
    id: 'product-design',
    title: 'Product Design',
    description: 'User-centered design that transforms complex problems into intuitive, delightful interfaces.',
    icon: 'Palette',
    features: ['UI/UX Design', 'Prototyping', 'Design Systems', 'User Research'],
  },
  {
    id: 'branding-content',
    title: 'Branding & Content',
    description: 'Strategic branding and content that communicates your vision and builds lasting connections.',
    icon: 'PenTool',
    features: ['Brand Identity', 'Content Strategy', 'Copywriting', 'Visual Assets'],
  },
];

export const products = [
  {
    id: 'hostel-manager',
    title: 'Hostel Manager',
    description: 'All-in-one SaaS for hostel and PG owners with property management, tenant tracking, billing, room allocation, staff roles, and analytics.',
    url: 'https://hostelmanager.shoverhub.com',
    status: 'live' as const,
    icon: 'Building2',
    color: '#22c55e',
  },
  {
    id: 'vcard',
    title: 'VCard',
    description: 'Digital invitations and business cards with templates, sharing, customisation, and mobile optimisation.',
    url: 'https://vcard.shoverhub.com',
    status: 'live' as const,
    icon: 'CreditCard',
    color: '#3b82f6',
  },
  {
    id: 'blog',
    title: 'Blog',
    description: 'Stories, insights, and ideas on tech, design, product updates, and culture.',
    url: 'https://blog.shoverhub.com',
    status: 'live' as const,
    icon: 'BookOpen',
    color: '#f59e0b',
  },
  {
    id: 'coming-soon',
    title: 'Coming Soon',
    description: 'More mobile apps and web tools in the pipeline. Stay tuned for what we build next.',
    url: '',
    status: 'coming-soon' as const,
    icon: 'Rocket',
    color: '#8b5cf6',
  },
];

export const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We listen deeply to understand your vision, goals, and constraints before writing a single line of code.',
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'We map the product roadmap, define success metrics, and align every decision with your business objectives.',
  },
  {
    step: '03',
    title: 'Design',
    description: 'We craft interfaces that feel intuitive and look exceptional — balancing aesthetics with usability.',
  },
  {
    step: '04',
    title: 'Build',
    description: 'We ship clean, performant code in focused sprints, keeping you in the loop at every milestone.',
  },
  {
    step: '05',
    title: 'Launch & Iterate',
    description: 'We launch with confidence, measure real-world performance, and iterate based on actual user behavior.',
  },
];

export const blogPosts = [
  {
    slug: 'building-for-scale',
    title: 'Building for Scale: How We Architected Hostel Manager',
    excerpt: 'A deep dive into the technical decisions behind our property management platform.',
    date: '2025-03-15',
    category: 'Engineering',
    readTime: '8 min read',
  },
  {
    slug: 'design-system-at-shoverhub',
    title: 'Why We Built Our Own Design System',
    excerpt: 'How a unified design language accelerated our product development across all projects.',
    date: '2025-02-28',
    category: 'Design',
    readTime: '6 min read',
  },
  {
    slug: 'remote-first-culture',
    title: 'Remote-First: How We Stay Aligned Across Time Zones',
    excerpt: 'Our approach to async communication, focused work, and building culture remotely.',
    date: '2025-01-20',
    category: 'Culture',
    readTime: '5 min read',
  },
];

export const whyReasons = [
  {
    title: 'Lean & Focused',
    description: 'No bloated teams or unnecessary layers. We stay small, move fast, and stay focused on what matters — shipping great products.',
    icon: 'Zap',
  },
  {
    title: 'End-to-End Ownership',
    description: 'From strategy to launch and beyond. We own the full product lifecycle so nothing gets lost in handoffs.',
    icon: 'Layers',
  },
  {
    title: 'Built to Last',
    description: 'We write code and design systems that scale. No shortcuts, no tech debt traps, no rebuilds in six months.',
    icon: 'Shield',
  },
  {
    title: 'Remote-First',
    description: 'We work across time zones with async-first communication. Less meetings, more momentum.',
    icon: 'Globe2',
  },
  {
    title: 'Transparent Process',
    description: 'You always know where your project stands. Regular updates, open communication, no surprises.',
    icon: 'Eye',
  },
  {
    title: 'Product Thinking',
    description: 'We don\'t just build features — we think about the product, the user, and the business impact.',
    icon: 'Lightbulb',
  },
];
