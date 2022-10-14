import { useState } from "react";
import { useGlobalContext } from "~/../Components/Context/Context";
import s from "../../Styles/pages/ContactsPage.module.sass";

const ContactsPage = () => {

    const { data } = useGlobalContext();

    const [coord, setCoord] = useState<string>('50.512781249939906, 30.58245169841876');

    const changeRegion = (coords: string) => {
        setCoord(coords);
    }

    return (
        <section className={s.contacts}>
            <h3 className={s.contactsHeader}>Контакты</h3>
            <div className={s.contactsPhone}>
                <p>Зв'язатися за нами можливо за допомогою телефона:</p>
                <div className={s.contactsPhoneNumber}>
                    <a href="tel:+380950183210">+38 095 018-32-10</a>
                </div>
            </div>
            <div className={s.contactsOr}>
                <span>или</span>
            </div>
            <div className={s.contactsLocation}>
                <p>Або в нашому центрі, виберіть найближче місце до вас:</p>
                <div className={s.contactsLocationMenu}>
                    <div className={s.contactsLocationMenuList}>
                        {data.regionsList.map((region, index) => (
                            <div className={s.contactsLocationMenuListRegion} onClick={() => changeRegion(region.locationCoords)} key={index}>
                                <span>{region.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={s.contactsLocationMap}>
                    <iframe src={`https://maps.google.com/maps?q=${coord}&z=15&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
            </div>
        </section>
    )
}

export default ContactsPage;