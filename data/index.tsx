import { Linkedin, Mail, Phone, User, Zap } from 'lucide-react';

import {
  asanaIcon,
  client_1,
  client_2,
  client_3,
  client_4,
  discord,
  dribble,
  dribbleIcon,
  dribbleLight,
  facebook,
  figmaIcon,
  framerIcon,
  graphicDesignIcon,
  graphicDesignIconLight,
  instagramIcon,
  instagramIconLight,
  linkedInIcon,
  linkedInIconLight,
  notionIcon,
  pinterest,
  pixelworksLogo,
  pixelworksLogoLight,
  project_1,
  project_2,
  seoOptIcon,
  seoOptIconLight,
  slackIcon,
  snapchat,
  spotify,
  vortexLogo,
  vortexLogoLight,
  webDesignIcon,
  webDesignIconLight,
  webDevIcon,
  webDevIconLight,
  webflowIcon,
  XLogo,
  XLogoLight,
} from '@/app/assets/assets';
import type {
  counterListsType,
  FAQ,
  FollowerData,
  myExperienceTypes,
  myServicesPlansTypes,
  myServicesTypes,
  myShowCasesTypes,
  myStackTypes,
  socialBrandsTypes,
  testimonialsTypes,
} from '@/types';
import type { socialListsTypes } from '@/types';
import type { pagesListsType } from '@/types';

export const pagesLists: pagesListsType[] = [
  {
    id: 1,
    title: 'Home',
    href: '/',
    icon: <User />,
  },
  {
    id: 2,
    title: 'Publications',
    href: '/services',
    icon: <Zap />,
  },
  {
    id: 3,
    title: 'Contact',
    href: '/contact',
    icon: <Mail />,
  },
];

export const socialLists: socialListsTypes[] = [
  {
    id: 1,
    title: 'Email',
    icon: <Mail size={22} />,
    link: 'mailto:sumaiyabintekamal219@gmail.com',
  },
  {
    id: 2,
    title: 'LinkedIn',
    icon: <Linkedin size={22} />,
    link: 'https://www.linkedin.com/in/sumaiya-binty-kamal-b2aa7a313/',
  },
  {
    id: 3,
    title: 'Phone',
    icon: <Phone size={22} />,
    link: 'tel:+8801318466465',
  },
];

export const socialBrands: socialBrandsTypes[] = [
  {
    id: 1,
    name: 'RUET',
    link: 'https://www.ruet.ac.bd',
    icon: discord,
    lightIcon: discord,
  },
  {
    id: 2,
    name: 'ICCEI',
    link: 'https://www.ruet.ac.bd',
    icon: dribble,
    lightIcon: dribble,
  },
  {
    id: 3,
    name: 'ACI Chapter',
    link: 'https://www.facebook.com/',
    icon: facebook,
    lightIcon: facebook,
  },
  {
    id: 4,
    name: 'Research',
    link: 'https://scholar.google.com',
    icon: pinterest,
    lightIcon: pinterest,
  },
  {
    id: 5,
    name: 'Leadership',
    link: 'https://www.linkedin.com',
    icon: snapchat,
    lightIcon: snapchat,
  },
  {
    id: 6,
    name: 'Engineering',
    link: 'https://www.asce.org',
    icon: spotify,
    lightIcon: spotify,
  },
];

export const counterLists: counterListsType[] = [
  {
    id: 1,
    title: 'Core Focus Areas',
    value: 4,
  },
  {
    id: 2,
    title: 'Conference Publications',
    value: 2,
  },
  {
    id: 3,
    title: 'Leadership Recognitions',
    value: 3,
  },
  {
    id: 4,
    title: 'Undergraduate Degree Track',
    value: 1,
  },
];

export const myExperience: myExperienceTypes[] = [
  {
    id: 1,
    year: '2022 - Present',
    title: 'B.Sc. in Civil Engineering',
    company: 'Rajshahi University of Engineering & Technology (RUET)',
    label: 'Undergraduate',
    description:
      'Final-year civil engineering student building a strong foundation in engineering fundamentals, research skills, technical communication, and analytical study.',
    link: 'https://www.ruet.ac.bd',
    logo: vortexLogo,
    logoLight: vortexLogoLight,
  },
  {
    id: 2,
    year: 'May 2019 - Nov 2022',
    title: 'HSC, Science',
    company: 'Satkhira Govt. College',
    label: 'Higher Secondary',
    description:
      'Completed higher secondary science education with strong preparation in mathematics and physical science for later civil engineering study.',
    link: 'https://www.satkhiragovtcollege.edu.bd',
    logo: pixelworksLogo,
    logoLight: pixelworksLogoLight,
  },
];

