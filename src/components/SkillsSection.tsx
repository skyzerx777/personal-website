import SkillTile from './SkillTile';

type SkillType = {
	name: string;
	iconPath: string;
};

export default function SkillsSection() {
	const skillList: SkillType[] = [
		{ name: 'JavaScript', iconPath: '/assets/JavaScriptIcon.png' },
		{ name: 'TypeScript', iconPath: '/assets/TypeScriptIcon.png' },
		{ name: 'React', iconPath: '/assets/ReactIcon.png' },
		{ name: 'CSS3', iconPath: '/assets/CssIcon.png' },
		{ name: 'SCSS', iconPath: '/assets/SassIcon.png' },
		{ name: 'TailwindCSS', iconPath: '/assets/TailwindIcon.png' },
		{ name: 'Bootstrap', iconPath: '/assets/BootstrapIcon.png' },
		{ name: 'HTML5', iconPath: '/assets/HtmlIcon.png' },
		{ name: 'GIT', iconPath: '/assets/GitIcon.png' },
		{ name: 'REST API', iconPath: '/assets/RestIcon.png' },
		{ name: 'Redux', iconPath: '/assets/ReduxIcon.png' },
		{ name: 'Figma', iconPath: '/assets/FigmaIcon.png' },
	];
	return (
		<section
			id='skills'
			className='flex flex-wrap items-center content-center py-6 px-4 sm:px-12 md:px-24 lg:px-36 text-neutral-100 text-center min-h-screen bg-[#1d1d1d] bg-[url("/src/assets/bg.png")] bg-center bg-cover bg-no-repeat gap-y-5'
		>
			<h2 className='text-4xl leading-loose font-bold w-full'>My skills</h2>
			<div className='flex flex-wrap mt-3 leading-relaxed relative md:flex-row gap-5 justify-center'>
				{skillList.map((item, index) => (
					<SkillTile key={index} icon={item.iconPath}>
						{item.name}
					</SkillTile>
				))}
			</div>
		</section>
	);
}
