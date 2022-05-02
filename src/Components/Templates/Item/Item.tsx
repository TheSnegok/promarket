import { useState } from 'react';
import s from './Item.module.sass';

interface IItemProps {
    tags: string | string[];
    itemImg: string | string[];
    itemStars: string[] | undefined;
    message: string | string[];
    itemDesc: string | string[];
    itemCountry: string | string[];
    price: string | string[];
}

const Item = ({ tags, itemImg, itemStars, message, itemDesc, itemCountry, price }: IItemProps) => {

    const [fill, setFill] = useState<string>("#2B7BC6");

    return (
        <div className={s.item}>
            <div className={s.itemImg}>
                <a href="/">
                    {tags.length === 1 ? (
                        <div className={s.itemImgTags}>
                            {tags[0].toLowerCase() === "хит" ? <div className={s.hot}>{tags[0]}</div> : <div className={s.tagTip}>{tags[0]}</div>}
                        </div>
                    ) : (
                        <div className={s.itemImgTags}>
                            <div className={s.hot}>{tags[0]}</div>
                            <div className={s.tagTip}>{tags[1]}</div>
                        </div>
                    )}
                    <img src={`${itemImg}`} alt={`${itemImg}`} className={s.itemImgMain} />
                    <button className={s.itemImgFastLook}>Быстрый просмотр</button>
                </a>
                <div className={s.itemImgLike}>
                    <svg 
                        width="32" height="29" viewBox="0 0 32 29" 
                        onClick={() => fill === "rgb(235 47 92)" ? setFill("#2B7BC6") : setFill("rgb(235 47 92)")} 
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill={fill} d="M16 29C15.5 29 15 28.8 14.6 28.5C11.2 25.5 0 15.2 0 8.9C0 4 3.9 0 8.6 0C11.7 0 14.5 1.7 16 4.3C17.5 1.7 20.3 0 23.4 0C28.1 0 32 4 32 8.9C32 15.2 20.8 25.5 17.4 28.5C17 28.8 16.5 29 16 29ZM8.6 2C5 2 2 5.1 2 8.9C2 13.3 9.5 21.4 15.9 27H16C22.5 21.4 30 13.3 30 8.9C30 5.1 27 2 23.4 2C20.7 2 18.3 3.7 17.3 6.3C17.1 6.6 16.8 7 16 7C15.3 7 14.9 6.8 14.7 6.3C13.7 3.7 11.3 2 8.6 2Z" />
                    </svg>
                </div>
            </div>
            <div className={s.itemStars}>
                <div className={s.starsWrapper}>
                    {itemStars ? itemStars.map((item, index) => (
                        item === "full" ? (
                            <div key={index} className={s.stars}>
                                <div className={s.starsFull}></div>
                            </div>
                        ) : (item === "half" ? (
                            <div key={index} className={s.stars}>
                                <div className={s.starsHalf}></div>
                            </div>
                        ) :
                            (
                                <div key={index} className={s.stars}>
                                    <div className={s.starsOff}></div>
                                </div>
                            )
                        )
                    )) : null}
                </div>
                <div className={s.message}>
                    <a href="/">
                        <img src={message[0]} alt="chat" />
                        <span className={s.messageCount}>{message[1]}</span>
                    </a>
                </div>
            </div>
            <div className={s.itemDescription}>
                <a href="/">{itemDesc}</a>
            </div>
            <div className={s.itemCountry}>
                <span>{itemCountry}</span>
            </div>
            <div className={s.itemBuy}>
                {price.length === 1 ? (
                    <div className={s.price}>
                        <span>{price[0]}</span>
                    </div>
                ) : (
                    <div className={s.price} data-diuscount={price[1]}>
                        <span>{price[0]}</span>
                    </div>
                )}
                <div className={s.buy}>
                    <span>В КОРЗИНУ</span>
                </div>
            </div>
        </div>
    )
}

export default Item;
