import { useGlobalContext } from "~/../Components/Context/Context";
import { Convert } from "~/../Components/Templates/Convert/Convert";
import TypicalPage from "~/../Components/Templates/TypicalPage/TypicalPage";
import s from "../../Styles/pages/BrandsPage.module.sass";

const BrandsPage = () => {

    const { data } = useGlobalContext(); 

    return (
        <TypicalPage header="Бренды">
            <div className={s.popular}>
                {data.brands.map(() => {
                    <Convert />
                })}
            </div>
        </TypicalPage>
    )
}

export default BrandsPage;