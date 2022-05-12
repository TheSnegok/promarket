import { FC, useState } from "react";
import s from './Stock.module.sass';
import mixer from '../../Image/stock/1 img.png';
import showerCabin from '../../Image/stock/image 2.png';
import bathroomAcr from '../../Image/stock/image 3.png';
import toilet2 from '../../Image/stock/image 4.png';
import sink2 from '../../Image/stock/image 5.png';
import Item from "../Templates/Item/Item";

interface IItem {
    tags: string[];
	imgSrc: string ;
	stars: string[];
	reviews: number;
	description: string;
	country: string;
	price: number[];
}

const menu: string[] = ["Любые товары", "Смесители", "Полотенцесушители", "Биде", "Душевые системы", "Ванны", "Унитазы", "Отопители", "Посудомоечные машины"];

const item: IItem[] = [
    {
        tags: ["Акция"],
        imgSrc: mixer,
        stars: ["full", "full", "full", "full", "half"],
        reviews: 12,
        description: "Смеситель Hansgrohe Logis 71070000 для раковины",
        country: "Испания",
        price: [6050, 7601]
    },
    {
        tags: ["Акция"],
        imgSrc: showerCabin,
        stars: ["full", "full", "full", "full", "half"],
        reviews: 12,
        description: "Душевая кабина Black&White Galaxy G8800, 80 x 110 см",
        country: "Германия",
        price: [84000, 90580]
    },
    {
        tags: ["Акция"],
        imgSrc: bathroomAcr,
        stars: ["full", "full", "full", "full", "half"],
        reviews: 12,
        description: "Ванна акриловая Am.Pm Spirit W72A-160L100W-A2, 160 x 100 см, левосторонняя",
        country: "Германия",
        price: [29990, 36900]
    },
    {
        tags: ["Акция"],
        imgSrc: toilet2,
        stars: ["full", "full", "full", "full", "half"],
        reviews: 12,
        description: "Унитаз Laguraty 8074 крышка микролифт, с функцией биде",
        country: "Испания",
        price: [32108, 34900]
    },
    {
        tags: ["Акция"],
        imgSrc: sink2,
        stars: ["full", "full", "full", "full", "half"],
        reviews: 10,
        description: "Раковина Laufen Palace 120 см 8.1170.4.000.104.1",
        country: "Швейцария",
        price: [53458, 58601]
    },
    {
        tags: ["Акция"],
        imgSrc: mixer,
        stars: ["full", "full", "full", "full", "half"],
        reviews: 12,
        description: "Смеситель Hansgrohe Logis 71070000 для раковины",
        country: "Испания",
        price: [6050, 7601]
    },
    {
        tags: ["Акция"],
        imgSrc: showerCabin,
        stars: ["full", "full", "full", "full", "half"],
        reviews: 12,
        description: "Душевая кабина Black&White Galaxy G8800, 80 x 110 см",
        country: "Германия",
        price: [84000, 90580]
    },
    {
        tags: ["Акция"],
        imgSrc: bathroomAcr,
        stars: ["full", "full", "full", "full", "half"],
        reviews: 12,
        description: "Ванна акриловая Am.Pm Spirit W72A-160L100W-A2, 160 x 100 см, левосторонняя",
        country: "Германия",
        price: [29990, 36900]
    },
    {
        tags: ["Акция"],
        imgSrc: toilet2,
        stars: ["full", "full", "full", "full", "half"],
        reviews: 12,
        description: "Унитаз Laguraty 8074 крышка микролифт, с функцией биде",
        country: "Испания",
        price: [32108, 34900]
    },
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
                        {item.map((item, index) => <Item key={index} tags={item.tags} itemImg={item.imgSrc} itemStars={item.stars} message={item.reviews} itemDesc={item.description} itemCountry={item.country} price={item.price} />)}
                    </div>
                </div>
                <div className={s.arrowRight} onClick={() => changeSlide("plus")}></div>
                <div className={s.arrowLeft} onClick={() => changeSlide("minus")}></div>
            </div>
        </section>
    )
}

export default Stock;