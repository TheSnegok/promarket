import { ILikesItems } from "../../Context/Context";

interface IBasketItem {
    item: ILikesItems;
}

export const BasketItem = ({ item }: IBasketItem) => {
    return (
        <li>
            <img src={item.imgUrl} alt={item.description} />
            <span>{item.description}</span>
            <span>{item.country}</span>
            <span>{item.price}</span>
        </li>
    )
} 