'use client'
import { useState } from 'react';
import Link from 'next/link';
import './styles.css';
import Fact from '@/components/Fact';

export default function EarthPage() {
  const [selectedButton, setSelectedButton] = useState(1);

  let planetText;

  switch(selectedButton) {
    case 1:
      planetText = 'Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth\'s surface is land with remaining 70.8% is covered with water. Earth\'s distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.';
      break;
    case 2:
      planetText = 'This would be the text about the internal structure of the earth.';
      break;
    case 3:
      planetText = 'This would be the text about the surface geology of the earth.';
      break;
    default:
      planetText = '';
  }

  return (
    <main className="flex flex-col min-h-screen items-center text-white bg-[#070724] bg-gradient-radial h-full bg-stars justify-center pr-[165px]">
      <section className='flex items-center justify-center mb-[142px]'>
        <img src='/planet-earth.svg' className='ml-[255px] mr-[195px]' />
        <section className='flex flex-col justify-between'>
          <h1 className="text-5xl font-bold mb-[23px]">Earth</h1>
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex h-full flex-col mb-[24px]">
            {planetText}
          </div>
          <p className='mb-[39px]'>
            source: <Link href='www.google.se' >Wikipedia</Link>
          </p>
          <div className='flex flex-col gap-[16px]'>
            <button onClick={() => setSelectedButton(1)} className={`uppercase py-[11px] border border-[#D8D8D8] max-w-[350px] ${selectedButton == 1 ? 'bg-[#6D2ED5] border-none' : ''}`}>01 overview</button>
            <button onClick={() => setSelectedButton(2)} className={`uppercase py-[11px] border border-[#D8D8D8] max-w-[350px] ${selectedButton == 2 ? 'bg-[#6D2ED5] border-none' : ''}`}>02 internal structure</button>
            <button onClick={() => setSelectedButton(3)} className={`uppercase py-[11px] border border-[#D8D8D8] max-w-[350px] ${selectedButton == 3 ? 'bg-[#6D2ED5] border-none' : ''}`}>03 surface geology</button>
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
