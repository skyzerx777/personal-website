import {
	FaDiscord,
	FaLinkedin,
	FaPhoneAlt,
	FaTelegramPlane,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function ContactsSection() {
	return (
		<section
			id='contacts'
			className='flex flex-col justify-center items-center content-center py-6 px-4 sm:px-12 md:px-24 lg:px-36 text-neutral-100 text-center min-h-screen gap-y-5 bg-[#1d1d1d] bg-[url("/assets/bg.png")] bg-center bg-cover bg-no-repeat'
		>
			<h2 className='text-4xl leading-loose font-bold w-full'>
				How to contact me?
			</h2>
			<div className='w-full lg:w-1/2 flex justify-center items-center bg-[#2b2b2b] rounded-xl shadow-lg'>
				<div className='text-center p-4 flex flex-col gap-y-4 underline underline-offset-4 text-[12px] md:text-lg'>
					<a
						href='tel:+380507666514'
						className='flex items-center justify-center gap-x-1 hover:scale-110 hover:text-yellow-400 transition-all duration-200'
					>
						<span className='text-green-700'>
							<FaPhoneAlt />
						</span>
						Phone number: +380507666514
					</a>
					<a
						href='mailto:yevheniihrebenshchykov@gmail.com'
						className='flex items-center justify-center gap-x-1 hover:scale-110 hover:text-yellow-400 transition-all duration-200'
					>
						<span className='text-orange-400'>
							<MdEmail />
						</span>
						Email: yevheniihrebenshchykov@gmail.com
					</a>
					<a
						href='https://www.linkedin.com/in/yevhenii-hrebenshchykov-10b5b1264/'
						target='_blank'
						className='flex items-center justify-center gap-x-1 hover:scale-110 hover:text-yellow-400 transition-all duration-200'
					>
						<span className='text-[#0077B5]'>
							<FaLinkedin />
						</span>
						LinkedIn: Yevhenii Hrebenshchykov
					</a>
					<a
						href='https://www.t.me/skyzerx777'
						target='_blank'
						className='flex items-center justify-center gap-x-1 hover:scale-110 hover:text-yellow-400 transition-all duration-200'
					>
						<span className='text-[#24A1DE]'>
							<FaTelegramPlane />
						</span>
						Telegram: skyzerx777
					</a>
					<a
						href='https://discord.com/users/287626219175018507'
						target='_blank'
						className='flex items-center justify-center gap-x-1 hover:scale-110 hover:text-yellow-400 transition-all duration-200'
					>
						<span className='text-[#5865F2]'>
							<FaDiscord />
						</span>
						Discord: skyzerx777
					</a>
				</div>
			</div>
		</section>
	);
}
