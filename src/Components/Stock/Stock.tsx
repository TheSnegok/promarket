import { FC } from "react";
import s from './Stock.module.sass';
import mixer from '../../Image/stock/1 img.png';
import showerCabin from '../../Image/stock/image 2.png';
import bathroomAcr from '../../Image/stock/image 3.png';
import toilet2 from '../../Image/stock/image 4.png';
import sink2 from '../../Image/stock/image 5.png';
import chat from '../../Image/hits/messageLogo.svg';

const Stock: FC = () => {
    return (
        <section className={s.stock}>
            <h1 className={s.stockHeader}>Акции</h1>
            <div className={s.stockMenu}>
                <div className={s.tag}>Любые товары</div>
                <div className={s.tag}>Смесители</div>
                <div className={s.tag}>Полотенцесушители</div>
                <div className={s.tag}>Биде</div>
                <div className={s.tag}>Душевые системы</div>
                <div className={s.tag}>Ванны</div>
                <div className={s.tag}>Унитазы</div>
                <div className={s.tag}>Отопители</div>
                <div className={s.tag}>Посудомоечные машины</div>
            </div>
            <div className={s.stockWrapper}>
                <div className={s.items}>
                    <div className={s.itemsImg}>
                        <div className={s.itemsImgTags}>
                            <div className={s.tagTip}>Акция</div>
                        </div>
                        <img src={mixer} alt="firstItem" />
                    </div>
                    <div className={s.itemsStars}>
                        <div className={s.starsWrapper}>
                            <div className={s.stars}>
                                <div className={s.starsFull}></div>
                            </div>
                            <div className={s.stars}>
                                <div className={s.starsFull}></div>
                            </div>
                            <div className={s.stars}>
                                <div className={s.starsFull}></div>
                            </div>
                            <div className={s.stars}>
                                <div className={s.starsFull}></div>
                            </div>
                            <div className={s.stars}>
                                <div className={s.starsHalf}></div>
                            </div>
                        </div>
                        <div className={s.message}>
                            <img src={chat} alt="chat" />
                            <span className={s.messageCount}>12</span>
                        </div>
                    </div>
                    <div className={s.itemsDescription}>
                        <span>Смеситель Hansgrohe Logis 71070000 для раковины</span>
                    </div>
                    <div className={s.itemsCountry}>
                        <span>Испания</span>
                    </div>
                    <div className={s.itemsBuy}>
                        <div className={s.price} data-diuscount='7 601 ₽'>
                            <span>6 050 ₽</span>
                        </div>
                        <div className={s.buy}>
                            <span>В КОРЗИНУ</span>
                        </div>
                    </div>
                </div>
                <div className={s.items}>
                    <div className={s.itemsImg}>
                        <div className={s.itemsImgTags}>
                            <div className={s.tagTip}>Акция</div>
                        </div>
                        <img src={showerCabin} alt="firstItem" />
                    </div>
                    <div className={s.itemsStars}>
                        <div className={s.starsWrapper}>
                            <div className={s.stars}>
                                <div className={s.starsFull}></div>
                            </div>
                            <div className={s.stars}>
                                <div className={s.starsFull}></div>
                            </div>
                            <div className={s.stars}>
                                <div className={s.starsFull}></div>
                            </div>
                            <div className={s.stars}>
                                <div className={s.starsFull}></div>
                            </div>
                            <div className={s.stars}>
                                <div className={s.starsHalf}></div>
                            </div>
                        </div>
                        <div className={s.message}>
                            <img src={chat} alt="chat" />
                            <span className={s.messageCount}>12</span>
                        </div>
                    </div>
                    <div className={s.itemsDescription}>
                        <span>Душевая кабина Black&White Galaxy G8800, 80 x 110 см</span>
                    </div>
                    <div className={s.itemsCountry}>
                        <span>Германия</span>
                    </div>
                    <div className={s.itemsBuy}>
                        <div className={s.price} data-diuscount='90 580 ₽'>
                            <span>84 000 ₽</span>
                        </div>
                        <div className={s.buy}>
                            <span>В КОРЗИНУ</span>
                        </div>
                    </div>
                </div>
                <div className={s.items}>
                    <div className={s.itemsImg}>
                        <div className={s.itemsImgTags}>
                            <div className={s.tagTip}>Акция</div>
                        </div>
                        <img src={bathroomAcr} alt="firstItem" />
                    </div>
                    <div className={s.itemsStars}>
                        <div className={s.starsWrapper}>
                            <div className={s.stars}>
                                <div className={s.starsFull}></div>
                            </div>
                            <div className={s.stars}>
                                <div className={s.starsFull}></div>
                            </div>
                            <div className={s.stars}>
                                <div className={s.starsFull}></div>
                            </div>
                            <div className={s.stars}>
                                <div className={s.starsFull}></div>
                            </div>
                            <div className={s.stars}>
                                <div className={s.starsHalf}></div>
                            </div>
                        </div>
                        <div className={s.message}>
                            <img src={chat} alt="chat" />
                            <span className={s.messageCount}>12</span>
                        </div>
                    </div>
                    <div className={s.itemsDescription}>
                        <span>Ванна акриловая Am.Pm Spirit W72A-160L100W-A2, 160 x 100 см, левосторонняя</span>
                    </div>
                    <div className={s.itemsCountry}>
                        <span>Германия</span>
                    </div>
                    <div className={s.itemsBuy}>
                        <div className={s.price} data-diuscount='36 900 ₽'>
                            <span>29 990 ₽</span>
                        </div>
                        <div className={s.buy}>
                            <span>В КОРЗИНУ</span>
                        </div>
                    </div>
                </div>
                <div className={s.items}>
                    <div className={s.itemsImg}>
                        <div className={s.itemsImgTags}>
                            <div className={s.tagTip}>Акция</div>
                        </div>
                        <img src={toilet2} alt="firstItem" />
                    </div>
                    <div className={s.itemsStars}>
                        <div className={s.starsWrapper}>
                            <div className={s.stars}>
                                <div className={s.starsFull}></div>
                            </div>
                            <div className={s.stars}>
                                <div className={s.starsFull}></div>
                            </div>
                            <div className={s.stars}>
                                <div className={s.starsFull}></div>
                            </div>
                            <div className={s.stars}>
                                <div className={s.starsFull}></div>
                            </div>
                            <div className={s.stars}>
                                <div className={s.starsHalf}></div>
                            </div>
                        </div>
                        <div className={s.message}>
                            <img src={chat} alt="chat" />
                            <span className={s.messageCount}>12</span>
                        </div>
                    </div>
                    <div className={s.itemsDescription}>
                        <span>Унитаз Laguraty 8074 крышка микролифт, с функцией биде</span>
                    </div>
                    <div className={s.itemsCountry}>
                        <span>Испания</span>
                    </div>
                    <div className={s.itemsBuy}>
                        <div className={s.price} data-diuscount='34 900 ₽'>
                            <span>32 108 ₽</span>
                        </div>
                        <div className={s.buy}>
                            <span>В КОРЗИНУ</span>
                        </div>
                    </div>
                </div>
                <div className={s.items}>
                    <div className={s.itemsImg}>
                        <div className={s.itemsImgTags}>
                            <div className={s.tagTip}>Акция</div>
                        </div>
                        <img src={sink2} alt="firstItem" />
                    </div>
                    <div className={s.itemsStars}>
                        <div className={s.starsWrapper}>
                            <div className={s.stars}>
                                <div className={s.starsFull}></div>
                            </div>
                            <div className={s.stars}>
                                <div className={s.starsFull}></div>
                            </div>
                            <div className={s.stars}>
                                <div className={s.starsFull}></div>
                            </div>
                            <div className={s.stars}>
                                <div className={s.starsFull}></div>
                            </div>
                            <div className={s.stars}>
                                <div className={s.starsHalf}></div>
                            </div>
                        </div>
                        <div className={s.message}>
                            <img src={chat} alt="chat" />
                            <span className={s.messageCount}>12</span>
                        </div>
                    </div>
                    <div className={s.itemsDescription}>
                        <span>Раковина Laufen Palace 120 см 8.1170.4.000.104.1</span>
                    </div>
                    <div className={s.itemsCountry}>
                        <span>Швейцария</span>
                    </div>
                    <div className={s.itemsBuy}>
                        <div className={s.price} data-diuscount='58 601 ₽'>
                            <span>53 458 ₽</span>
                        </div>
                        <div className={s.buy}>
                            <span>В КОРЗИНУ</span>
                        </div>
                    </div>
                </div>
                {/* <div className={s.wrapperArrowRight}></div>
						<div className={s.wrapperArrowLeft}></div> */}
            </div>
        </section>
    )
}

export default Stock;