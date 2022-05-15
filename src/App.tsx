import { FC } from "react";
import { Route, Routes } from "react-router";
import { Provider } from "./Components/Context/Context";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Likes from "./Components/Likes/Likes";
import { Main } from "./Components/Main";
import Menu from "./Components/Menu/Menu";


const App: FC = () => {
    return (
        <Provider>
            <main className="container">
                <Header />
                <Menu />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/likes" element={<Likes />} />
                </Routes>
                <Footer />
            </main>
        </Provider>
    )
}

export default App;