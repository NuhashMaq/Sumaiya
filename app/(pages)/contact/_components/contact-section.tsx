'use client';

import { Calendar1, Mail } from 'lucide-react';

import { emailIcon, emailIconLight } from '@/app/assets/assets';
import ContactForm from '@/components/ContactForm/ContactForm';
import SectionHeading from '@/components/SectionHeading';
import Button from '@/components/ui/Button';

export default function ContactSection() {
  const handleEmailClick = () => {
    window.open('mailto:sumaiyabintekamal219@gmail.com', '_blank', 'noopener,noreferrer');
  };

  const handleLinkedInClick = () => {
    window.open(
      'https://www.linkedin.com/in/sumaiya-binty-kamal-b2aa7a313/',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <>
      <SectionHeading
        darkImage={emailIcon}
        lightImage={emailIconLight}
        title='Contact & Basic Info'
        description='Reach out by email, phone, or LinkedIn for academic and professional communication.'
      >
        <div className='relative flex h-min w-full flex-none flex-nowrap items-start justify-start gap-3 p-0 sm:gap-4'>
          <Button
            position='left'
            className='w-full sm:w-min'
            icon={<Mail size={18} />}
            title='Email Me'
            onClick={handleEmailClick}
          />
          <Button
            position='left'
            className='w-full sm:w-min'
            icon={<Calendar1 size={18} />}
            title='LinkedIn Profile'
            onClick={handleLinkedInClick}
          />
        </div>
      </SectionHeading>

      <ContactForm />
    </>
  );
}
