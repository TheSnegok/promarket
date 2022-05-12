import { FC, Fragment, useState } from "react";
import s from "./Menu.module.sass";
import tile from '../../Image/hoverMenu/icon1.svg';
import plumbing from '../../Image/hoverMenu/icon2.svg';
import bathroomFurniture from '../../Image/hoverMenu/icon3.svg';
import Electronics from '../../Image/hoverMenu/icon4.svg';
import heating from '../../Image/hoverMenu/icon5.svg';
import flooring from '../../Image/hoverMenu/icon6.svg';
import loop from '../../Image/search.svg';
import cabinet from '../../Image/Group.svg';
import desire from '../../Image/heart.svg';
import shoppingCart from '../../Image/Cart.svg';
import { useGlobalContext } from "../Context/Context";

interface IMenuListItems {
    src: string;
    description: string;
    text: string;
};

interface IMenuInfoItems {
    text: string;
    url: string;
};

const MenuListItems: IMenuListItems[] = [
    { src: tile, description: "Tile", text: "Плитка" },
    { src: plumbing, description: "Plumbing", text: "Сантехника" },
    { src: bathroomFurniture, description: "Bathroom Furniture", text: "Мебель для ванной" },
    { src: Electronics, description: "Electronics", text: "Электроника и бытовая техника" },
    { src: heating, description: "Heating", text: "Отопление" },
    { src: flooring, description: "Flooring", text: "Напольное покрытие" }
];

const MenuInfoItems: IMenuInfoItems[][] = [
    [
        {
            text: "Ванны",
            url: "/"
        }, {
            text: "Ванны 150 см",
            url: "/"
        }, {
            text: "Ванны 160 см",
            url: "/"
        }, {
            text: "Ванны 170 см",
            url: "/"
        }, {
            text: "Еще",
            url: "/"
        }
    ],
    [
        {
            text: "Унитазы",
            url: "/"
        }, {
            text: "2 режима смыва",
            url: "/"
        }, {
            text: "Без ободка",
            url: "/"
        }, {
            text: "Подвесные",
            url: "/"
        }, {
            text: "Еще",
            url: "/"
        }
    ],
    [
        {
            text: "Раковины",
            url: "/"
        }, {
            text: "Шириной 40 см",
            url: "/"
        }, {
            text: "Шириной 50 см",
            url: "/"
        }, {
            text: "Шириной 60 см",
            url: "/"
        }, {
            text: "Еще",
            url: "/"
        }
    ],
    [
        {
            text: "Смесители",
            url: "/"
        }, {
            text: "Кухонные мойки Ulgran",
            url: "/"
        }, {
            text: "Однорычажные для кухни",
            url: "/"
        }, {
            text: "Премиальные бренда Webert",
            url: "/"
        }, {
            text: "Еще",
            url: "/"
        }
    ],
];

const MenuInfoItemsSecond: IMenuInfoItems[] = [
    { url: "/", text: 'Душевые кабины, уголки' },
    { url: "/", text: 'Биде' },
    { url: "/", text: 'Душевые боксы' },
    { url: "/", text: 'Душевые ограждения' },
    { url: "/", text: 'Душевые поддоны' },
    { url: "/", text: 'Душевые трапы и лотки' },
    { url: "/", text: 'Инсталляции' },
    { url: "/", text: 'Сливные трапы, желоба' },
    { url: "/", text: 'Душевые гарнитуры' },
    { url: "/", text: 'Душевые системы' },
    { url: "/", text: 'Душевые панели' },
    { url: "/", text: 'Верхние души' },
    { url: "/", text: 'Гигиенические души' },
    { url: "/", text: 'Аксессуары для ванной' }
];

const MenuInfoItemsThird: IMenuInfoItems[] = [
    { url: "/", text: "Аксессуары для общественных санузлов" },
    { url: "/", text: "Комплектующие" },
    { url: "/", text: "Кухонные мойки" },
    { url: "/", text: "Гидромассаж" },
    { url: "/", text: "Трубы и фитинги" },
    { url: "/", text: "Изделия для инвалидов" },
    { url: "/", text: "Инструменты сантехнические" },
    { url: "/", text: "Писсуары" },
    { url: "/", text: "Фильтры" },
];

