import { FC, useState } from "react";
import s from './Stock.module.sass';
import SliderItem from "../Templates/SliderItem/SliderItem";

const Stock: FC = () => {

    const [position, setPosition] = useState<number>(0);
    const [slide, setSlide] = useState<number>(1);
    const [menuName, setMenuName] = useState<number>(0);

    const changeSlide = (option: string) => {
        if (item.length > 5)
            switch (option) {
                case "plus":
                    if (slide + 4 < item.length) {
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

    return (
        <section className={s.stock}>
            <h1 className={s.stockHeader}>Акции</h1>
            <div className={s.stockMenu}>
                {menu.map((item, index) => (
                    <div key={index} className={menuName === index ? s.tagActive : s.tag} onClick={() => setMenuName(index)}>{item}</div>
                ))}
            </div>
            <div className={s.stockSlider}>
                <div className={s.stockWrapper}>
                    <div className={s.stockWrapperSlider} style={{ left: position + 'px' }}>
                        {item.map((item, index) => <SliderItem key={index} tags={item.tags} itemImg={item.imgSrc} itemStars={item.stars} message={item.reviews} itemDesc={item.description} itemCountry={item.country} price={item.price} personalKey={item.personalKey} />)}
                    </div>
                </div>
                <div className={s.arrowRight} onClick={() => changeSlide("plus")}></div>
                <div className={s.arrowLeft} onClick={() => changeSlide("minus")}></div>
            </div>
        </section>
    )
}

export default Stock;