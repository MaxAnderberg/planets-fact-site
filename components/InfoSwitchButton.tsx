type Props = {
  section: string
  title: string
  setSelectedButton: (value: number) => void
  selectedButton: number
  id: number
}

export const InfoSwitchButton = ({ section, title, setSelectedButton, selectedButton, id }: Props) => {
  return (
    <button onClick={() => setSelectedButton(id)} className={`flex text-[9px] uppercase text-center md:border tracking-[1.929px] md:border-[#D8D8D8] md:max-w-[350px] ${selectedButton == id ? 'md:bg-[#6D2ED5] md:border-none border-[#6D2ED5] border-b-[5px] pb-[20px]' : 'opacity-50'} md:hover:bg-[#D8D8D8] md:hover:bg-opacity-20 font-bold`}>
      <p className="hidden md:visible">{section}</p>
      <p>{title}</p>
    </button>
  )
}