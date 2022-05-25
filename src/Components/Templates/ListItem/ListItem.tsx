import { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context/Context";
import { numberWithSpaces } from "../NumberWithSpaces/NumberWithSpaces";
import s from './ListItem.module.sass';

interface ILikesItem {
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
    },
    setIndexItem: (value: number | null) => void,
    index: number,
    isBasket?: boolean
}

export const ListItem = ({ content, setIndexItem, index, isBasket }: ILikesItem) => {

    const {likes, setLikes, basket, setBasket} = useGlobalContext();
    const inBasket = basket.items.find(item => item.personalKey === content.personalKey) === undefined; 
    const inLikes = likes.items.find(item => item.personalKey === content.personalKey) === undefined; 

    const pushInLikes = () => {
        setLikes({
            count: likes.count + 1, 
            items: [
                ...likes.items,
                content
            ]
        })
    };
    
    const pushInBasket = () => {
        setBasket({
            count: basket.count + 1, 
            items: [
                ...basket.items,
                content
            ]
        })
    };

    return (
        <>
            {index !== 0 && <hr />}
            <li className={s.likesItem} onMouseOver={() => setIndexItem(index)} onMouseLeave={() => setIndexItem(null)}>
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
                {
                    isBasket ? (
                        <button className={inLikes ? s.likesItemBuyActive : s.likesItemBuy} onClick={pushInLikes}>
                            {inLikes ? 'нравится' : 'не нравится'}
                        </button>
                    ) : (
                        <button className={inBasket ? s.likesItemBuyActive : s.likesItemBuy} onClick={pushInBasket}>
                            {inBasket ? 'в корзину' : 'в корзинe'}
                        </button>
                    )
                }
            </li>
        </>
    )
}