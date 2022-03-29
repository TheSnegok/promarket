import { FC } from "react";
import s from "./Menu.module.sass";
// import img for Menu
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

const Menu: FC = () => {
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
                                <div className={s.wrapperSections}>
                                    <img src={tile} alt="" />
                                    <span>Плитка</span>
                                </div>
                                <div className={s.wrapperSections}>
                                    <img src={plumbing} alt="" />
                                    <span>Сантехника</span>
                                </div>
                                <div className={s.wrapperSections}>
                                    <img src={bathroomFurniture} alt="" />
                                    <span>Мебель для ванной</span>
                                </div>
                                <div className={s.wrapperSections}>
                                    <img src={Electronics} alt="" />
                                    <span>Электроника и бытовая техника</span>
                                </div>
                                <div className={s.wrapperSections}>
                                    <img src={heating} alt="" />
                                    <span>Отопление</span>
                                </div>
                                <div className={s.wrapperSections}>
                                    <img src={flooring} alt="" />
                                    <span>Напольное покрытие</span>
                                </div>
                            </div>
                            <div className={s.hoverInfo}>
                                <div className={s.hoverInfoHeader}>
                                    <span>Сантехника</span>
                                </div>
                                <div className={s.wrapper}>
                                    <div className={s.wrapperFirst}>
                                        <div className={s.columnWrapper}>
                                            <span className={s.columnWrapperHeader}>Ванны</span>
                                            <ul>
                                                <li>
                                                    <a href="/">
                                                        <span>Ванны 150 см</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <span>Ванны 160 см</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <span>Ванны 170 см</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <span>Еще</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={s.columnWrapper}>
                                            <span className={s.columnWrapperHeader}>Унитазы</span>
                                            <ul>
                                                <li>
                                                    <a href="/">
                                                        <span>2 режима смыва</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <span>Без ободка</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <span>Подвесные</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <span>Еще</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={s.columnWrapper}>
                                            <span className={s.columnWrapperHeader}>Раковины</span>
                                            <ul>
                                                <li>
                                                    <a href="/">
                                                        <span>Шириной 40 см</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <span>Шириной 50 см</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <span>Шириной 60 см</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <span>Еще</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={s.columnWrapper}>
                                            <span className={s.columnWrapperHeader}>Смесители</span>
                                            <ul>
                                                <li>
                                                    <a href="/">
                                                        <span>Кухонные мойки Ulgran</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <span>Однорычажные для кухни</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <span>Премиальные бренда Webert</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <span>Еще</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={s.wrapperSecond}>
                                        <ul>
                                            <li>
                                                <a href="/">Душевые кабины, уголки</a>
                                            </li>
                                            <li>
                                                <a href="/">Биде</a>
                                            </li>
                                            <li>
                                                <a href="/">Душевые боксы</a>
                                            </li>
                                            <li>
                                                <a href="/">Душевые ограждения</a>
                                            </li>
                                            <li>
                                                <a href="/">Душевые поддоны</a>
                                            </li>
                                            <li>
                                                <a href="/">Душевые трапы и лотки</a>
                                            </li>
                                            <li>
                                                <a href="/">Инсталляции</a>
                                            </li>
                                            <li>
                                                <a href="/">Сливные трапы, желоба</a>
                                            </li>
                                            <li>
                                                <a href="/">Душевые гарнитуры</a>
                                            </li>
                                            <li>
                                                <a href="/">Душевые системы</a>
                                            </li>
                                            <li>
                                                <a href="/">Душевые панели</a>
                                            </li>
                                            <li>
                                                <a href="/">Верхние души</a>
                                            </li>
                                            <li>
                                                <a href="/">Гигиенические души</a>
                                            </li>
                                            <li>
                                                <a href="/">Аксессуары для ванной</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={s.wrapperThird}>
                                        <ul>
                                            <li><a href="/">Аксессуары для
                                                общественных санузлов</a></li>
                                            <li><a href="/">Комплектующие</a></li>
                                            <li><a href="/">Кухонные мойки</a></li>
                                            <li><a href="/">Гидромассаж</a></li>
                                            <li><a href="/">Трубы и фитинги</a></li>
                                            <li><a href="/">Изделия для инвалидов</a></li>
                                            <li><a href="/">Инструменты сантехнические</a></li>
                                            <li><a href="/">Писсуары</a></li>
                                            <li><a href="/">Фильтры</a></li>
                                        </ul>
                                    </div>
                                    <div className={s.wrapperBanner}></div>
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
