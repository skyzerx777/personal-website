import { useState } from 'react';

export default function SkillTile({
	children,
	icon,
}: {
	children: string;
	icon: string;
}) {
	const [isHovered, setIsHovered] = useState<boolean>(false);

	const mouseEnterHandler = () => {
		setIsHovered(true);
	};

	const mouseLeaveHandler = () => {
		setIsHovered(false);
	};

	return (
		<div
			className='w-32 h-32 flex justify-center items-center'
			onMouseEnter={mouseEnterHandler}
			onMouseLeave={mouseLeaveHandler}
		>
			<div
				className={`w-32 h-32 font-bold flex justify-center items-center shadow-lg rounded-xl relative after:w-full after:h-full after:rounded-xl after:absolute after:top-0 after:left-0 after:bg-[#2b2b2b] after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300 bg-[#2b2b2b] text-neutral-300`}
			>
				<img src={icon} />
				{
					<p
						className={`absolute w-full ${
							isHovered ? 'opacity-100' : 'opacity-0'
						} transition-all duration-300 z-20`}
					>
						{children}
					</p>
				}
			</div>
		</div>
	);
}

/* import { useState } from 'react';

export default function SkillTile({
	children,
	icon,
}: {
	children: string;
	icon: string;
}) {
	const [isHovered, setIsHovered] = useState<boolean>(false);
	const [currentContent, setCurrentContent] = useState<JSX.Element>(
		<img src={icon} />
	);

	const mouseEnterHandler = () => {
		setIsHovered(true);
		setTimeout(() => {
			setCurrentContent(<p className='-scale-x-100'>{children}</p>);
		}, 50);
	};

	const mouseLeaveHandler = () => {
		setIsHovered(false);
		setTimeout(() => {
			setCurrentContent(<img src={icon} className='w-fit h-fit' />);
		}, 50);
	};

	return (
		<div
			className='w-36 h-36 flex justify-center items-center'
			onMouseEnter={mouseEnterHandler}
			onMouseLeave={mouseLeaveHandler}
		>
			<div
				className={`w-32 h-32 font-bold flex justify-center items-center shadow-lg rounded-xl transition-transform duration-200 ${
					isHovered ? '-scale-x-110 scale-y-110' : ''
				}`}
			>
				{currentContent}
			</div>
		</div>
	);
}
 */
