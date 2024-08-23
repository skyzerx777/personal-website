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
