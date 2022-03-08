import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Footer: NextPage = () => {
  return (
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/logo.svg" alt="Robota Express Logo" width={144} height={32} />
          </span>
        </a>
      </footer>
  )
}

export default Footer
