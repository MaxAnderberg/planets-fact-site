import { League_Spartan } from "next/font/google"

type Props = {
  section: string
  title: string
  setSelectedButton: (value: number) => void
  selectedButton: number
  id: number
}

const spartan = League_Spartan({ subsets: ['latin'] })

export const InfoSwitchButton = ({ section, title, setSelectedButton, selectedButton, id }: Props) => {
  return (
    <button onClick={() => setSelectedButton(id)} className={`flex md:justify-start md:items-center md:gap-[17px] text-[9px] uppercase text-center lg:text-[12px] md:border tracking-[1.929px] md:border-[#D8D8D8] md:min-w-[281px] lg:max-w-[350px] font-antonio ${selectedButton == id ? 'md:bg-[#6D2ED5] md:border-none border-[#6D2ED5] border-b-[5px] pb-[20px] md:pb-[0] md:items-center' : 'opacity-50 md:opacity-100'} md:hover:bg-[#D8D8D8] md:hover:bg-opacity-20 font-bold md:h-[40px] lg:w-[350px] tracking-[2.571px] lg:h-[48px] lg:border-opacity-20`} style={spartan.style}>
      <p className="hidden md:flex opacity-50 md:ml-[20px]"> {section}</p>
      <p>{title}</p>
    </button>
  )
}
