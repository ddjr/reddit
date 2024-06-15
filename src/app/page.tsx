'use client'
import Home from './pages/home'
import { SessionProvider } from 'next-auth/react'
type props = {
	session?: any,
}
export default function App({ session }: props) {
	return (
		<>
			<SessionProvider session={session}>
				<Home />
			</SessionProvider>
		</>
	)
}
