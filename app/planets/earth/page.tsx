'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Fact from '@/components/Fact';

export default function EarthPage() {
  const [selectedButton, setSelectedButton] = useState(1);

  let planetText;

  switch(selectedButton) {
    case 1:
      planetText = 'Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth\'s surface is land with remaining 70.8% is covered with water. Earth\'s distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.';
      break;
    case 2:
      planetText = "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.";
      break;
    case 3:
      planetText = "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.";
      break;
    default:
      planetText = '';
  }

  return (
    <main className="flex flex-col min-h-screen items-center text-white bg-[#070724] bg-gradient-radial h-full bg-stars justify-center pr-[165px]">
      <section className='flex items-center justify-center mb-[142px]'>
        <Image src='/planet-earth.svg' width='450' height='450' className='ml-[255px] mr-[195px]' alt='image of a cartoony earth'/>
        <section className='flex flex-col justify-between'>
          <h1 className="text-5xl font-bold mb-[23px]">Earth</h1>
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex h-full flex-col mb-[24px]">
            {planetText}
          </div>
          <p className='mb-[39px]'>
            source : <Link href='www.google.se' >Wikipedia</Link>
          </p>
          <div className='flex flex-col gap-[16px]'>
            <button onClick={() => setSelectedButton(1)} className={`uppercase py-[11px] border border-[#D8D8D8] max-w-[350px] ${selectedButton == 1 ? 'bg-[#6D2ED5] border-none' : ''} hover:bg-[#D8D8D8] hover:bg-opacity-20`}>01 overview</button>
            <button onClick={() => setSelectedButton(2)} className={`uppercase py-[11px] border border-[#D8D8D8] max-w-[350px] ${selectedButton == 2 ? 'bg-[#6D2ED5] border-none' : ''} hover:bg-[#D8D8D8] hover:bg-opacity-20`}>02 internal structure</button>
            <button onClick={() => setSelectedButton(3)} className={`uppercase py-[11px] border border-[#D8D8D8] max-w-[350px] ${selectedButton == 3 ? 'bg-[#6D2ED5] border-none' : ''} hover:bg-[#D8D8D8] hover:bg-opacity-20  text-white`}>03 surface geology</button>
          </div>
        </section>
      </section>

      <section className='flex gap-[30px]'>
        <Fact title='Rotation time' fact='0.99 Days' />
        <Fact title='Revolution time' fact='365.26 days' />
        <Fact title='Radius' fact='6,371 km' />
        <Fact title='AVERAGE TEMP.' fact='16°c' />
      </section>
    </main>
  )
}
