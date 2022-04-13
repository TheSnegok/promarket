import { FC } from "react";
import s from './Hits.module.sass';
import sink from '../../Image/hits/image 1.png';
import bathroom from '../../Image/hits/image 2.png';
import shower from '../../Image/hits/image 3.png';
import toilet from '../../Image/hits/image 4.png';
import heatedTowelRail from '../../Image/hits/image 5.png';
import chat from '../../Image/hits/messageLogo.svg';

const Hits: FC = () => {
    return (
        <section className={s.hits}>
            <h1 className={s.hitsHeader}>Хиты продаж</h1>
            <div className={s.hitsMenu}>
                <div className={s.tag}>Любые товары</div>
                <div className={s.tag}>Раковины</div>
                <div className={s.tag}>Ванны</div>
                <div className={s.tag}>Унитазы</div>
                <div className={s.tag}>Душевые системы</div>
                <div className={s.tag}>Смесители</div>
                <div className={s.tag}>Зеркала</div>
                <div className={s.tag}>Душевые кабины</div>
                <div className={s.tag}>Стиральные машины</div>
            </div>
            <div className={s.hitsWrapper}>
                <div className={s.items}>
                    <div className={s.itemsImg}>
                        <div className={s.itemsImgTags}>
                            <div className={s.hot}>Хит</div>
                        </div>
                        <img src={sink} alt="firstItem" />
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
                        <span>Раковина Roca Debba 32799400Y, 60x48 см</span>
                    </div>
                    <div className={s.itemsCountry}>
                        <span>Испания</span>
                    </div>
                    <div className={s.itemsBuy}>
                        <div className={s.price}>
                            <span>2 601 ₽</span>
                        </div>
                        <div className={s.buy}>
                            <span>В КОРЗИНУ</span>
                        </div>
                    </div>
                </div>
                <div className={s.items}>
                    <div className={s.itemsImg}>
                        <div className={s.itemsImgTags}>
                            <div className={s.hot}>Хит</div>
                            <div className={s.tagTip}>Акция</div>
                        </div>
                        <img src={bathroom} alt="firstItem" />
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
                            <span className={s.messageCount}>2</span>
                        </div>
                    </div>
                    <div className={s.itemsDescription}>
                        <span>Акриловая ванна AM.PM Bliss L 180х80 W53A-180-080W-ARB</span>
                    </div>
                    <div className={s.itemsCountry}>
                        <span>Германия</span>
                    </div>
                    <div className={s.itemsBuy}>
                        <div className={s.price} data-diuscount='28 601 ₽'>
                            <span>26 990 ₽</span>
                        </div>
                        <div className={s.buy}>
                            <span>В КОРЗИНУ</span>
                        </div>
                    </div>
                </div>
                <div className={s.items}>
                    <div className={s.itemsImg}>
                        <div className={s.itemsImgTags}>
                            <div className={s.hot}>Хит</div>
                        </div>
                        <img src={shower} alt="firstItem" />
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
                            <span className={s.messageCount}>24</span>
                        </div>
                    </div>
                    <div className={s.itemsDescription}>
                        <span>Душевая система Raiber R0808, хром</span>
                    </div>
                    <div className={s.itemsCountry}>
                        <span>Германия</span>
                    </div>
                    <div className={s.itemsBuy}>
                        <div className={s.price}>
                            <span>12 207 ₽</span>
                        </div>
                        <div className={s.buy}>
                            <span>В КОРЗИНУ</span>
                        </div>
                    </div>
                </div>
                <div className={s.items}>
                    <div className={s.itemsImg}>
                        <div className={s.itemsImgTags}>
                            <div className={s.hot}>Хит</div>
                        </div>
                        <img src={toilet} alt="firstItem" />
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
                            <span className={s.messageCount}>4</span>
                        </div>
                    </div>
                    <div className={s.itemsDescription}>
                        <span>Унитаз AM.PM Spirit V2.0 C708607SC компакт с сиденьем микролифт</span>
                    </div>
                    <div className={s.itemsCountry}>
                        <span>Испания</span>
                    </div>
                    <div className={s.itemsBuy}>
                        <div className={s.price}>
                            <span>14 764 ₽</span>
                        </div>
                        <div className={s.buy}>
                            <span>В КОРЗИНУ</span>
                        </div>
                    </div>
                </div>
                <div className={s.items}>
                    <div className={s.itemsImg}>
                        <div className={s.itemsImgTags}>
                            <div className={s.hot}>Хит</div>
                        </div>
                        <img src={heatedTowelRail} alt="firstItem" />
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
                            <span className={s.messageCount}>10</span>
                        </div>
                    </div>
                    <div className={s.itemsDescription}>
                        <span>Полотенцесушитель электрический Laris Кватро П7 40 x 60 см, 85 Вт, со...</span>
                    </div>
                    <div className={s.itemsCountry}>
                        <span>Россия, Украина</span>
                    </div>
                    <div className={s.itemsBuy}>
                        <div className={s.price} >
                            <span>12 730 ₽</span>
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

export default Hits;