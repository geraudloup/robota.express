import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { NextUIProvider } from '@nextui-org/react';
import Footer from '../components/Footer';
import Head from '../components/Head';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Head />
      <Component {...pageProps} />
      <Footer />
    </NextUIProvider>
  );
}

export default MyApp
