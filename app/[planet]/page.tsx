'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Fact from '@/components/Fact';
import { InfoSwitchButton } from '@/components/InfoSwitchButton';
import { planetsData } from '../data/planets';

export default function PlanetPage( {params}: {params : {planet: string}} ) {

  type PlanetType = {
    name: string;
    overview: {
      content: string;
      source: string;
    };
    structure: {
      content: string;
      source: string;
    };
    geology: {
      content: string;
      source: string;
    };
    rotation: string;
    revolution: string;
    radius: string;
    temperature: string;
    images: { planet: string; internal: string; geology: string; };
  };

  const planet : PlanetType | undefined = planetsData.find(planet => planet.name.toLowerCase() === params.planet.toLowerCase())

  const [selectedButton, setSelectedButton] = useState<number>(1);
  const [showEarthGeology, setDisplayGeology] = useState<boolean>(false);
  const [planetText, setPlanetText] = useState<string | undefined>('');
  const [planetImage, setPlanetImage] = useState<string | undefined>('/planet-earth.svg');
  const [geologyImage, setGeologyImage] = useState<string | undefined>('/planet-earth.svg');
  const [planetWikipedia, setPlanetWikipedia] = useState<string | undefined>('https://en.wikipedia.org/wiki/Earth');

  useEffect(() => {
    switch (selectedButton) {
      case 1:
        setPlanetText(planet?.overview.content);
        setPlanetImage(planet?.images.planet);
        setDisplayGeology(false);
        setPlanetWikipedia(planet?.overview.source)
        break;
      case 2:
        setPlanetText(planet?.structure.content);
        setPlanetImage(planet?.images.internal);
        setDisplayGeology(false);
        setPlanetWikipedia(planet?.structure.source)
        break;
      case 3:
        setPlanetText(planet?.geology.content);
        setPlanetImage(planet?.images.planet);
        setDisplayGeology(true);
        setGeologyImage(planet?.images.geology);
        setPlanetWikipedia(planet?.geology.source)
        break;
      default:  
        setPlanetText('');
        setPlanetImage('/planet-earth.svg');
        setDisplayGeology(false);
        setPlanetWikipedia('https://en.wikipedia.org/wiki/Earth')
    }
  }, [selectedButton])

  return (
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
                <Image src={geologyImage} width='168' height='199' objectFit="cover" className='absolute md:ml-[32%] md:mt-[300px] h-[100px] w-[84px] mt-[150px]' alt="image of earth's surface" />
              </div>
            ) : (
              <Image src={planetImage} width='450' height='450' className='w-[173px]' alt='image of a cartoony earth' />
            )}
            <h1 className="text-5xl font-bold mb-[16px] text-[40px] font-antonio uppercase text-center mt-[67px]">{params.planet}</h1>
            <div className="z-10 w-full max-w-5xl items-center justify-between text-sm text-center lg:flex h-full flex-col mb-[24px] font-spartan leading-6">
              {planetText}
            </div>
            <div className='mb-[39px] font-spartan flex'>
              <p className='opacity-50'>source :&nbsp;</p><Link href={planetWikipedia} className='underline font-bold text-[#838391]'>Wikipedia</Link>
            </div>
          </div>
        </section>

        <section className='flex flex-col gap-[8px] w-full px-[24px]'>
          <Fact title='Rotation time' fact={planet?.rotation} />
          <Fact title='Revolution time' fact={planet?.revolution} />
          <Fact title='Radius' fact={planet?.radius} />
          <Fact title='AVERAGE TEMP.' fact={planet?.temperature} />
        </section>
      </main>
  )
}
