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
                <div className={s.content}>
                    <ul>
                        {basket.items.map((item, index) => (
                            <BasketItem key={index} item={item}/>
                        ))}
                    </ul>
                </div>
                <div className={s.preview}></div>
            </section>
        </div>
    )
}