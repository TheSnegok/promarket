import { FC, useState } from "react";
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

const MenuListItems: string[][] = [
    [tile, "Tile", "Плитка"],
    [plumbing, "Plumbing", "Сантехника"],
    [bathroomFurniture, "Bathroom Furniture", "Мебель для ванной"],
    [Electronics, "Electronics", "Электроника и бытовая техника"],
    [heating, "Heating", "Отопление"],
    [flooring, "Flooring", "Напольное покрытие"]
];

const MenuInfoItems: string[][] = [
    ["Ванны", "Ванны 150 см", "Ванны 160 см", "Ванны 170 см", "Еще"],
    ["Унитазы", "2 режима смыва", "Без ободка", "Подвесные", "Еще"],
    ["Раковины", "Шириной 40 см", "Шириной 50 см", "Шириной 60 см", "Еще"],
    ["Смесители", "Кухонные мойки Ulgran", "Однорычажные для кухни", "Премиальные бренда Webert", "Еще"]
];

const MenuInfoItemsSecond: string[][] = [
    ["/", 'Душевые кабины, уголки'],
    ["/", 'Биде'],
    ["/", 'Душевые боксы'],
    ["/", 'Душевые ограждения'],
    ["/", 'Душевые поддоны'],
    ["/", 'Душевые трапы и лотки'],
    ["/", 'Инсталляции'],
    ["/", 'Сливные трапы, желоба'],
    ["/", 'Душевые гарнитуры'],
    ["/", 'Душевые системы'],
    ["/", 'Душевые панели'],
    ["/", 'Верхние души'],
    ["/", 'Гигиенические души'],
    ["/", 'Аксессуары для ванной']
]

const MenuInfoItemsThird: string[][] = [
    ["/", "Аксессуары для общественных санузлов"],
    ["/", "Комплектующие"],
    ["/", "Кухонные мойки"],
    ["/", "Гидромассаж"],
    ["/", "Трубы и фитинги"],
    ["/", "Изделия для инвалидов"],
    ["/", "Инструменты сантехнические"],
    ["/", "Писсуары"],
    ["/", "Фильтры"],
]

const Menu: FC = () => {

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
                                    <div key={item[2]} className={s.wrapperSections} onMouseEnter={() => setInfo(index)}>
                                        <img src={item[0]} alt={item[1]} />
                                        <span>{item[2]}</span>
                                    </div>
                                ))}
                            </div>
                            <div className={s.hoverInfo}>
                                <div className={s.hoverInfoHeader}>
                                    <span>{MenuListItems[info][2]}</span>
                                </div>
                                <div className={s.wrapper}>
                                    <div className={s.wrapperFirst}>
                                        {MenuInfoItems.map(item => (
                                            <div className={s.columnWrapper} key={item[0]}>
                                                <span className={s.columnWrapperHeader}>{item[0]}</span>
                                                <ul>
                                                    <li>
                                                        <a href="/">
                                                            <span>{item[1]}</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/">
                                                            <span>{item[2]}</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/">
                                                            <span>{item[3]}</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/">
                                                            <span>{item[4]}</span>
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
                                                    <a href={item[0]}>{item[1]}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className={s.wrapperThird}>
                                        <ul>
                                            {MenuInfoItemsThird.map((item, index) => (
                                                <li key={index}>
                                                    <a href={item[0]}>{item[1]}</a>
                                                </li>
                                            ))}    
                                        </ul>
                                    </div>
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
            <div className={s.menuActions}>
                <div className={s.cabinet}>
                    <img src={cabinet} alt="cabinet" className={s.cabinetImg} />
                </div>
                <div className={s.desired}>
                    <img src={desire} alt="desired" className={s.desiredImg} />
                    {/* <div className={s.desiredAlert}>4</div> */}
                </div>
                <div className={s.shopping}>
                    <img src={shoppingCart} alt="shoppingCart" className={s.shoppingImg} />
                    {/* <div className={s.shoppingAlert}>2</div> */}
                </div>
            </div>
            <div className={s.catalogHover}></div>
        </menu >
    )
}

export default Menu;
