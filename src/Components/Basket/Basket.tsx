import { useGlobalContext } from "../Context/Context";
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
                        {basket.items.map(item => {
                            <li>
                                {item.imgUrl + ' ' + item.description + ' ' + item.country + ' ' + item.price}
                            </li>
                        })}
                    </ul>
                </div>
                <div className={s.preview}></div>
            </section>
        </div>
    )
}