import Link from 'next/link';
import { Button } from './ui/button';
import { Download, send } from 'lucide-react';
import { RiArrowDownSLine } from 'react-icons/ri';

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Developer
            </div>
            <h1 className="h1 mb-4">Karn Singh</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Ik ben een student Toegepaste Informatica van Hogeschool PXL.
              Gepassioneerd door webontwikkeling en UI/UX-ontwerp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
