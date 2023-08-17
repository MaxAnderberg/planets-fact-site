'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Fact from '@/components/Fact';
import { InfoSwitchButton } from '@/components/InfoSwitchButton';
import { planetsData } from '../data/planets';
import { Antonio, League_Spartan } from "next/font/google"
import LinkIcon from '@/components/LinkIcon';

const antonio = Antonio({ subsets: ['latin'] })
const spartan = League_Spartan({ subsets: ['latin'] })

export default function PlanetPage({ params }: { params: { planet: string } }) {

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

  const planet: PlanetType | undefined = planetsData.find(planet => planet.name.toLowerCase() === params.planet.toLowerCase())

  const [selectedButton, setSelectedButton] = useState<number>(3);
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
    <main className="flex flex-col min-h-screen items-center text-white bg-[#070724] bg-gradient-radial h-full bg-stars md:px-[39px] md:pb-[36px] lg:px-[165px] lg:pb-[56px] ">
      <section>
        <section className='flex flex-col items-center justify-center md:grid md:grid-rows-1 md:grid-cols-2 lg:w-full lg:max-w-[1440px]'>
          <div className='flex justify-center gap-[16px] border-y md:border-none w-full pt-[20px] mb-[64px] md:mt-[15px] md:flex-col md:row-start-2 md:row-end-3 lg:items-end lg:justify-start md:col-start-2 md:items-end lg:col-start-2 lg:mt-0 lg:pt-0 lg:mb-0'>
            <InfoSwitchButton section='01' title='overview' selectedButton={selectedButton} setSelectedButton={setSelectedButton} id={1} />
            <InfoSwitchButton section='02' title='internal structure' selectedButton={selectedButton} setSelectedButton={setSelectedButton} id={2} />
            <InfoSwitchButton section='03' title='surface geology' selectedButton={selectedButton} setSelectedButton={setSelectedButton} id={3} />
          </div>
          <div className='px-[24px] flex items-center flex-col md:mt-[90px] md:row-start-1 md:row-end-2 col-span-2 lg:col-start-1 lg:col-end-2 lg:row-span-2 lg:mt-[117px] lg:px-0 lg:justify-end lg:items-end'>
            {showEarthGeology ? (
              <div className='relative overflow-visible m-auto flex justify-center items-center md:m-0'>
                <Image src={planetImage} width='450' height='450' className='w-[173px] md:w-[285px] lg:w-[450px]' alt='image of a cartoony earth' />
                <Image src={geologyImage} width={163} height={199} objectFit="cover" className='absolute md:ml-[32%] md:mt-[300px] h-[100px] w-[84px] mt-[150px] md:mr-[90px] md:h-[123px] md:w-[107px] lg:w-[163px] lg:h-[199px] lg:mr-[125px] lg:mt-[335px]' alt="image of earth's surface" />
              </div>
            ) : (
              <Image src={planetImage} width='450' height='450' className='w-[173px] md:w-[285px] lg:w-[450px]' alt='image of a cartoony earth' />
            )}
          </div>
          <div className='md:grid md:row-start-2 md:col-start-1 lg:col-start-2 lg:row-start-1 lg:flex lg:flex-col lg:items-end'>
            <h1 className="text-5xl font-bold mb-[16px] md:mb-[24px] text-[40px] font-antonio uppercase text-center md:text-left mt-[67px] lg:w-[350px] lg:text-left lg:text-[80px] lg:mt-[126px] lg:pb-[10px]" style={antonio.style}>{params.planet}</h1>
            <div className="z-10 w-full max-w-5xl items-center justify-between text-sm text-center md:text-left lg:flex h-full flex-col mb-[24px] font-spartan leading-6 lg:w-[350px] lg:mb-[24px]" style={spartan.style}>
              {planetText}
            </div>
            <div className='mb-[39px] font-spartan flex lg:mb-[39px] lg:w-[350px] text-left'>
              <p className='opacity-50'>Source :&nbsp;</p><Link href={planetWikipedia} className='underline font-bold text-[#838391] flex'>Wikipedia <LinkIcon width={12} height={12} /></Link>
            </div>
          </div>
        </section>

        <section className='flex flex-col gap-[8px] w-full px-[24px] md:flex-row md:justify-between md:px-0 lg:gap-[30px] lg:justify-normal mt-[87px]' style={antonio.style}>
          <Fact title='Rotation time' fact={planet?.rotation} />
          <Fact title='Revolution time' fact={planet?.revolution} />
          <Fact title='Radius' fact={planet?.radius} />
          <Fact title='AVERAGE TEMP.' fact={planet?.temperature} />
        </section>
      </section>

    </main>
  )
}
