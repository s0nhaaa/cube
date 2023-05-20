import CandyPaySDK from '@/configs/candypay'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const response = await CandyPaySDK.session.create({
        success_url: '', // TODO: create success page
        cancel_url: '/', // TODO: create cancel page
        tokens: ['bonk', 'samo'],
        items: [
          {
            name: 'Sample Donate',
            price: 0.1,
            image: 'https://imgur.com/M0l5SDh.png',
            quantity: 1,
            size: '9',
          },
        ],
        shipping_fees: 0.5,
      })

      res.status(200).json(response)
    } catch (error) {
      console.log(error)

      res.status(500).json({
        error: 'Error creating session',
      })
    }
  } else {
    res.status(405).json({
      error: 'Method not allowed',
    })
  }
}

export default handler
