import { ILikesItems } from "../../Context/Context";
import { numberWithSpaces } from "../NumberWithSpaces/NumberWithSpaces";
import s from "./BasketItem.module.sass";

interface IBasketItem {
    item: ILikesItems;
}

export const BasketItem = ({ item }: IBasketItem) => {
    return (
        <li className={s.item}>
            <img src={item.imgUrl} alt={item.description} className={s.itemImg} />
            <span className={s.itemDescription}>{item.description}</span>
            <span className={s.itemCountry}>{item.country}</span>
            <span className={s.itemPrice}>{numberWithSpaces(item.price[0])}</span>
        </li>
    )
} 