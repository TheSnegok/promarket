import { FC, useState } from "react";
import s from './Hits.module.sass';
import sink from '../../Image/hits/image 1.png';
import bathroom from '../../Image/hits/image 2.png';
import shower from '../../Image/hits/image 3.png';
import toilet from '../../Image/hits/image 4.png';
import heatedTowelRail from '../../Image/hits/image 5.png';
import Item from "../Templates/Item/Item";
import getPersonalKey from "../Templates/KeyGenerator/KeyGenerator";

interface IItem {
    tags: string[];
	imgSrc: string ;
	stars: string[];
	reviews: number;
	description: string;
	country: string;
	price: number[];
    personalKey: string;
}

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

    const item: IItem[] = [
        {
            tags: ["Хит"],
            imgSrc: sink,
            stars: ["full", "full", "full", "full", "half"],
            reviews: 12,
            description: "Раковина Roca Debba 32799400Y, 60x48 см",
            country: "Испания",
            price: [2601],
            personalKey: getPersonalKey()
        },
        {
            tags: ["Хит", "Акция"],
            imgSrc: bathroom,
            stars: ["full", "full", "full", "full", "half"],
            reviews: 2,
            description: "Акриловая ванна AM.PM Bliss L 180х80 W53A-180-080W-ARB",
            country: "Германия",
            price: [26990, 28601],
            personalKey: getPersonalKey()
        },
        {
            tags: ["Хит"],
            imgSrc: shower,
            stars: ["full", "full", "full", "full", "half"],
            reviews: 24,
            description: "Душевая система Raiber R0808, хром",
            country: "Германия",
            price: [12207],
            personalKey: getPersonalKey()
        },
        {
            tags: ["Хит"],
            imgSrc: toilet,
            stars: ["full", "full", "full", "full", "half"],
            reviews: 4,
            description: "Унитаз AM.PM Spirit V2.0 C708607SC компакт с сиденьем микролифт",
            country: "Испания",
            price: [14764],
            personalKey: getPersonalKey()
        },
        {
            tags: ["Хит"],
            imgSrc: heatedTowelRail,
            stars: ["full", "full", "full", "full", "half"],
            reviews: 10,
            description: "Полотенцесушитель электрический Laris Кватро П7 40 x 60 см, 85 Вт, со...",
            country: "Россия, Украина",
            price: [12730],
            personalKey: getPersonalKey()
        },
        {
            tags: ["Хит"],
            imgSrc: sink,
            stars: ["full", "full", "full", "full", "half"],
            reviews: 12,
            description: "Раковина Roca Debba 32799400Y, 60x48 см",
            country: "Испания",
            price: [2601],
            personalKey: getPersonalKey()
        },
        {
            tags: ["Хит", "Акция"],
            imgSrc: bathroom,
            stars: ["full", "full", "full", "full", "half"],
            reviews: 2,
            description: "Акриловая ванна AM.PM Bliss L 180х80 W53A-180-080W-ARB",
            country: "Германия",
            price: [26990, 28601],
            personalKey: getPersonalKey()
        },
        {
            tags: ["Хит"],
            imgSrc: shower,
            stars: ["full", "full", "full", "full", "half"],
            reviews: 24,
            description: "Душевая система Raiber R0808, хром",
            country: "Германия",
            price: [12207],
            personalKey: getPersonalKey()
        },
        {
            tags: ["Хит"],
            imgSrc: toilet,
            stars: ["full", "full", "full", "full", "half"],
            reviews: 4,
            description: "Унитаз AM.PM Spirit V2.0 C708607SC компакт с сиденьем микролифт",
            country: "Испания",
            price: [14764],
            personalKey: getPersonalKey()
        },
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
                        {item.map((item, index) => <Item key={index} tags={item.tags} itemImg={item.imgSrc} itemStars={item.stars} message={item.reviews} itemDesc={item.description} itemCountry={item.country} price={item.price} personalKey={item.personalKey} />)}
                    </div>
                </div>
                <div className={s.arrowRight} onClick={() => changeSlide("plus")}></div>
                <div className={s.arrowLeft} onClick={() => changeSlide("minus")}></div>
            </div>
        </section>
    )
}

export default Hits;