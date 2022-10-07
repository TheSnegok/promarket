import { FC, useEffect, useState } from "react";
import s from '../../Styles/components/Hits.module.sass';
import SliderItem from "../Templates/SliderItem/SliderItem";
import { useGlobalContext } from "../Context/Context";

const Hits: FC = () => {

    const { data } = useGlobalContext();

    const [position, setPosition] = useState<number>(0);
    const [slide, setSlide] = useState<number>(1);
    const [menuName, setMenuName] = useState<number>(0);
    const [type, setType] = useState<String>(data.hits.menu[0][1]);
    const [slidesArray, setSlideArray] = useState(data.hits.slideItems);

    const changeSlide = (option: string) => {
        if (data.hits.slideItems !== null) {
            if (data.hits.slideItems.length > 5)
                switch (option) {
                    case "plus":
                        if ((window.innerWidth < 800 ? slide : window.innerWidth < 1050 ? slide + 1 : window.innerWidth < 1350 ? slide + 2 : window.innerWidth < 1600 ? slide + 3 : slide + 4) < data.hits.slideItems.length) {
                            setPosition(position => window.innerWidth < 520 ? position - 220 : position - 308);
                            setSlide(slide => slide + 1);
                        }
                        break;
                    case "minus":
                        if (slide > 1) {
                            setPosition(position => window.innerWidth < 520 ? position + 220 : position + 308);
                            setSlide(slide => slide - 1);
                        }
                        break;
                    default:
                        break;
                }
        }
    }

    const onChangeMenu = (menuName, menuType) => {
        setType(menuType);
        setMenuName(menuName);
    }

    useEffect(() => {
        setSlideArray(data.hits.slideItems.filter((item => type === 'all' ? item : type === item.type)))
    }, [type]);

    return (
        <section className={s.hits}>
            <h1 className={s.hitsHeader}>Хиты продаж</h1>
            <div className={s.hitsMenu}>
                {data.hits.menu !== null ? data.hits.menu.map((item, index) => (
                    <div key={index} className={menuName === index ? s.tagActive : s.tag} onClick={() => onChangeMenu(index, item[1])}>{item[0]}</div>
                )) : null}
            </div>
            <div className={s.hitsSlider}>
                <div className={s.hitsWrapper}>
                    <div className={s.hitsWrapperSlider} style={{ left: position + 'px' }}>
                        {slidesArray.map((slide, index) => <SliderItem key={index} item={slide} />)}
                    </div>
                </div>
                <div className={s.arrowRight} onClick={() => changeSlide("plus")}></div>
                <div className={s.arrowLeft} onClick={() => changeSlide("minus")}></div>
            </div>
        </section>
    )
}

export default Hits;