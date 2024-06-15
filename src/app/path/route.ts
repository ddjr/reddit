// import type { NextApiRequest, NextApiResponse } from 'next'

// type ResponseData = {
// 	message: string,
// }

// export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
// 	res.status(200).json({ message: 'Hello from Next.js!' })
// }

import type { NextApiRequest, NextApiResponse } from 'next'

export default function GET(req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json({ name: 'John Doe' })
}
