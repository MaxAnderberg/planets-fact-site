import Link from 'next/link';
import './styles.css';

export default function EarthPage() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between text-white bg-[#070724] bg-gradient-radial h-full bg-stars">
      <section className='flex'>
        <img src='/planet-earth.svg' />
        <section className='flex flex-col justify-between'>
          <h1 className="text-5xl font-bold">Earth</h1>
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex h-full flex-col">
            Third planet from the Sun and the only known planet to harbor life.
            About 29.2% of Earth's surface is land with remaining 70.8% is
            covered with water. Earth's distance from the Sun, physical properties
            and geological history have allowed life to evolve and thrive.
            <section>
            <p>
              source: <Link href='www.google.se' >Wikipedia</Link>
            </p>
            </section>
          </div>
          <div className='flex flex-col gap-[16px]'>
            <button className='uppercase py-[11px] border border-[#D8D8D8] max-w-[350px]'>01 overview</button>
            <button className='uppercase py-[11px] border border-[#D8D8D8] max-w-[350px]'>02 internal structure</button>
            <button className='uppercase py-[11px] border border-[#D8D8D8] max-w-[350px]'>03 surface geology</button>
          </div>
        </section>

      </section>

<section className='flex gap-[30px]'>
      <div className='p-[20px] border-white border-[1px] '>
        <h1 className='uppercase text-[11px] opacity-50'>Rotation Time</h1>
        <h2 className='uppercase text-[40px]'>0.99 Days</h2>
      </div>
<div>
        <h1 className='uppercase'>Rotation Time</h1>
        <h2 className='uppercase'>0.99 Days</h2>
      </div>
      <div>
        <h1 className='uppercase'>Rotation Time</h1>
        <h2 className='uppercase'>0.99 Days</h2>
      </div>
      <div>
        <h1 className='uppercase'>Rotation Time</h1>
        <h2 className='uppercase'>0.99 Days</h2>
      </div>
</section>
    </main>
  )
}