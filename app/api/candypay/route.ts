import CandyPaySDK from '@/configs/candypay'
import { CreateDonate } from '@/types/create-donate'
import { NextResponse } from 'next/server'

export async function POST(req: Request, res: Response) {
  const body: CreateDonate = await req.json()

  const { amount, wallet, to, image, current_url, from, message } = body

  try {
    const response = await CandyPaySDK.session.create({
      success_url: current_url!,
      cancel_url: current_url!,
      items: [
        {
          name: 'Money Donate',
          price: amount,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg',
          quantity: 1,
        },
      ],
      metadata: {
        from,
        message,
        toName: to,
        toWallet: wallet,
        amount,
      },
      shipping_fees: (amount * 5) / 100,
      custom_data: {
        name: `Donation for ${to}`,
        image: image,
        wallet_address: wallet,
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
