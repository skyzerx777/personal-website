import { useState } from 'react';
import DownloadButton from './DownloadButton';
import HamburgerButton from './HamburgerButton';
import HamburgerMenu from './HamburgerMenu';
import Navbar from './Navbar';

export default function Header() {
	const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

	return (
		<header className='flex flex-col px-4 sm:px-12 md:px-24 md:py-6 lg:px-36 text-neutral-100 bg-[#1d1d1d] min-h-screen'>
			<HamburgerButton setIsMenuOpened={setIsMenuOpened}></HamburgerButton>
			<Navbar></Navbar>
			<HamburgerMenu isMenuOpened={isMenuOpened}></HamburgerMenu>
			<div className='flex flex-grow justify-between md:pt-12 lg:pt-24 relative'>
				<div className='flex flex-col flex-grow lg:flex-shrink-0 justify-center items-center md:items-start gap-y-8'>
					<div className='text-4xl leading-normal 2xl:text-5xl 2xl:leading-relaxed z-50'>
						<p>Hello there!</p>
						<p>
							My name is
							<span className='text-yellow-400 font-bold'> Yevhenii</span>
						</p>
						<p>I`m a front-end developer</p>
					</div>
					<DownloadButton></DownloadButton>
				</div>
				<div className='hidden w-1/3 flex-shrink-0 rounded-xl overflow-hidden md:block self-center'>
					<img src='/src/assets/AuthorsPhoto.PNG' alt='Author`s photo' />
				</div>
			</div>
		</header>
	);
}
