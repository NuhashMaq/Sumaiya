import type React from 'react';

import { rightArrow } from '@/app/assets/assets';
import { followerData } from '@/data';

import FollowerLists from '../FollowerLists/FollowerLists';
export default function ContactForm() {
  return (
    <div className='grid w-full grid-cols-1 gap-5 px-2 sm:px-0'>
      <FollowerLists
        followerData={followerData}
        rightArrow={rightArrow}
      />
    </div>
  );
}
