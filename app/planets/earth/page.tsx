import Link from 'next/link';
import './styles.css';
import Fact from '@/components/Fact';

export default function EarthPage() {
  return (
    <main className="flex flex-col min-h-screen items-center text-white bg-[#070724] bg-gradient-radial h-full bg-stars justify-center pr-[165px]">
      <section className='flex items-center justify-center mb-[142px]'>
        <img src='/planet-earth.svg' className='ml-[255px] mr-[195px]' />
        <section className='flex flex-col justify-between'>
          <h1 className="text-5xl font-bold mb-[23px]">Earth</h1>
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex h-full flex-col mb-[24px]">
            Third planet from the Sun and the only known planet to harbor life.
            About 29.2% of Earth's surface is land with remaining 70.8% is
            covered with water. Earth's distance from the Sun, physical properties
            and geological history have allowed life to evolve and thrive.
          </div>
          <p className='mb-[39px]'>
            source: <Link href='www.google.se' >Wikipedia</Link>
          </p>
          <div className='flex flex-col gap-[16px]'>
            <button className='uppercase py-[11px] border border-[#D8D8D8] max-w-[350px]'>01 overview</button>
            <button className='uppercase py-[11px] border border-[#D8D8D8] max-w-[350px]'>02 internal structure</button>
            <button className='uppercase py-[11px] border border-[#D8D8D8] max-w-[350px]'>03 surface geology</button>
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
