import { League_Spartan } from "next/font/google"

type Props = {
  title: string | undefined
  fact: string | undefined
}

const spartan = League_Spartan({ subsets: ['latin'] })
const Fact = ({ title, fact }: Props) => {
  return (
    <div className='flex justify-between items-center px-[24px] py-[9px] border-white border-[1px] md:w-[164px] md:px-0 md:pl-[16px] md:h-[88px] md:items-start md:justify-start md:gap-1 lg:w-[255px] w-full border-opacity-20 md:flex-col lg:h-[128px] lg:pb-[27px]'>
      <h1 className='uppercase text-[11px] md:font-bold opacity-50 font-spartan lg:text-[12px]' style={spartan.style}>{title}</h1>
      <h2 className='uppercase text-[20px] md:text-[24px] lg:text-[40px]'>{fact}</h2>
    </div>
  )
}

export default Fact;
