
type Props = {
	title: string
	fact: string
}

const Fact = ({title, fact}: Props) => {
	return (
		<div className='p-[20px] border-white border-[1px] '>
	        <h1 className='uppercase text-[11px] opacity-50'>{title}</h1>
    	    <h2 className='uppercase text-[40px]'>{fact}</h2>
      	</div>
	)	
}

export default Fact;