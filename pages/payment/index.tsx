import Image from "next/image";
import s from "../../Styles/pages/Payment.module.sass"

const Payment = () => {
    return (
        <section className={s.payment}>
            <h2 className={s.paymentHeader}>Оплата</h2>
            <div className={s.paymentWrapper}>
                <h4 className={s.paymentWrapperHeader}>Есть возможность оплаты двумя вариантами:</h4>
                <div className={s.paymentWrapperCash}>
                    <span>Вы можете заплатить наличными при доставке.</span>
                    <div className={s.paymentWrapperCashImg}>
                        <Image src="" alt="cash" />
                    </div>
                </div>
                <div>Или</div>
                <div className={s.paymentWrapperCard}>
                    <span>Вы можете заплатить при оформлении заказа любыми картами из ниже перечисленных.</span>
                    <div className={s.paymentWrapperCardImg}>
                        <Image src="" alt="card" />
                    </div>
                    Мы поддерживаем такие платёжные системы:
                    <div className={s.paymentWrapperCardNames}>
                        <div className={s.paymentWrapperCardNamesVisa}>
                            <Image src="" alt="Visa" />
                        </div>
                        <div className={s.paymentWrapperCardNamesPaypal}>
                            <Image src="" alt="Paypal" />
                        </div>
                        <div className={s.paymentWrapperCardNamesMastercard}>
                            <Image src="" alt="Mastercard" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Payment;