import getUserByWallet from '@/app/actions/getUserByWallet'
import DonateScreen from '@/components/donate-screen'

type Props = {
  params: { wallet: string }
}

export default async function Page({ params }: Props) {
  const user = await getUserByWallet({ wallet: params.wallet })

  return (
    <div className=' bg-transparent w-screen h-screen flex items-center justify-center'>
      {user && <DonateScreen currentUser={user} />}
    </div>
  )
}
