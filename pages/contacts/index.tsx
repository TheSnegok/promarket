import { useState } from "react";
import { useGlobalContext } from "~/../Components/Context/Context";
import s from "../../Styles/pages/ContactsPage.module.sass";

const ContactsPage = () => {

    const { data } = useGlobalContext();

    const [coord, setCoord] = useState<String>('50.512781249939906, 30.58245169841876')

    return (
        <section className={s.contacts}>
            <h3 className={s.contactsHeader}>Контакты</h3>
            <p>Зв'язатися за нами можливо за допомогою телефона:</p>
            <div className={s.contactsNumber}>
                <a href="tel:+380950183210">+38 095 018-32-10</a>
            </div>
            <p>Або в нашому центрі, виберіть найближче місце до вас:</p>
            <div className={s.contactsWrapper}>
                <div className={s.contactsWrapperMenu}>
                    {data.regionsList.map(region => (
                        <div className={s.contactsWrapperMenuRegion}>
                            <span>{region}</span>
                        </div>
                    ))}
                </div>
                <div className={s.contactsWrapperMap}>
                    <iframe src={`https://maps.google.com/maps?q=${coord}&z=15&output=embed`} width="600" height="450" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
            </div>
        </section>
    )
}

export default ContactsPage;