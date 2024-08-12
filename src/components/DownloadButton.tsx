export default function DownloadButton() {
	const downloadOnClick = () => {
		const link = document.createElement('a');
		link.download = 'Yevhenii_CV.pdf';
		link.href = 'CV.pdf';
		link.click();
	};
	return (
		<button
			className='bg-yellow-500/90 rounded-xl w-1/4 leading-10 hover:scale-[1.15] hover:bg-yellow-500/75 transition-all duration-200'
			onClick={downloadOnClick}
		>
			Download my CV
		</button>
	);
}
