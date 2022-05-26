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

    const {contextFindItem, contextPushItem} = useGlobalContext();

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
                        <button className={contextFindItem('likes', content.personalKey) ? s.likesItemBuyActive : s.likesItemBuy} onClick={() => contextPushItem('likes', content)}>
                            {contextFindItem('likes', content.personalKey) ? 'нравится' : 'не нравится'}
                        </button>
                    ) : (
                        <button className={contextFindItem('basket', content.personalKey) ? s.likesItemBuyActive : s.likesItemBuy} onClick={() => contextPushItem('basket', content)}>
                            {contextFindItem('basket', content.personalKey) ? 'в корзину' : 'в корзинe'}
                        </button>
                    )
                }
            </li>
        </>
    )
}