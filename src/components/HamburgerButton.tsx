import { Dispatch, SetStateAction } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

export default function HamburgerButton({
	setIsMenuOpened,
}: {
	setIsMenuOpened: Dispatch<SetStateAction<boolean>>;
}) {
	const handleClick = () => {
		setIsMenuOpened((prev: boolean) => !prev);
	};

	return (
		<button
			className='md:hidden absolute z-50 right-4 top-4 text-neutral-100 text-3xl hover:text-yellow-400 transition-colors duration-200'
			onClick={handleClick}
		>
			<RxHamburgerMenu />
		</button>
	);
}
