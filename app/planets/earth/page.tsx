import './styles.css';

export default function EarthPage() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between text-white bg-[#070724] bg-gradient-radial h-full bg-stars">
      <section className='flex'>
        <img src='/planet-earth.svg' />
        <section>
          <h1 className="text-5xl font-bold">Earth</h1>
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex h-full">
            Third planet from the Sun and the only known planet to harbor life.
            About 29.2% of Earth's surface is land with remaining 70.8% is
            covered with water. Earth's distance from the Sun, physical properties
            and geological history have allowed life to evolve and thrive.
          </div>
          <div className='flex flex-col gap-[16px]'>
            <button className='uppercase py-[11px] border border-[#D8D8D8] max-w-[350px]'>01 overview</button>
            <button className='uppercase py-[11px] border border-[#D8D8D8] max-w-[350px]'>02 internal structure</button>
            <button className='uppercase py-[11px] border border-[#D8D8D8] max-w-[350px]'>03 surface geology</button>
          </div>
        </section>

      </section>


    </main>
  )
}
