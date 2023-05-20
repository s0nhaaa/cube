import { NextApiRequest, NextApiResponse } from 'next'
import { verifyWebhookSignature } from '@candypay/checkout-sdk'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const headers = req.headers
  const payload = req.body

  // try {
  //   await verifyWebhookSignature({
  //     payload: JSON.stringify(payload),
  //     headers: headers as Record<string, string>,
  //     webhook_secret: process.env.WEBHOOK_SECRET!,
  //   })
  // } catch (err) {
  //   res.status(400).json({
  //     message: 'Invalid webhook signature',
  //   })
  // }

  res.status(200).json({
    message: 'hello iam function',
  })
}
