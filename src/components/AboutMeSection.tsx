export default function AboutMeSection() {
	return (
		<section
			id='about'
			className='flex flex-wrap items-center content-center py-6 px-4 sm:px-12 md:px-24 lg:px-36 bg-neutral-100 text-[#1d1d1d] text-center min-h-screen'
		>
			<h2 className='text-4xl leading-loose font-bold w-full'>About me</h2>
			<div className='mt-3 leading-relaxed relative flex flex-col md:flex-row gap-4 justify-center'>
				<div className='flex flex-col w-full md:w-1/2 gap-y-3'>
					<div className='p-4 border shadow-lg w-full rounded-xl border-l-8 border-l-yellow-400'>
						<h3 className='text-xl font-bold'>General</h3>
						<p className='mt-1'>
							My name is Yevhenii Hrebenshchykov. I am a front-end developer
							trying to start my commercial way in this sphere. I have a
							bachelor's degree in Information Systems and Technologies. Now I
							am studying for a master's degree. I am actively learning
							JavaScript and React.
						</p>
					</div>
					<div className='p-4 border shadow-lg w-full rounded-xl border-l-8 border-l-yellow-400'>
						<h3 className='text-xl font-bold'>Hobbies</h3>
						<p className='mt-1'>
							I spend a lot of time at the computer doing programming, playing
							various video games and watching different movies and series. I
							also like to ride a bicycle, which helps me at least a little to
							keep in shape and sometimes follow the soccer world.
						</p>
					</div>
				</div>
				<div className='flex flex-col gap-y-2 px-4 py-8 md:p-4 shadow-lg w-full md:w-1/2 rounded-xl border-l-8 border-l-yellow-400 justify-center'>
					<h3 className='text-3xl font-bold'>What am I looking for?</h3>
					<p className=''>
						I want to find a motivated and friendly team from which I can learn
						something. I also consider changing direction, framework, etc. if
						necessary.
					</p>
				</div>
			</div>
		</section>
	);
}
