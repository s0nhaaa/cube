import CandyPaySDK from '@/configs/candypay'
import { NextResponse } from 'next/server'

export async function POST(req: Request, res: Response) {
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

    return NextResponse.json(response)
  } catch (error) {
    console.log(error)

    NextResponse.json({
      error: 'Error creating session',
    })
  }
}
