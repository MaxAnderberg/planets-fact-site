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
    <nav className='bg-[#070724] text-white py-[16px] px-[24px]'>
      <div className='flex justify-between'>
        <p className='uppercase font-antonio text-[28px]'>
          The planets
        </p>
        <div className='w-[32px] h-[20px] gap-[4px] flex flex-col cursor-pointer' onClick={handleExpand}>
          <div className='bg-white w-full h-[4px]'></div>
          <div className='bg-white w-full h-[4px]'></div>
          <div className='bg-white w-full h-[4px]'></div>
        </div>
      </div>
      {isExpanded && (
        <div className='fixed top-[calc(100% + 32px)] left-0 w-screen h-screen flex flex-col z-50 bg-black px-[24px]'>
          <ul>
            {planetsData.map((planet) => (
              <li key={planet.name} className='border-b w-full border-opacity-10 py-[20px] flex justify-between'>
                <div className='flex'>                  
                  <div className={`border rounded-full w-[20px] h-[20px] mr-[25px]`} style={{background: planet.color, borderColor:planet.color}}></div>
                  <Link href={`/${planet.name.toLowerCase()}`} className='uppercase font-spartan text-[15px] font-bold tracking-[1.3px]'>
                    {planet.name}
                  </Link>
                </div>
                <Image src='/icon-chevron.svg' width={4} height={10} alt='' />
              </li>
            ))}
          </ul>
        </div>
      )}

    </nav>
  );
};

export default Navbar;