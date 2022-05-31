import { useState } from "react";
import { useGlobalContext } from "../Context/Context";
import { ListItem } from "../Templates/ListItem/ListItem";
import { numberWithSpaces } from "../Templates/NumberWithSpaces/NumberWithSpaces";
import { Preview } from "../Templates/Preview/Preview";
import s from "./Basket.module.sass";

export const Basket = () => {

    const { basket } = useGlobalContext();
    const [indexItem, setIndexItem] = useState<undefined | number>(undefined);

    const totalPrice = (): number => {
        let totalPrice = 0;
        basket.items.forEach(item => totalPrice += item.price[0]);
        return totalPrice;
    }

    const totalPriceStock = (): number => {
        let totalPrice = 0;
        basket.items.forEach(item => totalPrice += item.price[1] ? item.price[1] : item.price[0]);
        return totalPrice;
    }

    return (
        <div className={s.basket}>
            <h1 className={s.basketHeader}>
                Корзина
            </h1>
            <section>
                {
                    basket.items.length === 0 ? (
                        <div className={s.basketEmpty}>
                            <span>Ваша корзина пуста :(</span>
                        </div>
                    ) : (
                        <>
                            <div className={s.content}>
                                <div className={s.contentList}>
                                    <ul>
                                        {basket.items.map((item, index) => (
                                            <ListItem key={index} content={item} setIndexItem={setIndexItem} index={index} isBasket />
                                        ))}
                                    </ul>
                                </div>
                                <div className={s.basketPreview}>
                                    {indexItem === null ?
                                        (
                                            <div className={s.basketPreviewNull}>
                                            </div>
                                        ) : (
                                            <Preview indexItem={indexItem} isBasket />
                                        )}
                                </div>
                            </div>
                            <div className={s.basketTotal}>
                                <h3>Итог:</h3>
                                <div className={s.basketTotalPrice}>
                                    <span>{numberWithSpaces(totalPrice(), true)}</span>
                                    {totalPriceStock() === totalPrice() ? null : (
                                        <span className={s.basketTotalPriceStock}>{numberWithSpaces(totalPriceStock(), true)}</span>
                                    )}
                                </div>
                            </div>
                            <button className={s.basketOrder}>Сделать заказ</button>
                        </>
                    )
                }
            </section>
        </div>
    )
}