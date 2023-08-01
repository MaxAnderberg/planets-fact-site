
type Props = {
	title: string
	fact: string
}

const Fact = ({title, fact}: Props) => {
	return (
		<div className='pl-[23px] py-[20px] border-white border-[1px] lg:w-[255px]'>
	        <h1 className='uppercase text-[11px] opacity-50'>{title}</h1>
    	    <h2 className='uppercase text-[35px]'>{fact}</h2>
      	</div>
	)	
}

export default Fact;