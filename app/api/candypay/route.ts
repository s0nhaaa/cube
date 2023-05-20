import CandyPaySDK from '@/configs/candypay'
import { CreateDonate } from '@/types/create-donate'
import { NextResponse } from 'next/server'

export async function POST(req: Request, res: Response) {
  const body: CreateDonate = await req.json()

  const { amount, wallet, to, image, current_url } = body

  // if (amount || wallet || to || image || current_url) return NextResponse.error()

  try {
    const response = await CandyPaySDK.session.create({
      success_url: current_url!,
      cancel_url: current_url!,
      items: [
        {
          name: 'Sample Donate',
          price: amount,
          image: 'https://imgur.com/M0l5SDh.png',
          quantity: 1,
        },
      ],
      shipping_fees: (amount * 5) / 100,
      custom_data: {
        name: 'User A',
        image: 'https://i.ibb.co/chtf9qc/2691.png',
        wallet_address: 'GNQPsZvxsCuniSfcwE4oG95aD2qi3VaXrFj1GcTHmLfZ',
      },
    })

    return NextResponse.json(response)
  } catch (error) {
    console.log(error)

    NextResponse.json({
      error: 'Error creating session',
    })
  }
}
