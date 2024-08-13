export default function Navbar() {
	return (
		<nav className='text-lg justify-center lg:justify-end hidden md:flex'>
			<ul className='flex gap-x-6 lg:gap-x-12'>
				<li className='text-neutral-300 hover:text-yellow-400 transition-colors duration-200 after:block after:w-0 hover:after:w-full after:h-[2px] after:bg-yellow-400 after:transition-[width] after:duration-200'>
					<a href='#'>About me</a>
				</li>
				<li className='text-neutral-300 hover:text-yellow-400 transition-colors duration-200 after:block after:w-0 hover:after:w-full after:h-[2px] after:bg-yellow-400 after:transition-[width] after:duration-200'>
					<a href='#'>My skills</a>
				</li>
				<li className='text-neutral-300 hover:text-yellow-400 transition-colors duration-200 after:block after:w-0 hover:after:w-full after:h-[2px] after:bg-yellow-400 after:transition-[width] after:duration-200'>
					<a href='#'>Portfolio</a>
				</li>
				<li className='text-neutral-300 hover:text-yellow-400 transition-colors duration-200 after:block after:w-0 hover:after:w-full after:h-[2px] after:bg-yellow-400 after:transition-[width] after:duration-200'>
					<a href='#'>Contacts</a>
				</li>
			</ul>
		</nav>
	);
}
