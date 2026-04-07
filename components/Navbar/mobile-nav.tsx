import { Equal, X } from 'lucide-react';
import Link from 'next/link';

import AvailableForWorkBtn from '../ui/AvailableForWorkBtn';
import LogoType from './logo-type';

interface MobileNavProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export default function MobileNav({ isMenuOpen, toggleMenu }: MobileNavProps) {
  return (
    <div className='flex w-full items-center justify-between sm:hidden'>
      <MobileLogo />
      <div className='flex items-center gap-2'>
        <AvailableForWorkBtn />
        <ToogleMenuButton
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
        />
      </div>
    </div>
  );
}

const MobileLogo = () => {
  return (
    <Link
      href='/'
      aria-label='Go to homepage'
      className='relative flex aspect-square h-auto w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-zinc-800 p-0 transition-all duration-300 hover:scale-95 sm:hidden'
    >
      <LogoType />
    </Link>
  );
};

const ToogleMenuButton = ({
  toggleMenu,
  isMenuOpen,
}: {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}) => {
  return (
    <button
      onClick={toggleMenu}
      className='bg-almost-black hover:bg-dark-gray-4 border-dark-gray-4 relative z-2000 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full transition-all duration-500 md:hidden'
      aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isMenuOpen}
      aria-controls='mobile-menu'
    >
      <span>
        {isMenuOpen ? (
          <X
            size={24}
            className='text-light-gray-3'
          />
        ) : (
          <Equal
            size={24}
            className='text-light-gray-3'
          />
        )}
      </span>
    </button>
  );
};
