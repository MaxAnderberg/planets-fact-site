import Link from "next/link";
import { planetsData } from "@/app/data/planets";

const Navbar = () => {
  console.log(planetsData);
  return (
    <nav className='bg-[#070724] text-white'>
      <div className='flex justify-between'>
      <p className='uppercase font-antonio text-[28px]'>
        The planets
      </p>
      <div className='w-[32px] h-[20px] gap-[4px] flex flex-col cursor-pointer'>
        <div className='bg-white w-full h-[4px]'></div>
        <div className='bg-white w-full h-[4px]'></div>
        <div className='bg-white w-full h-[4px]'></div>
      </div>
      </div>
      <ul>
        {planetsData.map((planet) => (
          <li key={planet.name}>
            <Link href={`/${planet.name.toLowerCase()}`} className='uppercase'>
              {planet.name}
            </Link>
          </li>
        ))} 
      </ul>
    </nav>
  )
}

export default Navbar;