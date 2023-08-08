import Link from "next/link";
import { planetsData } from "@/app/data/planets";

const Navbar = () => {
  console.log(planetsData);
  return (
    <nav>
      <div className='flex justify-between'>
      <p className='uppercase font-antonio text-[28px]'>
        The planets
      </p>
      burger menu
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