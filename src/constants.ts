import { Service, Project, BlogPost, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'High-performance, scalable web applications built with modern frameworks like React and Next.js.',
    icon: 'Code2',
    slug: 'web-development'
  },
  {
    id: '2',
    title: 'E-commerce Solutions',
    description: 'Custom online stores designed to convert visitors into loyal customers with seamless checkout experiences.',
    icon: 'ShoppingBag',
    slug: 'ecommerce'
  },
  {
    id: '3',
    title: 'SEO & Digital Marketing',
    description: 'Data-driven strategies to boost your online visibility and drive organic growth through search engines.',
    icon: 'TrendingUp',
    slug: 'seo-marketing'
  },
  {
    id: '4',
    title: 'UI/UX Design',
    description: 'User-centric designs that blend aesthetics with functionality to provide intuitive digital experiences.',
    icon: 'Palette',
    slug: 'ui-ux-design'
  },
  {
    id: '5',
    title: 'Branding & Identity',
    description: 'Crafting unique brand stories and visual identities that resonate with your target audience.',
    icon: 'Zap',
    slug: 'branding'
  },
  {
    id: '6',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional performance on all devices.',
    icon: 'Smartphone',
    slug: 'mobile-apps'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Lumina SaaS Platform',
    category: 'Web Development',
    image: 'https://picsum.photos/seed/lumina/800/600',
    description: 'A comprehensive analytics dashboard for enterprise teams.',
    client: 'Lumina Tech',
    year: '2024'
  },
  {
    id: '2',
    title: 'EcoStore E-commerce',
    category: 'E-commerce',
    image: 'https://picsum.photos/seed/ecostore/800/600',
    description: 'Sustainable fashion marketplace with integrated carbon tracking.',
    client: 'EcoCollective',
    year: '2023'
  },
  {
    id: '3',
    title: 'Pulse Fitness App',
    category: 'Mobile Design',
    image: 'https://picsum.photos/seed/pulse/800/600',
    description: 'AI-powered personal trainer and nutrition tracker.',
    client: 'Pulse Global',
    year: '2024'
  },
  {
    id: '4',
    title: 'Zenith Branding',
    category: 'Branding',
    image: 'https://picsum.photos/seed/zenith/800/600',
    description: 'Complete visual identity overhaul for a luxury watchmaker.',
    client: 'Zenith Horology',
    year: '2023'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Web Development in 2025',
    excerpt: 'Exploring how AI and edge computing are reshaping the way we build for the web.',
    date: 'March 15, 2024',
    author: 'Alex Rivers',
    image: 'https://picsum.photos/seed/future/800/500',
    category: 'Technology'
  },
  {
    id: '2',
    title: 'Mastering SEO: Beyond Keywords',
    excerpt: 'Why user intent and semantic search are the new pillars of digital visibility.',
    date: 'March 10, 2024',
    author: 'Sarah Chen',
    image: 'https://picsum.photos/seed/seo/800/500',
    category: 'Marketing'
  },
  {
    id: '3',
    title: 'Designing for Accessibility',
    excerpt: 'How to create inclusive digital products that everyone can use effectively.',
    date: 'March 5, 2024',
    author: 'Marcus Thorne',
    image: 'https://picsum.photos/seed/design/800/500',
    category: 'Design'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Jonathan Wright',
    role: 'CEO',
    company: 'TechFlow Solutions',
    content: 'Nexus Digital transformed our online presence. Our conversion rate increased by 45% within the first three months of the new site launch.',
    avatar: 'https://i.pravatar.cc/150?u=jonathan'
  },
  {
    id: '2',
    name: 'Elena Rodriguez',
    role: 'Marketing Director',
    company: 'GreenLife Co.',
    content: 'The level of creativity and technical expertise the team brought to our project was exceptional. They truly understood our brand vision.',
    avatar: 'https://i.pravatar.cc/150?u=elena'
  }
];
