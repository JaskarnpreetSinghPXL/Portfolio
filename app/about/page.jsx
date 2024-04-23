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
              ---------
            </p>
            <p className="mb-12">
              Hey there! My name is Jaskarnpreet Singh, but feel free to call me <b>Karn</b>. 
              I am a 23-year-old student who, as you can tell from my name, was born in bustling India. 
              This is where I spent my earliest years until my family decided to make the big jump to Belgium,
              where I grew up to become the person I am today.
              <br />
              <br />
              My passion for technology and computers started at a young age,
              which eventually led me to the <b>Applied Informatics</b> course at Hogeschool PXL. 
              There, I found my love for Full stack Development and I was able to turn my passion for 
              these technologies into academic knowledge and express it in practical projects 
              <br />
              <br />
              Besides my academic pursuits, I have a number of diverse interests that keep my life in balance. 
              In my spare time, you can often find me at my computer, where I dive into the world of <b>gaming</b>. 
              This offers me both relaxation and a challenge. Of course, 
              I don't spend all my free time in the virtual world, I also value my physical health. 
              As a result, I regularly spend time at the <b>gym</b>. Moreover, I also own a <b>motorcycle</b>, a Yamaha MT-07,
              which I like to ride around on when the sun is out (it doesn’t happen a lot). But above all, 
              I appreciate the time I spend with my <b className="text-primary">girlfriend</b>, who adds a lot of colour 
              (literally) to my life and motivates me to do better every time.
              <br />
              <br />
              This is Karn's world in a nutshell. Also, 
              if you made it past this point and you didn’t lose interest in who I am, 
              check what my skills are below!
            </p>
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