export const myStack: myStackTypes[] = [
  {
    id: 1,
    title: 'Engineering Tools',
    description: 'AutoCAD, ETABS, ArcGIS',
    logo: figmaIcon,
    lightLogo: figmaIcon,
    link: '/contact',
  },
  {
    id: 2,
    title: 'Productivity Tools',
    description: 'Microsoft Excel, Word, PowerPoint',
    logo: notionIcon,
    lightLogo: notionIcon,
    link: '/contact',
  },
  {
    id: 3,
    title: 'Research Skills',
    description: 'Literature review, writing, citation workflow',
    logo: webflowIcon,
    lightLogo: webflowIcon,
    link: '/services',
  },
  {
    id: 4,
    title: 'Technical Communication',
    description: 'Academic presentation and engineering reporting',
    logo: framerIcon,
    lightLogo: framerIcon,
    link: '/services',
  },
  {
    id: 5,
    title: 'Leadership',
    description: 'Campus ambassador engagement and collaboration',
    logo: slackIcon,
    lightLogo: slackIcon,
    link: '/services',
  },
  {
    id: 6,
    title: 'Engineering Fundamentals',
    description: 'Structural, geotechnical, transportation, infrastructure',
    logo: asanaIcon,
    lightLogo: asanaIcon,
    link: '/services',
  },
];

export const myServices: myServicesTypes[] = [
  {
    id: 1,
    title: 'Academic Research & Technical Writing',
    description:
      'Actively engaged in research-oriented learning through review writing, conference publication context, and academic documentation.',
    icon: webDesignIcon,
    lightIcon: webDesignIconLight,
    link: '/services',
  },
  {
    id: 2,
    title: 'Civil Engineering Software-Based Learning',
    description:
      'Building technical confidence through practical use of civil engineering and productivity tools for analysis and presentation.',
    icon: webDevIcon,
    lightIcon: webDevIconLight,
    link: '/services',
  },
  {
    id: 3,
    title: 'Engineering Communication & Presentation',
    description:
      'Strengthening communication for reports, presentations, and collaborative academic activities beyond coursework.',
    icon: graphicDesignIcon,
    lightIcon: graphicDesignIconLight,
    link: '/services',
  },
  {
    id: 4,
    title: 'Problem Solving Through Analytical Study',
    description:
      'Focused on research-driven and practical approaches to real-world civil engineering problem solving.',
    icon: seoOptIcon,
    lightIcon: seoOptIconLight,
    link: '/services',
  },
];

export const myShowCases: myShowCasesTypes[] = [
  {
    id: 1,
    title: 'Academic Civil Engineering Works',
    description:
      'Detailed project entries will be added soon, including academic works, research-focused contributions, and civil engineering problem-solving projects.',
    link: 'www.ruet.ac.bd',
    type: 'Academic',
    theme: 'In Progress',
    pages: 1,
    image: project_1,
  },
  {
    id: 2,
    title: 'Research-Focused Engineering Projects',
    description:
      'Projects will be updated soon with detailed descriptions covering academic, research, and engineering-based work.',
    link: 'www.ruet.ac.bd',
    type: 'Research',
    theme: 'Planned',
    pages: 1,
    image: project_2,
  },
];

export const testimonials: testimonialsTypes[] = [
  {
    id: 1,
    name: 'Review Paper Published at ICCEI 2025',
    description:
      'Published a review paper in the ICCEI 2025 proceedings and strengthened research writing and academic communication skills through mentor-guided collaboration.',
    location: 'ICCEI 2025, RUET | Dec 12-14, 2025',
    avatar: client_1,
  },
  {
    id: 2,
    name: 'First Conference Paper Published',
    description:
      'Published a first conference paper as an undergraduate student, marking an important early milestone in academic and research development.',
    location: 'Undergraduate Research Milestone',
    avatar: client_2,
  },
  {
    id: 3,
    name: 'Best Campus Ambassador Recognition',
    description:
      'Recognized by ACI Student Chapter - CUET for engagement, contribution, and leadership as a campus ambassador.',
    location: 'ACI Student Chapter - CUET',
    avatar: client_3,
  },
  {
    id: 4,
    name: 'Ongoing Academic Development',
    description:
      'Continuously strengthening technical profile through analytical study, communication practice, and civil engineering-focused learning.',
    location: 'Rajshahi, Bangladesh',
    avatar: client_4,
  },
];

