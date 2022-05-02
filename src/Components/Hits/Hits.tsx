import { FC, useState } from "react";
import s from './Hits.module.sass';
import sink from '../../Image/hits/image 1.png';
import bathroom from '../../Image/hits/image 2.png';
import shower from '../../Image/hits/image 3.png';
import toilet from '../../Image/hits/image 4.png';
import heatedTowelRail from '../../Image/hits/image 5.png';
import chat from '../../Image/hits/messageLogo.svg';
import Item from "../Templates/Item/Item";

const Hits: FC = () => {

    const [position, setPosition] = useState<number>(0);
    const [slide, setSlide] = useState<number>(1);
    const [menuName, setMenuName] = useState<number>(0);

    const changeSlide = (option: string) => {
        if(item.length > 5)
        switch (option) {
            case "plus":
                if(slide + 4 < item.length) {
                    setPosition(position => position - 308);
                    setSlide(slide => slide + 1);
                }
                break;
            case "minus":
                if(slide > 1) {
                    setPosition(position => position + 308);
                    setSlide(slide => slide - 1);
                }
                break;
            default:
                break;
        }
    }
    const menu: string[] = ["Любые товары", "Раковины", "Ванны", "Унитазы", "Душевые системы", "Смесители", "Зеркала", "Душевые кабины", "Стиральные машины"];

    const item: (string | string[])[][] = [
        [
            ["Хит"],
            sink,
            ["full", "full", "full", "full", "half"],
            [chat, "12"],
            "Раковина Roca Debba 32799400Y, 60x48 см",
            "Испания",
            ["2 601 ₽"]
        ],
        [
            ["Хит", "Акция"],
            bathroom,
            ["full", "full", "full", "full", "half"],
            [chat, "2"],
            "Акриловая ванна AM.PM Bliss L 180х80 W53A-180-080W-ARB",
            "Германия",
            ["26 990 ₽", "28 601 ₽"]
        ],
        [
            ["Хит"],
            shower,
            ["full", "full", "full", "full", "half"],
            [chat, "24"],
            "Душевая система Raiber R0808, хром",
            "Германия",
            ["12 207 ₽"]
        ],
        [
            ["Хит"],
            toilet,
            ["full", "full", "full", "full", "half"],
            [chat, "4"],
            "Унитаз AM.PM Spirit V2.0 C708607SC компакт с сиденьем микролифт",
            "Испания",
            ["14 764 ₽"]
        ],
        [
            ["Хит"],
            heatedTowelRail,
            ["full", "full", "full", "full", "half"],
            [chat, "10"],
            "Полотенцесушитель электрический Laris Кватро П7 40 x 60 см, 85 Вт, со...",
            "Россия, Украина",
            ["12 730 ₽"]
        ],
        [
            ["Хит"],
            sink,
            ["full", "full", "full", "full", "half"],
            [chat, "12"],
            "Раковина Roca Debba 32799400Y, 60x48 см",
            "Испания",
            ["2 601 ₽"]
        ],
        [
            ["Хит", "Акция"],
            bathroom,
            ["full", "full", "full", "full", "half"],
            [chat, "2"],
            "Акриловая ванна AM.PM Bliss L 180х80 W53A-180-080W-ARB",
            "Германия",
            ["26 990 ₽", "28 601 ₽"]
        ],
        [
            ["Хит"],
            shower,
            ["full", "full", "full", "full", "half"],
            [chat, "24"],
            "Душевая система Raiber R0808, хром",
            "Германия",
            ["12 207 ₽"]
        ],
        [
            ["Хит"],
            toilet,
            ["full", "full", "full", "full", "half"],
            [chat, "4"],
            "Унитаз AM.PM Spirit V2.0 C708607SC компакт с сиденьем микролифт",
            "Испания",
            ["14 764 ₽"]
        ],
    ];

    return (
        <section className={s.hits}>
            <h1 className={s.hitsHeader}>Хиты продаж</h1>
            <div className={s.hitsMenu}>
                {menu.map((item, index) => (
                    <div key={index} className={menuName === index ? s.tagActive : s.tag} onClick={() => setMenuName(index)}>{item}</div>
                ))}
            </div>
            <div className={s.hitsSlider}>
                <div className={s.hitsWrapper}>
                    <div className={s.hitsWrapperSlider} style={{left: position + 'px'}}>
                        {item.map((item, index) => <Item key={index} tags={item[0]} itemImg={item[1]} itemStars={Array.isArray(item[2]) ? item[2] : undefined} message={item[3]} itemDesc={item[4]} itemCountry={item[5]} price={item[6]} />)}
                    </div>
                </div>
                <div className={s.arrowRight} onClick={() => changeSlide("plus")}></div>
                <div className={s.arrowLeft} onClick={() => changeSlide("minus")}></div>
            </div>
        </section>
    )
}

export default Hits;