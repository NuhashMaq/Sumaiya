import { stackIcon, stackIconLight } from '@/app/assets/assets';

import SectionHeading from '../SectionHeading';
import StackLists from './stack-lists';

export default function MyStack() {
  return (
    <section
      className='relative flex h-min w-full flex-none flex-col flex-nowrap items-start justify-start gap-[30px] overflow-visible'
      aria-labelledby='my-stacks'
    >
      <div className='relative h-auto w-full flex-none'>
        <SectionHeading
          darkImage={stackIcon}
          lightImage={stackIconLight}
          title='Technical & Professional Skills'
          description='Engineering tools, productivity workflow, research communication, and leadership competencies.'
        />
      </div>

      <StackLists />
    </section>
  );
}
