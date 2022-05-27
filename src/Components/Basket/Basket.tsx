import { useState } from "react";
import { useGlobalContext } from "../Context/Context";
import { ListItem } from "../Templates/ListItem/ListItem";
import { Preview } from "../Templates/Preview/Preview";
import s from "./Basket.module.sass";

export const Basket = () => {

    const { basket } = useGlobalContext();
    const [indexItem, setIndexItem] = useState<null | number>(null);

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
                        <div className={s.content}>
                            <ul>
                                {basket.items.map((item, index) => (
                                    <ListItem key={index} content={item} setIndexItem={setIndexItem} index={index} isBasket />
                                ))}
                            </ul>
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
                    )
                }

            </section>
        </div>
    )
}