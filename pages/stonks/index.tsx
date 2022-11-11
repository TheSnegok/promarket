import { useGlobalContext } from "~/../Components/Context/Context";
import Slider from "~/../Components/Templates/Slider/Slider";
import TypicalPage from "~/../Components/Templates/TypicalPage/TypicalPage";
import s from "../../Styles/pages/Stonks.module.sass";

const Stonks = () => {

    const { data } = useGlobalContext();

    return (
        <TypicalPage header="Акции">
            <div className={s.stonksWrapper}>
                <div className={s.stonksWrapperSlider}>
                    <Slider slidesInfo={data.slidesBanner} slideWidth={1300} />
                </div>
            </div>
        </TypicalPage>
    )
}

export default Stonks;