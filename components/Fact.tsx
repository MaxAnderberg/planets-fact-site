type Props = {
  title: string
  fact: string | undefined
}

const Fact = ({ title, fact }: Props) => {
  return (
    <div className='flex justify-between items-center px-[24px] py-[9px] border-white border-[1px] md:w-[164px] md:px-0 md:pl-[16px] md:h-[88px] md:items-start md:justify-start md:gap-1 lg:w-[255px] w-full border-opacity-20 md:flex-col'>
      <h1 className='uppercase text-[11px] md:font-bold opacity-50 font-spartan'>{title}</h1>
      <h2 className='uppercase text-[20px] md:text-[24pxk] font-antonio'>{fact}</h2>
    </div>
  )
}

export default Fact;
