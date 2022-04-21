import s from './Item.module.sass';
import heart from "../../../Image/heart.svg";

interface IItemProps {
    index: number;
    tags: string | string[];
    itemImg: string | string[];
    itemStars: string[] | undefined;
    message: string | string[];
    itemDesc: string | string[];
    itemCountry: string | string[];
    price: string | string[];
}

const Item = ({ index, tags, itemImg, itemStars, message, itemDesc, itemCountry, price }: IItemProps) => {
    return (
        <div key={index} className={s.item}>
            <div className={s.itemImg}>
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
                <div className={s.itemImgLike}><img src={heart} alt="heart" /></div>
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
