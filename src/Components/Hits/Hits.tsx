import { FC, useState } from "react";
import s from './Hits.module.sass';
import SliderItem from "../Templates/SliderItem/SliderItem";
import { useGlobalContext } from "../Context/Context";

const Hits: FC = () => {

    const { data } = useGlobalContext();

    const [position, setPosition] = useState<number>(0);
    const [slide, setSlide] = useState<number>(1);
    const [menuName, setMenuName] = useState<number>(0);

    const changeSlide = (option: string) => {
        if (data.hits.slideItems !== null) {
            if (data.hits.slideItems.length > 5)
                switch (option) {
                    case "plus":
                        if (slide + 4 < data.hits.slideItems.length) {
                            setPosition(position => position - 308);
                            setSlide(slide => slide + 1);
                        }
                        break;
                    case "minus":
                        if (slide > 1) {
                            setPosition(position => position + 308);
                            setSlide(slide => slide - 1);
                        }
                        break;
                    default:
                        break;
                }
        }
    }

    return (
        <section className={s.hits}>
            <h1 className={s.hitsHeader}>Хиты продаж</h1>
            <div className={s.hitsMenu}>
                {data.hits.menu !== null ? data.hits.menu.map((item, index) => (
                    <div key={index} className={menuName === index ? s.tagActive : s.tag} onClick={() => setMenuName(index)}>{item}</div>
                )) : null}
            </div>
            <div className={s.hitsSlider}>
                <div className={s.hitsWrapper}>
                    <div className={s.hitsWrapperSlider} style={{ left: position + 'px' }}>
                        {data.hits.slideItems !== null ? data.hits.slideItems.map((slide, index) => <SliderItem key={index} item={slide} />) : null}
                    </div>
                </div>
                <div className={s.arrowRight} onClick={() => changeSlide("plus")}></div>
                <div className={s.arrowLeft} onClick={() => changeSlide("minus")}></div>
            </div>
        </section>
    )
}

export default Hits;