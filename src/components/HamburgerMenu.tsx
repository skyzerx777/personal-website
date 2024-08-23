export default function HamburgerMenu({
	isMenuOpened,
}: {
	isMenuOpened: boolean;
}) {
	return (
		<nav
			className={`${
				isMenuOpened ? 'h-48 translate-y-12' : 'h-0 -translate-y-96'
			} transition-all duration-300 text-2xl md:hidden z-50`}
		>
			<ul className='flex flex-col text-center'>
				<li className='text-neutral-300 leading-loose hover:text-yellow-400 transition-colors duration-200'>
					<a href='#about'>About me</a>
				</li>
				<li className='text-neutral-300 leading-loose hover:text-yellow-400 transition-colors duration-200'>
					<a href='#skills'>My skills</a>
				</li>
				<li className='text-neutral-300 leading-loose hover:text-yellow-400 transition-colors duration-200'>
					<a href='#portfolio'>Portfolio</a>
				</li>
				<li className='text-neutral-300 leading-loose hover:text-yellow-400 transition-colors duration-200 after:block after:mx-auto after:w-12 after:h-[1px] after:bg-neutral-100 after:mt-2'>
					<a href='#contacts'>Contacts</a>
				</li>
			</ul>
		</nav>
	);
}