const Menu: FC = () => {

    const { likes, basket } = useGlobalContext();
    const [info, setInfo] = useState<number>(0);

    return (
        <menu className={s.menu}>
            <div className={s.menuItems}>
                <div className={s.catalog}>
                    <div className={s.burger}>
                        <div className={s.line1}></div>
                        <div className={s.line2}></div>
                        <div className={s.line3}></div>
                    </div>
                    <div className={s.catalogText}>
                        <span className={s.catalogTextHeader}>каталог товаров</span>
                        <div className={s.border}></div>
                        <div className={s.hover}>
                            <div className={s.hoverSections}>
                                {MenuListItems.map((item, index) => (
                                    <div key={item.description} className={info === index ? s.wrapperSectionsActive : s.wrapperSections} onMouseEnter={() => setInfo(index)}>
                                        <img src={item.src} alt={item.description} />
                                        <span>{item.text}</span>
                                    </div>
                                ))}
                            </div>
                            <div className={s.hoverInfo}>
                                <div className={s.hoverInfoHeader}>
                                    <span>{MenuListItems[info].text}</span>
                                </div>
                                <div className={s.wrapper}>
                                    {info === 1 ?
                                        (
                                            <Fragment>
                                                <div className={s.wrapperFirst}>
                                                    {MenuInfoItems.map(mas => (
                                                        <div className={s.columnWrapper} key={mas[0].text}>
                                                            <span className={s.columnWrapperHeader}>{mas[0].text}</span>
                                                            <ul>
                                                                <li>
                                                                    <a href={mas[1].url}>
                                                                        <span>{mas[1].text}</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href={mas[2].url}>
                                                                        <span>{mas[2].text}</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href={mas[2].url}>
                                                                        <span>{mas[3].text}</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href={mas[2].url}>
                                                                        <span>{mas[4].text}</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className={s.wrapperSecond}>
                                                    <ul>
                                                        {MenuInfoItemsSecond.map((item, index) => (
                                                            <li key={index} >
                                                                <a href={item.url}>{item.text}</a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className={s.wrapperThird}>
                                                    <ul>
                                                        {MenuInfoItemsThird.map((item, index) => (
                                                            <li key={index}>
                                                                <a href={item.url}>{item.text}</a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                            </Fragment>
                                        ) : (
                                            <div className={s.wrapperFirst}>
                                                Comming soon...
                                            </div>
                                        )
                                    }
                                    <div className={s.wrapperBanner}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.catalogHover}></div>
                <a href="/" className={s.stonks}>
                    <div className={s.stonksText}>АКЦИИ</div>
                </a>
                <a href="/" className={s.brand}>
                    <div className={s.brandText}>БРЕНДЫ</div>
                </a>
            </div>
            <div className={s.menuSearcher}>
                <input type="text" className={s.input} placeholder='Что вы ищете?' />
                <div className={s.icon}>
                    <img src={loop} alt="search" className={s.loop} />
                </div>
            </div>
            <div className={s.menuActions} >
                <div className={s.cabinet}>
                    <a href="/">
                        <img src={cabinet} alt="cabinet" className={s.cabinetImg} />
                    </a>
                </div>
                <div className={s.desired}>
                    <a href="/">
                        <img src={desire} alt="desired" className={s.desiredImg} />
                        {likes.count === 0 ? null : <div className={s.desiredAlert}>{likes.count}</div>}
                    </a>
                </div>
                <div className={s.shopping}>
                    <a href="/">
                        <img src={shoppingCart} alt="shoppingCart" className={s.shoppingImg} />
                        {basket === 0 ? null : <div className={s.shoppingAlert}>{basket}</div>}
                    </a>
                </div>
            </div>
            <div className={s.catalogHover}></div>
        </menu >
    )
}

export default Menu;
