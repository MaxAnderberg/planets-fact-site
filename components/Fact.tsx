type Props = {
	title: string
	fact: string
}

const Fact = ({ title, fact }: Props) => {
	return (
		<div className='flex justify-between items-center px-[24px] py-[9px] border-white border-[1px] lg:w-[255px] w-full border-opacity-20'>
			<h1 className='uppercase text-[11px] opacity-50'>{title}</h1>
			<h2 className='uppercase text-[20px]'>{fact}</h2>
		</div>
	)
}

export default Fact;