import getCurrentUser from './actions/getCurrentUser'
import Sample from './sample'

export default async function Home() {
  const currentUser = await getCurrentUser()

  return (
    <>
      <main className='flex min-h-screen flex-col items-center justify-between '>
        <Sample user={currentUser} />
      </main>
    </>
  )
}
