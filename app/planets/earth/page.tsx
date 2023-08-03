'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Fact from '@/components/Fact';

export default function EarthPage() {
  const [selectedButton, setSelectedButton] = useState(3);
  const [showEarthGeology, setDisplayGeology] = useState(false);

  let planetText;
  let planetImage = "/planet-earth.svg";

  useEffect(() => {
    switch(selectedButton) {
      case 1:
        planetText = 'Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth\'s surface is land with remaining 70.8% is covered with water. Earth\'s distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.';
        planetImage = '/planet-earth.svg';
        setDisplayGeology(false);
        break;
      case 2:
        planetText = "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.";
        planetImage = '/planet-earth-internal.svg';
        setDisplayGeology(false);
        break;
      case 3:
        planetText = "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.";
        planetImage = '/planet-earth.svg';
        setDisplayGeology(true);
        break;
      default:
        planetText = '';
        planetImage = '/planet-earth.svg';
        setDisplayGeology(false);
    }
  }, [selectedButton])

  return (
    <main className="flex flex-col min-h-screen items-center text-white bg-[#070724] bg-gradient-radial h-full bg-stars justify-center pr-[165px]">
      <section className='flex items-center justify-center mb-[142px]'>
        {showEarthGeology ? (
        <div className='relative ml-[255px] mr-[195px] w-[450px] h-[450px] overflow-visible'>
          <Image src={planetImage} layout="fill" objectFit="cover" className='absolute bottom-0' alt='image of a cartoony earth'/>
          <Image src='/geology-earth.png' width='168' height='199' objectFit="cover" className='absolute ml-[32%] mt-[300px]' alt='image of a cartoony earth'/>
        </div>
        ) : (
        <Image src={planetImage} width='450' height='450' className='ml-[255px] mr-[195px]' alt='image of a cartoony earth'/>
        )}  
        <section className='flex flex-col justify-between'>
          <h1 className="text-5xl font-bold mb-[23px]">Earth</h1>
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex h-full flex-col mb-[24px]">
            {planetText}
          </div>
          <p className='mb-[39px]'>
            source : <Link href='www.google.se' >Wikipedia</Link>
          </p>
          <div className='flex flex-col gap-[16px]'>
            <button onClick={() => setSelectedButton(1)} className={`uppercase text-left pl-[24px] py-[11px] border border-[#D8D8D8] max-w-[350px] ${selectedButton == 1 ? 'bg-[#6D2ED5] border-none' : ''} hover:bg-[#D8D8D8] hover:bg-opacity-20`}>
              01 overview
            </button>
            <button onClick={() => setSelectedButton(2)} className={`uppercase text-left pl-[24px] py-[11px] border border-[#D8D8D8] max-w-[350px] ${selectedButton == 2 ? 'bg-[#6D2ED5] border-none' : ''} hover:bg-[#D8D8D8] hover:bg-opacity-20`}>
              02 internal structure
            </button>
            <button onClick={() => setSelectedButton(3)} className={`flex uppercase text-left pl-[24px] py-[11px] border border-[#D8D8D8] max-w-[350px] ${selectedButton == 3 ? 'bg-[#6D2ED5] border-none' : ''} hover:bg-[#D8D8D8] hover:bg-opacity-20  text-white`}>
              <p>03</p>
              <p>surface geology</p>
            </button>
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
