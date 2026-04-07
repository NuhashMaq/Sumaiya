import { zapIcon, zapIconLight } from '@/app/assets/assets';

import SectionHeading from '../SectionHeading';
import ServiceItemLists from './service-item-lists';

export default function MyServices() {
  return (
    <section
      aria-labelledby='my-services'
      className='relative flex h-min w-full flex-none flex-col flex-nowrap items-start justify-start gap-[30px] overflow-visible'
    >
      <div className='relative h-auto w-full flex-none'>
        <SectionHeading
          darkImage={zapIcon}
          lightImage={zapIconLight}
          title='Research & Academic Activities'
          description='Research engagement, technical writing development, and academic problem-solving activities.'
        />
      </div>
      <ServiceItemLists />
    </section>
  );
}
