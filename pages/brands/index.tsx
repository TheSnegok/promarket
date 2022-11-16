import Brands, { listLogoBrands } from "~/../Components/Brands/Brands";
import { BrandsTiles } from "~/../Components/Templates/BrandsTiles/BrandsTiles";
import TypicalPage from "~/../Components/Templates/TypicalPage/TypicalPage";
import s from "../../Styles/pages/BrandsPage.module.sass";

const BrandsPage = () => {
    return (
        <TypicalPage header="Бренды">
            <div className={s.popular}>
                <BrandsTiles brands={listLogoBrands} />
            </div>
        </TypicalPage>
    )
}

export default BrandsPage;