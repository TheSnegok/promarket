import { FC, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import { ArcticlePage } from "./Components/ArcticlePage/ArcticlePage";
import { Basket } from "./Components/Basket/Basket";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Likes from "./Components/Likes/Likes";
import { Main } from "./Components/Main";
import Menu from "./Components/Menu/Menu";
import { ProductPage } from "./Components/ProductPage/ProductPage";

const App: FC = () => {

    let location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])

    return (
        <main className="container">
            <Header />
            <Menu />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/likes" element={<Likes />} />
                <Route path="/basket" element={<Basket />} />
                <Route path="/article" element={<ArcticlePage />} />
                <Route path="/product" element={<ProductPage />} />
            </Routes>
            <Footer />
        </main>
    )
}

export default App;