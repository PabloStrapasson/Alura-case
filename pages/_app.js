import React from "react";
import Head from 'next/head'
import App from "next/app";
import GlobalStyle from "@/theme/GlobalStyle";

export default function MyApp({ Component, pageProps}){
    return (
        <>
            <Head> </Head>
            <GlobalStyle/>
            <Component {...pageProps}/>
        </>
    )
}