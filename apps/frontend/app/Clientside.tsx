'use strict'

import { useEffect, useState } from 'react'
import { trpc } from '@frontend/app/trpc'

export function ClientSide() {
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    trpc.hello.query({}).then((response) => {
      setGreeting(response)
    })
  }, [])
  return <p>I am client side: {greeting}</p>
}
