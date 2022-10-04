import s from "../../Styles/components/Icons.module.sass";
import car from '../../public/Car.svg';
import Shield from '../../public/Shield.svg';
import loader from '../../public/loader.svg';
import currency from '../../public/currency.svg';
import like from '../../public/like.png';
import Image from "next/image";

const Icons = () => {
    return (
        <section className={s.icons}>
            <div className={s.iconsWrapper}>
                <div className={s.car}>
                    <Image src={car} alt="car"  />
                </div>
                <div className={s.deskription}>
                    Быстрая доставка<br />
                    по Москве и в любой<br />
                    регион России
                </div>
            </div>
            <div className={s.iconsWrapper}>
                <div className={s.Shield}>
                    <Image src={Shield} alt="shield"  />
                </div>
                <div className={s.deskription}>
                    Все товары имеют<br />
                    официальную гарантию<br />
                    производителя
                </div>
            </div>
            <div className={s.iconsWrapper}>
                <div className={s.loader}>
                    <Image src={loader} alt="loader"  />
                </div>
                <div className={s.deskription}>
                    Более 100 000 товаров
                </div>
            </div>
            <div className={s.iconsWrapper}>
                <div className={s.currency}>
                    <Image src={currency} alt="currency"  />
                </div>
                <div className={s.deskription}>
                    Любой способ оплаты
                </div>
            </div>
            <div className={s.iconsWrapper}>
                <div className={s.like}>
                    <Image src={like} alt="like"  />
                </div>
                <div className={s.deskription}>
                    Высокие оценки клиентов
                </div>
            </div>
        </section>
    )
}

export default Icons;