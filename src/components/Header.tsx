import { useState } from 'react';
import DownloadButton from './DownloadButton';
import HamburgerButton from './HamburgerButton';
import HamburgerMenu from './HamburgerMenu';
import Navbar from './Navbar';

export default function Header() {
	const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

	return (
		<header className='px-4 sm:px-12 md:px-24 md:py-6 lg:px-36 text-neutral-100'>
			<HamburgerButton setIsMenuOpened={setIsMenuOpened}></HamburgerButton>
			<Navbar></Navbar>
			<HamburgerMenu isMenuOpened={isMenuOpened}></HamburgerMenu>
			<div className='flex justify-between pt-12 lg:pt-24 relative'>
				<div className='flex flex-col flex-grow lg:flex-shrink-0 justify-center items-center gap-y-8'>
					<div className='text-4xl leading-normal xl:text-5xl xl:leading-relaxed z-50'>
						<p>Hello there!</p>
						<p>
							My name is
							<span className='text-yellow-400 font-bold'> Yevhenii</span>
						</p>
						<p>I`m a front-end developer</p>
					</div>
					<DownloadButton></DownloadButton>
				</div>
				<div className='hidden w-1/3 flex-shrink-0 rounded-xl overflow-hidden md:block'>
					<img src='/src/assets/AuthorsPhoto.PNG' alt='Author`s photo' />
				</div>
			</div>
		</header>
	);
}
