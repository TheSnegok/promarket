import Head from "next/head"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Menu from "../Menu/Menu"

export const Wrapper = ({ children }) => {
    return (
        <>
            <Head>
                <title>Promarket</title>
                <meta name="description" content="Promarket - internet-shop" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="container">
                <Header />
                <Menu />
                {children}
                <Footer />
            </main>
        </>
    )
} 