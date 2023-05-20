// @ts-nocheck
'use client'

import { User } from '@prisma/client'
import React, { useEffect, useMemo, useState } from 'react'
import * as Realm from 'realm-web'

interface DonateScreenProps {
  currentUser: User | null
}

export default function DonateScreen({ currentUser }: DonateScreenProps) {
  const app = useMemo(() => new Realm.App({ id: 'application-0-qwvjt' }), [])
  const [events, setEvents] = useState([])

  useEffect(() => {
    const login = async () => {
      await app.logIn(Realm.Credentials.anonymous())

      if (!app.currentUser) return
      const mongodb = app.currentUser.mongoClient('mongodb-atlas')
      const collection = mongodb.db('cube').collection('donations')

      for await (const change of collection.watch()) {
        setEvents((events) => [...events, change])
      }
    }

    login()
  }, [])

  return (
    <>
      {events.map((e, i) => (
        <>
          {e.fullDocument.to === currentUser?.walletAddress ? (
            <div key={i} className='w-full flex items-center flex-col justify-center'>
              <img
                src='https://media2.giphy.com/media/LdOyjZ7io5Msw/giphy.gif?cid=ecf05e47nbae4sp8ovjcbl98x55nl25p8r5uu7w78j6j312d&ep=v1_gifs_search&rid=giphy.gif&ct=g'
                alt='Illu'
                width={200}
                height={200}
              />
              <span className=' text-3xl '>
                <span className=' text-3xl font-semibold text-yellow-300'>{e.fullDocument.from}</span> just donate{' '}
                {e.fullDocument.amount} USD
              </span>
              <div className='flex items-center flex-col justify-center'>
                <p className=' text-3xl '>with message</p>
                <br />
                <p className=' text-3xl '>&quot;{e.fullDocument.message}&quot;</p>
              </div>
            </div>
          ) : (
            <></>
          )}
        </>
      ))}
    </>
  )
}
