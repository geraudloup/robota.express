import type { NextPage } from 'next'
import NextHead from 'next/head'

const Head: NextPage = () => {
  return (
    <NextHead>
      <title>Robota Express</title>
      <meta name="description" content="Find Ukrainian refugees with a job anywhere in Europe" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  )
}

export default Head
