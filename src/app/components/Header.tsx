import Image from 'next/image'
import React from 'react'
import Reddit_Logo from '../images/reddit-logo.png'
import User_Icon from '../images/user-icon.webp'
import {
	BellIcon,
	ChatBubbleBottomCenterIcon,
	GlobeAmericasIcon,
	PlusIcon,
	SparklesIcon,
	SpeakerWaveIcon,
	VideoCameraIcon,
} from '@heroicons/react/24/outline'
import {
	ChevronDownIcon,
	HomeIcon,
	MagnifyingGlassIcon,
	Bars3Icon,
} from '@heroicons/react/16/solid'

export default function Header() {
	return (
		<div className='sticky-top-0 flex z-50 bg-white px-2 py-4 shadow-sm space-x-2'>
			{/* Logo */}
			<div className='relative h-10 w-20 flex-shrink-0 cursor-pointer '>
				<Image objectFit='contain' src={Reddit_Logo} layout='fill' alt={''} />
			</div>

			{/* Home Icon */}
			<div className='mx-7 flex items-center xl:min-w[300px] cursor-pointer'>
				<HomeIcon className='h-5 w-5' />
				<p className='ml-2 flex-1 hidden lg:inline'>Home</p>
				<ChevronDownIcon className='h-5 w-5' />
			</div>

			{/* Search Box */}
			<form className='flex flex-1 items-center space-x-2 border border-gray-200 rounded-sm bg-gray-100 px-3 py-1'>
				<MagnifyingGlassIcon className='h-6 w-6 text-gray-400 ' />
				<input
					className='flex-1 bg-transparent outline-none'
					type='text'
					placeholder='Search Reddit'
				/>
				<button hidden type='submit' />
			</form>

			{/* Icons - hamburger: sm/md, visable: lg+ */}
			<div>
				<Bars3Icon className='icon inline-flex lg:hidden ' />
			</div>
			<div className='mx-5 text-gray-500 space-x-2 hidden lg:inline-flex'>
				<SparklesIcon className='icon' />
				<GlobeAmericasIcon className='icon' />
				<VideoCameraIcon className='icon' />
				<hr className='h-10 border border-gray-100' />
				<ChatBubbleBottomCenterIcon className='icon' />
				<BellIcon className='icon' />
				<PlusIcon className='icon' />
				<SpeakerWaveIcon className='icon' />
			</div>

			{/* Sign In/Out */}
			<div className='hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex'>
				<div className='relative h-5 w-5 flex-shrink-0'>
					<Image src={User_Icon} layout='fill' alt='' objectFit='contain' />
				</div>
				<p className='text-gray-500'>Sign In</p>
			</div>
		</div>
	)
}
