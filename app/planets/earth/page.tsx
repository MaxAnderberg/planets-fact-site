'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Fact from '@/components/Fact';
import { InfoSwitchButton } from '@/components/InfoSwitchButton';
import RootLayout from '@/app/layout';

export default function EarthPage() {
  const [selectedButton, setSelectedButton] = useState<number>(1);
  const [showEarthGeology, setDisplayGeology] = useState<boolean>(false);
  const [planetText, setPlanetText] = useState<string>('');
  const [planetImage, setPlanetImage] = useState<string>('/planet-earth.svg');
  const [planetWikipedia, setPlanetWikipedia] = useState<string>('https://en.wikipedia.org/wiki/Earth');

  useEffect(() => {
    switch (selectedButton) {
      case 1:
        setPlanetText('Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth\'s surface is land with remaining 70.8% is covered with water. Earth\'s distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.');
        setPlanetImage('/planet-earth.svg');
        setDisplayGeology(false);
        setPlanetWikipedia('https://en.wikipedia.org/wiki/Earth')
        break;
      case 2:
        setPlanetText("Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.");
        setPlanetImage('/planet-earth-internal.svg');
        setDisplayGeology(false);
        setPlanetWikipedia('https://en.wikipedia.org/wiki/Earth#Internal_structure')
        break;
      case 3:
        setPlanetText("The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.");
        setPlanetImage('/planet-earth.svg');
        setDisplayGeology(true);
        setPlanetWikipedia('https://en.wikipedia.org/wiki/Earth#Surface')
        break;
      default:  
        setPlanetText('');
        setPlanetImage('/planet-earth.svg');
        setDisplayGeology(false);
        setPlanetWikipedia('https://en.wikipedia.org/wiki/Earth')
    }
  }, [selectedButton])

  return (
    <RootLayout>
      <main className="flex flex-col min-h-screen items-center text-white bg-[#070724] bg-gradient-radial h-full bg-stars">
        <section className='flex flex-col md:flex-col-reverse items-center justify-center '>
          <div className='flex justify-center gap-[16px] border-y mt-[10px] w-full pt-[20px] mb-[64px]'>
            <InfoSwitchButton section='01' title='overview' selectedButton={selectedButton} setSelectedButton={setSelectedButton} id={1} />
            <InfoSwitchButton section='02' title='internal structure' selectedButton={selectedButton} setSelectedButton={setSelectedButton} id={2} />
            <InfoSwitchButton section='03' title='surface geology' selectedButton={selectedButton} setSelectedButton={setSelectedButton} id={3} />
          </div>
          <div className='px-[24px] flex items-center flex-col'>
            {showEarthGeology ? (
              <div className='relative w-[173px] h-[173px] overflow-visible m-auto flex justify-center items-center'>
                <Image src={planetImage} layout="fill" objectFit="cover" className='w-[173px]' alt='image of a cartoony earth' />
                <Image src='/geology-earth.png' width='168' height='199' objectFit="cover" className='absolute md:ml-[32%] md:mt-[300px] h-[100px] w-[84px] mt-[150px]' alt="image of earth's surface" />
              </div>
            ) : (
              <Image src={planetImage} width='450' height='450' className='w-[173px]' alt='image of a cartoony earth' />
            )}
            <h1 className="text-5xl font-bold mb-[16px] text-[40px] font-antonio uppercase text-center mt-[67px]">Earth</h1>
            <div className="z-10 w-full max-w-5xl items-center justify-between text-sm text-center lg:flex h-full flex-col mb-[24px] font-spartan leading-6">
              {planetText}
            </div>
            <div className='mb-[39px] font-spartan flex'>
              <p className='opacity-50'>source :&nbsp;</p><Link href={planetWikipedia} className='underline font-bold text-[#838391]'>Wikipedia</Link>
            </div>
          </div>
        </section>

        <section className='flex flex-col gap-[8px] w-full px-[24px]'>
          <Fact title='Rotation time' fact='0.99 Days' />
          <Fact title='Revolution time' fact='365.26 days' />
          <Fact title='Radius' fact='6,371 km' />
          <Fact title='AVERAGE TEMP.' fact='16°c' />
        </section>
      </main>
    </RootLayout>
  )
}
