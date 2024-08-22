export default function PortfolioCard({
	children,
	name,
	preview,
	link,
}: {
	children: string;
	name: string;
	preview: string;
	link: string;
}) {
	const clickHandler = () => {
		const workLink = document.createElement('a');
		workLink.href = link;
		workLink.target = '_blank';
		workLink.click();
	};

	return (
		<div
			className='flex flex-col xl:flex-row justify-center items-center w-full lg:w-3/4 p-4 shadow-lg rounded-xl cursor-pointer border-l-8 border-l-yellow-400 hover:scale-110 transition-transform duration-200'
			onClick={clickHandler}
		>
			<div className='w-3/4 xl:w-1/3 mb-2 xl:mb-0 flex-shrink-0 rounded-xl overflow-hidden'>
				<img src={preview} alt={`${name} preview`} />
			</div>
			<div className='px-4 leading-relaxed text-center'>{children}</div>
		</div>
	);
}
