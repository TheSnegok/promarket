import Head from "next/head";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import React from 'react';
import { Provider } from "../Context/Context";

export const Wrapper = ({ children }) => {
    return (
        <React.StrictMode>
            <Provider>
                <Head>
                    <title>Promarket</title>
                    <meta name="description" content="Promarket - internet-shop" />
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="apple-touch-icon" href="/logo192.png" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet" />
                </Head>
                <main className="container">
                    <Header />
                    <Menu />
                    {children}
                    <Footer />
                </main>
            </Provider >
        </React.StrictMode >
    )
} 