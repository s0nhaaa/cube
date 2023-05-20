import getUserByWallet from '@/app/actions/getUserByWallet'

type Props = {
  params: { wallet: string }
}

export default async function Page({ params }: Props) {
  const user = await getUserByWallet({ wallet: params.wallet })
  console.log(user)

  return (
    <div className=' bg-transparent w-screen h-screen flex items-center justify-center'>
      {user && <span className=' text-3xl '>Some one just donate for you {user.name}</span>}
    </div>
  )
}
