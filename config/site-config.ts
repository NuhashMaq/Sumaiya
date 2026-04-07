import { env } from '../env.mjs';

export const siteConfig = {
  title: 'Sumaiya Binty Kamal • Civil Engineering Portfolio',
  name: 'Sumaiya Binty Kamal',
  description:
    'Final year Civil Engineering student at RUET with interests in research, academic writing, and practical engineering problem solving.',
  keywords: [
    'Sumaiya Binty Kamal',
    'Civil Engineering Portfolio',
    'RUET Civil Engineering',
    'Civil Engineering Student Bangladesh',
    'Undergraduate Research',
    'Conference Publication',
    'Academic Writing',
    'Structural Engineering',
    'Geotechnical Engineering',
    'Transportation Engineering',
    'Infrastructure Engineering',
    'AutoCAD',
    'ETABS',
    'ArcGIS',
  ],

  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },

  url: env.SITE_URL || 'https://portfolio-sumaiya.vercel.app/',
  ogImage: `${env.SITE_URL || 'https://portfolio-sumaiya.vercel.app/'}/og-image.png`,
  twitterHandle: '@sumaiya',
  locale: 'en_BD',
  author: {
    name: 'Sumaiya Binty Kamal',
    url: env.SITE_URL || 'https://portfolio-sumaiya.vercel.app/',
    email: env.CONTACT_EMAIL,
  },
  themeColor: '#0f172a',
  googleSiteVerificationId: '',

  metadata: {
    title: 'Sumaiya Binty Kamal • Civil Engineering Portfolio',
    description:
      'Explore the education, research activities, publications, and achievements of Sumaiya Binty Kamal.',
    openGraph: {
      type: 'website',
      url: env.SITE_URL,
      title: 'Sumaiya Binty Kamal • Civil Engineering Portfolio',
      description:
        'Explore the education, research activities, publications, and achievements of Sumaiya Binty Kamal.',
      siteName: 'Sumaiya Binty Kamal',
      images: [
        {
          url: `${env.SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: 'Sumaiya Binty Kamal Portfolio Preview',
        },
      ],
      locale: 'en_BD',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@sumaiya',
      creator: '@sumaiya',
      title: 'Sumaiya Binty Kamal • Civil Engineering Portfolio',
      description:
        'Civil Engineering student profile featuring academic progress, publications, skills, and research engagement.',
      images: [`${env.SITE_URL}/og-image.png`],
    },
  },
};
