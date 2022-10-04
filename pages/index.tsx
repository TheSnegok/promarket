import Banners from "../Components/Banners/Banners";
import Icons from "../Components/Icons/Icons";
import Collections from "../Components/Collections/Collections";
import Hits from "../Components/Hits/Hits";
import Stock from "../Components/Stock/Stock";
import Brands from "../Components/Brands/Brands";
import Article from "../Components/Article/Article";
import Seo from "../Components/Seo/Seo";
import { ModalLayout } from "../Components/ModalLayout/ModalLayout";

const App = () => {
    return (
        <>
            <Banners />
            <Icons />
            <Collections />
            <Hits />
            <Stock />
            <Brands />
            <Article />
            <Seo />
            <ModalLayout />
        </>
    )
}

export default App;