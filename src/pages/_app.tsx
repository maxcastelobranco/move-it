import "../styles/globals.scss";
import { AppProps } from "next/app";
import Head from "next/head";

export default function MoveIt({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Move It</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
