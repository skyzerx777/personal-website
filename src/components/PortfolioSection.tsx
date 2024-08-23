import PortfolioCard from './PortfolioCard';

type WorksType = {
	name: string;
	previewImagePath: string;
	description: string;
	link: string;
};

export default function PortfolioSection() {
	const worksList: WorksType[] = [
		{
			name: 'ToDoList',
			previewImagePath: '/assets/ToDoList.png',
			description:
				'"To Do List" React app with the ability to create notes, add them to favorites, edit and delete them. There is also a mechanism to search among the created notes, change the theme and separately view and search for notes in the favorites list. Also all notes are stored in memory, which allows you not to lose them after the end of the session.',
			link: 'https://to-do-react-gamma.vercel.app/',
		},
		{
			name: 'TicTacToe',
			previewImagePath: '/assets/TicTacToe.png',
			description:
				'Folk game "Tic Tac Toe" made on React using Redux. As on all other projects adaptive is implemented, so you can play with friends on your phone and computer.',
			link: 'https://tic-tac-toe-mu-bice.vercel.app/',
		},
		{
			name: 'WeatherApp',
			previewImagePath: '/assets/WeatherApp.png',
			description:
				'Application to view weather forecast in any city in the world. "Open Weather Map” API was used, as well as "react-router". You can select any of the cities on the main page and view its weather or use the search implemented with the help of "react-select" library.',
			link: 'https://weather-app-react-seven-pi.vercel.app/',
		},
	];
	return (
		<section
			id='portfolio'
			className='flex flex-wrap items-center content-center py-6 px-4 sm:px-12 md:px-24 lg:px-36 bg-neutral-100 text-[#1d1d1d] text-center min-h-screen'
		>
			<h2 className='text-4xl leading-loose font-bold w-full'>My works</h2>
			<div className='flex flex-col justify-center items-center gap-y-6'>
				{worksList.map((item, index) => (
					<PortfolioCard
						key={index}
						name={item.name}
						preview={item.previewImagePath}
						link={item.link}
					>
						{item.description}
					</PortfolioCard>
				))}
			</div>
			<div className='flex justify-center w-full mt-8'>
				<p className='w-fit border-2 rounded-xl p-4 border-[#1d1d1d]'>
					Also there are other works in the form as lendings, but they are not
					hosted. You can view them on my GitHub page —{' '}
					<a
						href='https://github.com/skyzerx777'
						target='_blank'
						className='font-bold underline text-yellow-500'
					>
						skyzerx777
					</a>
				</p>
			</div>
		</section>
	);
}
