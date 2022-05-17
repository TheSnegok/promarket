import { useState } from "react";
import { Link } from "react-router-dom";
import { numberWithSpaces } from "../NumberWithSpaces/NumberWithSpaces";
import s from './LikesItem.module.sass';

interface IItemProps {
    content: {
        url: string;
        imgUrl: string;
        type: string[];
        stars: string[];
        review: number;
        price: number[];
        description: string;
        country: string;
        personalKey: string;
    }
}

const LikesItem = ({ content }: IItemProps) => {

    const [buy, setBuy] = useState(false);

    return (
        <li className={s.likesItem}>
            <div className={s.likesItemImg}>
                <Link to={content.url}>
                    <img src={content.imgUrl} alt={content.description} />
                </Link>
            </div>
            <div className={s.likesItemDescription}>
                <Link to={content.url}>
                    <span>{content.description}</span>
                </Link>
            </div>
            <div className={s.likesItemCountry}>
                <span>{content.country}</span>
            </div>
            <div className={s.likesItemPrice}>
                <span>{numberWithSpaces(content.price[0], true)}</span>
            </div>
            <button className={buy ? s.likesItemBuyActive : s.likesItemBuy } onClick={() => setBuy(buy => !buy)}>
                {buy ? 'в корзинe': 'в корзину'}
            </button>
        </li>
    )
}

export { LikesItem }