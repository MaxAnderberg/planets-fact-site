type Props = {
  section: string
  title: string
  setSelectedButton: (value: number) => void
  selectedButton: number
  id: number
}

export const InfoSwitchButton = ({ section, title, setSelectedButton, selectedButton, id }: Props) => {
  return (
    <button onClick={() => setSelectedButton(id)} className={`flex text-[9px] uppercase text-center md:border md:border-[#D8D8D8] md:max-w-[350px] ${selectedButton == id ? 'bg-[#6D2ED5] border-none' : ''} hover:bg-[#D8D8D8] hover:bg-opacity-20`}>
      <p className="hidden md:visible">{section}</p>
      <p>{title}</p>
    </button>
  )
}