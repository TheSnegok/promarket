import { useGlobalContext } from "../Context/Context";
import s from "./Basket.module.sass";

export const Basket = () => {

    const { basket } = useGlobalContext();

    console.log(basket.items);

    return (
        <div className={s.basket}>
            <h1 className={s.basketHeader}>
                Корзина
            </h1>
            <section>
                <div className={s.content}>
                    <ul>
                        {basket.items.map((item, index) => (
                            <li key={index}>
                                <img src={item.imgUrl} alt={item.description} />
                                <span>{item.description}</span>
                                <span>{item.country}</span>
                                <span>{item.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={s.preview}></div>
            </section>
        </div>
    )
}