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
      {currentUser && <span className=' text-3xl '>Some one just donate for you {currentUser.name}</span>}

      {events.map((e, i) => (
        <div key={i}>
          <p>{e.operationType}</p>
          <p>{e.documentKey._id.toString()}</p>
          <p>{JSON.stringify(e.fullDocument)}</p>
        </div>
      ))}
    </>
  )
}
