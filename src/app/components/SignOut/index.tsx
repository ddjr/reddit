import React from 'react'
import { signOut, useSession } from 'next-auth/react'
import User_Icon from '../../images/user-icon.webp'
import Image from 'next/image'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function SignOut() {
	const { data: session } = useSession()
	return (
		<div
			onClick={() => signOut()}
			className='hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex'
		>
			<div className='relative h-5 w-5 flex-shrink-0'>
				<Image src={User_Icon} layout='fill' alt='' objectFit='contain' />
			</div>
			<div className='flex-1 text-xs'>
				<p className='truncate'>{session?.user?.name}</p>
				<p className='text-gray-400'>1 Karma</p>
			</div>
			<ChevronDownIcon className='h-5 flex-shrink-0 text-gray-400' />
		</div>
	)
}
