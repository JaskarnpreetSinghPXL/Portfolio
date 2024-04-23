import dynamic from 'next/dynamic';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import Socials from './Socials';

const TreeScene = dynamic(() => import('@/components/TreeScene'), {
  ssr: false,
});

const Hero = () => {
  return (
    <section className="relative overflow-hidden h-[91vh] py-12 xl:py-24 xl:pt-28">
      <div className="container relative z-10">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left xl:mt-40">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Developer
            </div>
            <h1 className="h1 mb-6 mt-6">
              <Typewriter
                options={{
                  strings: ['Karn', 'Singh'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              I am a full-stack developer with a passion for creating beautiful
              and functional websites and applications. I study applied
              informatics at Hogeschool PXL.
            </p>
            <Socials
              className="right-0"
              containerStyles="flex gap-x-4 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
        </div>
      </div>
      <div className="absolute -z-40 inset-0 hidden xl:block">
        <TreeScene />
      </div>
      <div className="xl:hidden m-10 max-w-[60%] flex justify-center items-center mx-auto">
        <Image
          src="/karn.jpg"
          alt=""
          layout="intrinsic"
          width={1556}
          height={2048}
          className="border-[4px] rounded-2xl border-primary"
        />
      </div>
    </section>
  );
};

export default Hero;
