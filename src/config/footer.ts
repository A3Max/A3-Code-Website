export const footerConfig = {
  company: {
    legalName: 'APEX:E3 Enterprise AI Technology',
    registrationNumber: '',
    vatNumber: '',
    jurisdiction: '',
  },
  legal: {
    privacy: '/privacy',
    terms: '/terms',
    cookies: '/cookies',
    disclaimer: '/disclaimer',
  },
  contact: {
    email: 'support@a3code.com',
    phone: '',
    address: '',
    page: '/contact',
  },
  navigation: [
    { label: 'Product', href: '/product' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Docs', href: '/docs' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'About', href: '/about' },
  ],
  support: [
    { label: 'Help Center', href: '/help' },
    { label: 'Status', href: '/status' },
    { label: 'FAQ', href: '/faq' },
  ],
  social: {
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    github: 'https://github.com',
    youtube: 'https://youtube.com',
  },
  newsletter: {
    enabled: true,
    endpoint: '/api/newsletter/subscribe',
  },
};
