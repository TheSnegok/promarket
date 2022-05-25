import { useGlobalContext } from "../Context/Context";
import { BasketItem } from "../Templates/BasketItem/BasketItem";
import s from "./Basket.module.sass";

export const Basket = () => {

    const { basket } = useGlobalContext();

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
                                    <BasketItem key={index} item={item} />
                                ))}
                            </ul>
                            <div className={s.preview}>
                            </div>
                        </div>
                    )
                }

            </section>
        </div>
    )
}