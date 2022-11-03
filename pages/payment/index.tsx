import Image from "next/image";
import s from "../../Styles/pages/Payment.module.sass"
import visa from "../../public/Payment/visa.svg";
import paypal from "../../public/Payment/paypal.svg";
import cash from "../../public/Payment/cash.svg";
import mastercard from "../../public/Payment/mastercard.svg";
import delivery from "../../public/Payment/delivery.svg";
import Link from "next/link";

const Payment = () => {
    return (
        <section className={s.payment}>
            <h2 className={s.paymentHeader}>Оплата</h2>
            <div className={s.paymentWrapper}>
                <h4 className={s.paymentWrapperHeader}>Как я могу росплатится?</h4>
                <div className={s.paymentWrapperCash}>
                    <span>Вы можете заплатить наличными или по карте при доставке.</span>
                    <div className={s.paymentWrapperCashImg}>
                        <Image src={delivery} alt="cash" layout="fill" />
                    </div>
                </div>
                <div className={s.paymentWrapperAnd}>Или</div>
                <div className={s.paymentWrapperCard}>
                    <span>Вы можете заплатить при оформлении заказа любыми картами из ниже перечисленных.</span>
                    <div className={s.paymentWrapperCardImg}>
                        <Image src={cash} alt="card" layout="fill" />
                    </div>
                </div>
            </div>
            <div className={s.paymentBanks}>
                <h5 className={s.paymentBanksHeader}>Мы поддерживаем такие банковские системы как:</h5>
                <div className={s.paymentBanksWrapper}>
                    <div className={s.paymentBanksWrapperImg}>
                        <Link href="/">
                            <a>
                                <Image src={visa} alt="Visa" layout="fill" />
                            </a>
                        </Link>
                    </div>
                    <div className={s.paymentBanksWrapperImg}>
                        <Link href="/">
                            <a>
                                <Image src={paypal} alt="Paypal" layout="fill" />
                            </a>
                        </Link>
                    </div>
                    <div className={s.paymentBanksWrapperImg}>
                        <Link href="/">
                            <a>
                                <Image src={mastercard} alt="Mastercard" layout="fill" />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Payment;