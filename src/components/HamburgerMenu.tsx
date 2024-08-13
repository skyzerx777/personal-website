export default function HamburgerMenu({
	isMenuOpened,
}: {
	isMenuOpened: boolean;
}) {
	return (
		<nav
			className={`${
				isMenuOpened ? 'h-48 translate-y-0' : 'h-0 -translate-y-96'
			} transition-all duration-300 text-2xl mt-[62px] md:hidden`}
		>
			<ul className='flex flex-col text-center'>
				<li className='text-neutral-300 leading-loose hover:text-yellow-400 transition-colors duration-200'>
					<a href='#'>About me</a>
				</li>
				<li className='text-neutral-300 leading-loose hover:text-yellow-400 transition-colors duration-200'>
					<a href='#'>My skills</a>
				</li>
				<li className='text-neutral-300 leading-loose hover:text-yellow-400 transition-colors duration-200'>
					<a href='#'>Portfolio</a>
				</li>
				<li className='text-neutral-300 leading-loose hover:text-yellow-400 transition-colors duration-200'>
					<a href='#'>Contacts</a>
				</li>
			</ul>
		</nav>
	);
}
