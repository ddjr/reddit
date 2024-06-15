import React from 'react'
import { signIn } from 'next-auth/react'
import User_Icon from '../../images/user-icon.webp'
import Image from 'next/image'

export default function SignIn() {
	return (
		<div
			onClick={() => signIn()}
			className='hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex'
		>
			<div className='relative h-5 w-5 flex-shrink-0'>
				<Image src={User_Icon} layout='fill' alt='' objectFit='contain' />
			</div>
			<p className='text-gray-500'>Sign In</p>
		</div>
	)
}
