import { FC } from "react"
import s from "./Icons.module.sass";
import car from '../../Image/Car.svg';
import Shield from '../../Image/Shield.svg';
import loader from '../../Image/loader.svg';
import currency from '../../Image/currency.svg';
import like from '../../Image/like.png';

const Icons: FC = () => {
    return (
        <section className={s.icons}>
            <div className={s.iconsWrapper}>
                <div className={s.car}>
                    <img src={car} alt="car" />
                </div>
                <div className={s.deskription}>
                    Быстрая доставка<br />
                    по Москве и в любой<br />
                    регион России
                </div>
            </div>
            <div className={s.iconsWrapper}>
                <div className={s.Shield}>
                    <img src={Shield} alt="shield" />
                </div>
                <div className={s.deskription}>
                    Все товары имеют<br />
                    официальную гарантию<br />
                    производителя
                </div>
            </div>
            <div className={s.iconsWrapper}>
                <div className={s.loader}>
                    <img src={loader} alt="loader" />
                </div>
                <div className={s.deskription}>
                    Более 100 000 товаров
                </div>
            </div>
            <div className={s.iconsWrapper}>
                <div className={s.currency}>
                    <img src={currency} alt="currency" />
                </div>
                <div className={s.deskription}>
                    Любой способ оплаты
                </div>
            </div>
            <div className={s.iconsWrapper}>
                <div className={s.like}>
                    <img src={like} alt="like" />
                </div>
                <div className={s.deskription}>
                    Высокие оценки клиентов
                </div>
            </div>
        </section>
    )
}

export default Icons;