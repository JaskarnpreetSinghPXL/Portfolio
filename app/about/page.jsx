'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';

const BirdScene = dynamic(() => import('@/components/BirdScene'), {
  ssr: false,
});

const About = () => {
  return (
    <section>
      <div className="container mxauto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center lg:text-left lg:pt-16">
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <Image
              src="/karn.jpg"
              alt=""
              layout="responsive"
              width={1000}
              height={600}
              className="rounded-[30px] border-4 border-primary lg:max-w-[70%]"
            />
          </div>
          <div className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1 pb-6">About Me</h1>
            <Image
              src="/leaf.png"
              alt=""
              layout="fixed"
              width={100}
              height={100}
              className="absolute -z-30 top-[5%] right-[6%] transform rotate-12 hover:animate-ping"
            />
            <p className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Jaskarnpreet Singh - 23
            </p>
            <p className="mb-12">
              My life mainly revolves around several passions: fitness,
              motorcycles and gaming. Although I do not have an extensive list
              of hobbies, these activities are still essential for my
              entertainment and wellbeing.
              <br />
              <br />
              By spending my time in virtual worlds, I also began to understand
              more and more about the technology behind these games and this led
              to my interest in application development. As a student at
              <b> Hogeschool PXL </b>, where I study Applied Informatics, I was
              able to turn my passion for these technologies into academic
              knowledge and express it in practical projects.
            </p>
            <div className="absolute z-30 w-[30%] h-[50%] -bottom-32 right-[5%] hidden lg:block">
              <BirdScene />
            </div>
            <Image
              src="/leaf.png"
              alt=""
              layout="fixed"
              width={100}
              height={100}
              className="absolute -z-30 bottom-[5%] transform -rotate-12 hidden lg:block hover:animate-ping"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
