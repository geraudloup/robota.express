import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { NextUIProvider } from '@nextui-org/react';
import Footer from '../components/Footer';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
      <Footer />
    </NextUIProvider>
  );
}

export default MyApp
