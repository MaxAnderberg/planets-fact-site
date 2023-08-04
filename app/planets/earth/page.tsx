'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Fact from '@/components/Fact';
import { InfoSwitchButton } from '@/components/InfoSwitchButton';

export default function EarthPage() {
  const [selectedButton, setSelectedButton] = useState<number>(1);
  const [showEarthGeology, setDisplayGeology] = useState<boolean>(false);
  const [planetText, setPlanetText] = useState<string>('');

  let planetImage = "/planet-earth.svg";

  useEffect(() => {
    switch(selectedButton) {
      case 1:
        setPlanetText('Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth\'s surface is land with remaining 70.8% is covered with water. Earth\'s distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.');
        planetImage = '/planet-earth.svg';
        setDisplayGeology(false);
        break;
      case 2:
        setPlanetText("Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.");
        planetImage = '/planet-earth-internal.svg';
        setDisplayGeology(false);
        break;
      case 3:
      setPlanetText("The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.");
        planetImage = '/planet-earth.svg';
        setDisplayGeology(true);
        break;
      default:
        setPlanetText('');
        planetImage = '/planet-earth.svg';
        setDisplayGeology(false);
    }
  }, [selectedButton])

  return (
    <main className="flex flex-col min-h-screen items-center text-white bg-[#070724] bg-gradient-radial h-full bg-stars justify-center ">
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
          <h1 className="text-5xl font-bold mb-[23px] font-[Antonio] uppercase">Earth</h1>
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex h-full flex-col mb-[24px]">
            {planetText}
          </div>
          <p className='mb-[39px]'>
            source : <Link href='www.google.se' className='underline font-bold text-[#838391]' >Wikipedia</Link>
          </p>
          <div className='flex flex-col gap-[16px]'>
            <InfoSwitchButton section='01' title='overview' selectedButton={selectedButton} setSelectedButton={setSelectedButton} id={1}/>
            <InfoSwitchButton section='02' title='internal structure' selectedButton={selectedButton} setSelectedButton={setSelectedButton} id={2}/>
            <InfoSwitchButton section='03' title='surface geology' selectedButton={selectedButton} setSelectedButton={setSelectedButton} id={3}/>
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
