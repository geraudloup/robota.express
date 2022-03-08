import type { NextPage } from 'next'
import Image from 'next/image'

const Footer: NextPage = () => {
  return (
    <footer style={{position:"fixed", bottom: 0, margin: "2rem"}}>
      Powered by{' '}
      <span>
        <Image src="/logo.svg" alt="Robota Express Logo" width={144} height={32} />
      </span>
    </footer>
  )
}

export default Footer
