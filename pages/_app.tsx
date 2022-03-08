import { CssBaseline } from "@nextui-org/react";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";

import Layout from "../components/Layout";
import "../i18n";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;