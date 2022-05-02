import { FC, useState } from "react";
import s from './Stock.module.sass';
import mixer from '../../Image/stock/1 img.png';
import showerCabin from '../../Image/stock/image 2.png';
import bathroomAcr from '../../Image/stock/image 3.png';
import toilet2 from '../../Image/stock/image 4.png';
import sink2 from '../../Image/stock/image 5.png';
import chat from '../../Image/hits/messageLogo.svg';
import Item from "../Templates/Item/Item";

const menu: string[] = ["Любые товары", "Смесители", "Полотенцесушители", "Биде", "Душевые системы", "Ванны", "Унитазы", "Отопители", "Посудомоечные машины"];

const item: (string | string[])[][] = [
    [
        ["Акция"],
        mixer,
        ["full", "full", "full", "full", "half"],
        [chat, "12"],
        "Смеситель Hansgrohe Logis 71070000 для раковины",
        "Испания",
        ["6 050 ₽", "7 601 ₽"]
    ],
    [
        ["Акция"],
        showerCabin,
        ["full", "full", "full", "full", "half"],
        [chat, "12"],
        "Душевая кабина Black&White Galaxy G8800, 80 x 110 см",
        "Германия",
        ["84 000 ₽", "90 580 ₽"]
    ],
    [
        ["Акция"],
        bathroomAcr,
        ["full", "full", "full", "full", "half"],
        [chat, "12"],
        "Ванна акриловая Am.Pm Spirit W72A-160L100W-A2, 160 x 100 см, левосторонняя",
        "Германия",
        ["29 990 ₽", "36 900 ₽"]
    ],
    [
        ["Акция"],
        toilet2,
        ["full", "full", "full", "full", "half"],
        [chat, "12"],
        "Унитаз Laguraty 8074 крышка микролифт, с функцией биде",
        "Испания",
        ["32 108 ₽", "34 900 ₽"]
    ],
    [
        ["Акция"],
        sink2,
        ["full", "full", "full", "full", "half"],
        [chat, "10"],
        "Раковина Laufen Palace 120 см 8.1170.4.000.104.1",
        "Швейцария",
        ["53 458 ₽", "58 601 ₽"]
    ],
    [
        ["Акция"],
        mixer,
        ["full", "full", "full", "full", "half"],
        [chat, "12"],
        "Смеситель Hansgrohe Logis 71070000 для раковины",
        "Испания",
        ["6 050 ₽", "7 601 ₽"]
    ],
    [
        ["Акция"],
        showerCabin,
        ["full", "full", "full", "full", "half"],
        [chat, "12"],
        "Душевая кабина Black&White Galaxy G8800, 80 x 110 см",
        "Германия",
        ["84 000 ₽", "90 580 ₽"]
    ],
    [
        ["Акция"],
        bathroomAcr,
        ["full", "full", "full", "full", "half"],
        [chat, "12"],
        "Ванна акриловая Am.Pm Spirit W72A-160L100W-A2, 160 x 100 см, левосторонняя",
        "Германия",
        ["29 990 ₽", "36 900 ₽"]
    ],
    [
        ["Акция"],
        toilet2,
        ["full", "full", "full", "full", "half"],
        [chat, "12"],
        "Унитаз Laguraty 8074 крышка микролифт, с функцией биде",
        "Испания",
        ["32 108 ₽", "34 900 ₽"]
    ],
];

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
                        {item.map((item, index) => <Item key={index} tags={item[0]} itemImg={item[1]} itemStars={Array.isArray(item[2]) ? item[2] : undefined} message={item[3]} itemDesc={item[4]} itemCountry={item[5]} price={item[6]} />)}
                    </div>
                </div>
                <div className={s.arrowRight} onClick={() => changeSlide("plus")}></div>
                <div className={s.arrowLeft} onClick={() => changeSlide("minus")}></div>
            </div>
        </section>
    )
}

export default Stock;