export const myServicesPlans: myServicesPlansTypes[] = [
  {
    id: 1,
    service: 'Review Paper - ICCEI 2025 Proceedings',
    price: 'Dec 2025',
    description:
      'Published in the proceedings of ICCEI 2025 at Rajshahi University of Engineering & Technology (RUET).',
    completedWorks: 'Venue: ICCEI 2025, RUET',
    experience: 'Type: Review Paper',
    totalHoursWorked: 'DOI/Link: To be updated',
    icon: webDesignIcon,
    lightIcon: webDesignIconLight,
  },
  {
    id: 2,
    service: 'First Conference Paper',
    price: 'Published',
    description:
      'Completed and published during undergraduate study with focus on academic writing and technical communication growth.',
    completedWorks: 'Venue: Conference details updating',
    experience: 'Type: Conference Paper',
    totalHoursWorked: 'DOI/Link: To be updated',
    icon: webDevIcon,
    lightIcon: webDevIconLight,
  },
  {
    id: 3,
    service: 'Publication Profile Expansion',
    price: 'In Progress',
    description:
      'Upcoming publication entries will include paper title, co-authors, conference or journal name, and formal reference links.',
    completedWorks: 'Scope: Academic publication record',
    experience: 'Status: Updating regularly',
    totalHoursWorked: 'Details: Will be added soon',
    icon: graphicDesignIcon,
    lightIcon: graphicDesignIconLight,
  },
  {
    id: 4,
    service: 'Research Documentation',
    price: 'Active',
    description:
      'Maintaining a clear and structured academic portfolio for future graduate and professional opportunities.',
    completedWorks: 'Scope: Research and writing archive',
    experience: 'Stage: Final-year undergraduate',
    totalHoursWorked: 'Updates: Ongoing',
    icon: seoOptIcon,
    lightIcon: seoOptIconLight,
  },
];

export const faqData: FAQ[] = [
  {
    question: 'What is your current academic status?',
    answer:
      'I am currently in the final stage of my undergraduate program in Civil Engineering at RUET.',
  },
  {
    question: 'What are your current focus areas?',
    answer:
      'My current focus areas include structural, geotechnical, transportation, and infrastructure-related learning with research orientation.',
  },
  {
    question: 'Do you have publication experience?',
    answer:
      'Yes. I have published conference and review papers during undergraduate study and continue to expand my publication profile.',
  },
  {
    question: 'Which software tools are you learning and using?',
    answer:
      'I am currently using and improving skills in AutoCAD, ETABS, ArcGIS, Microsoft Excel, Word, and PowerPoint.',
  },
  {
    question: 'How can someone contact you right now?',
    answer:
      'You can contact me via email at sumaiyabintekamal219@gmail.com, phone at +880 1318-466465, or LinkedIn at my profile link.',
  },
];

export const followerData: FollowerData[] = [
  {
    platform: 'location',
    followers: 'Rajshahi, Bangladesh',
    url: 'https://maps.google.com/?q=Rajshahi,Bangladesh',
    icon: XLogo,
    lightIcon: XLogoLight,
  },
  {
    platform: 'Email',
    followers: 'sumaiyabintekamal219@gmail.com',
    url: 'mailto:sumaiyabintekamal219@gmail.com',
    icon: instagramIcon,
    lightIcon: instagramIconLight,
  },
  {
    platform: 'LinkedIn',
    followers: 'sumaiya-binty-kamal',
    url: 'https://www.linkedin.com/in/sumaiya-binty-kamal-b2aa7a313/',
    icon: linkedInIcon,
    lightIcon: linkedInIconLight,
  },
  {
    platform: 'Phone',
    followers: '01318466465',
    url: 'tel:+8801318466465',
    icon: dribbleIcon,
    lightIcon: dribbleLight,
  },
];
