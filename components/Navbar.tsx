'use client';
import Link from "next/link";
import Image from "next/image";
import { planetsData } from "@/app/data/planets";
import { useState } from "react";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className='bg-[#070724] text-white py-[16px] px-[24px] md:px-0 lg:flex lg:justify-between lg:items-center lg:border-b border-white border-opacity-20 lg:pr-[41px] lg:pl-[32px]'>
      <div className='flex justify-between items-center md:flex-col'>
        <p className='uppercase font-antonio text-[28px]'>
          The planets
        </p>
        <div className='w-[32px] h-[20px] gap-[4px] flex flex-col cursor-pointer md:hidden' onClick={handleExpand}>
          <div className='bg-white w-full h-[4px]'></div>
          <div className='bg-white w-full h-[4px]'></div>
          <div className='bg-white w-full h-[4px]'></div>
        </div>
      </div>
      <div className='md:hidden'>
        {isExpanded && (
          <div className='fixed top-[calc(100% + 32px)] left-0 w-screen h-screen flex flex-col z-50 bg-black px-[24px]'>
            <ul>
              {planetsData.map((planet) => (
                <li key={planet.name} className='border-b w-full border-opacity-10 py-[20px] flex justify-between'>
                  <div className='flex'>
                    <div className={`border rounded-full w-[20px] h-[20px] mr-[25px]`} style={{ background: planet.color, borderColor: planet.color }}></div>
                    <Link href={`/${planet.name.toLowerCase()}`} className='uppercase font-spartan text-[15px] font-bold tracking-[1.3px]' onClick={handleExpand}>
                      {planet.name}
                    </Link>
                  </div>
                  <Image src='/icon-chevron.svg' width={4} height={10} alt='' />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className='hidden md:flex px-0 border-b lg:border-none mt-[19px] lg:mt-0'>
        <div className='flex justify-center w-full px-[51px] '>
          <ul className='flex gap-[33px] w-full'>
            {planetsData.map((planet) => (
              <li key={planet.name} className='w-full border-opacity-10 lg:border-none py-[20px] lg:py-0 flex justify-center lg:justify-between'>
                <div className='flex'>
                  <Link href={`/${planet.name.toLowerCase()}`} className='uppercase font-spartan text-[11px] font-bold tracking-[1.3px] opacity-75 hover:opacity-100' onClick={handleExpand}>
                    {planet.name}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
