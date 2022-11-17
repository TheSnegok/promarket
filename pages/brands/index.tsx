import { useGlobalContext } from "~/../Components/Context/Context";
import { BrandsTiles } from "~/../Components/Templates/BrandsTiles/BrandsTiles";
import TypicalPage from "~/../Components/Templates/TypicalPage/TypicalPage";
import s from "../../Styles/pages/BrandsPage.module.sass";

const BrandsPage = () => {

    const { data } = useGlobalContext(); 

    return (
        <TypicalPage header="Бренды">
            <div className={s.popular}>
                <BrandsTiles brands={data.brands} />
            </div>
        </TypicalPage>
    )
}

export default BrandsPage;