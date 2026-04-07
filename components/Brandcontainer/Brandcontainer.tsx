import React from 'react';

export default function Brandcontainer() {
  return (
    <section className='relative flex h-min w-full flex-none flex-col gap-4 overflow-hidden rounded-xl border border-dashed border-zinc-700 p-5'>
      <h3 className='text-light-gray-4 text-xl font-bold'>About</h3>
      <div className='space-y-3'>
        <p className='text-light-gray-2 text-[15px] leading-[1.7] font-medium'>
          I am Sumaiya Binty Kamal, a Civil Engineering student at Rajshahi University of
          Engineering & Technology (RUET), currently in the final stage of my undergraduate
          journey.
        </p>
        <p className='text-light-gray-2 text-[15px] leading-[1.7] font-medium'>
          My academic path has helped me build a strong foundation in core civil engineering
          subjects along with research skills, technical communication, and engineering software
          usage. I am especially interested in learning through practical work, academic projects,
          and research-based activities that contribute to real-world engineering solutions.
        </p>
        <p className='text-light-gray-2 text-[15px] leading-[1.7] font-medium'>
          Alongside my studies, I have been involved in academic and extracurricular achievements,
          including conference paper publication and recognition through student leadership
          activities. I am continuously working to strengthen my technical profile and expand my
          skills in analysis, design, communication, and engineering tools.
        </p>
      </div>
    </section>
  );
}
