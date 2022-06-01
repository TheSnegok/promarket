import { FC, useState } from "react";
import { Route, Routes } from "react-router";
import { ArcticleItem } from "./Components/ArcticleItem/ArcticleItem";
import { Basket } from "./Components/Basket/Basket";
import { useGlobalContext } from "./Components/Context/Context";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Likes from "./Components/Likes/Likes";
import { Main } from "./Components/Main";
import Menu from "./Components/Menu/Menu";

const App: FC = () => {
    return (
        <main className="container">
            <Header />
            <Menu />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/likes" element={<Likes />} />
                <Route path="/basket" element={<Basket />} />
                <Route path="/article" element={<ArcticleItem />} />
            </Routes>
            <Footer />
        </main>
    )
}

export default App;