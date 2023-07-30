'use strict'

import { ClientSide } from '@frontend/app/Clientside'
import { trpc } from '@frontend/app/trpc'

export default async function Home() {
  const response = await trpc.hello.query({})
  return (
    <section className="flex items-center justify-center h-[100vh]">
      <h1 className="text-8xl font-bold">Server side - {response}</h1>
      <ClientSide />
    </section>
  )
}
