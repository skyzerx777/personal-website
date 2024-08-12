import DownloadButton from './DownloadButton';

export default function Header() {
	return (
		<header className='py-6 px-40 text-slate-50'>
			<nav className='flex justify-end text-lg'>
				<ul className='flex gap-x-12'>
					<li className='text-neutral-300 hover:text-yellow-400 transition-colors duration-200'>
						<a href=''>About me</a>
					</li>
					<li className='text-neutral-300 hover:text-yellow-400 transition-colors duration-200'>
						<a href=''>My skills</a>
					</li>
					<li className='text-neutral-300 hover:text-yellow-400 transition-colors duration-200'>
						<a href=''>Portfolio</a>
					</li>
					<li className='text-neutral-300 hover:text-yellow-400 transition-colors duration-200'>
						<a href=''>Contacts</a>
					</li>
				</ul>
			</nav>
			<div className='flex justify-between pt-24'>
				<div className='flex flex-col flex-grow justify-center items-center gap-y-8'>
					<div className='text-5xl leading-relaxed'>
						<p>Hello there!</p>
						<p>
							My name is{' '}
							<span className='text-yellow-400 font-bold'> Yevhenii</span>
						</p>
						<p>I`m a front-end developer</p>
					</div>
					<DownloadButton></DownloadButton>
				</div>
				<div className='size-1/3 rounded-xl overflow-hidden'>
					<img src='/src/assets/AuthorsPhoto.PNG' alt='Author`s photo' />
				</div>
			</div>
		</header>
	);
}
