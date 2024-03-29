import { FC, useState } from "react";
import s from '../../Styles/components/Footer.module.sass';
import Logo from '../../public/logo.svg';
import Telegram from '../../public/logo/telegram 1.svg';
import Instagram from '../../public/logo/instagram 2.svg';
import WhatsApp from '../../public/logo/whatsApp.svg';
import { useGlobalContext } from "../Context/Context";
import Link from "next/link";
import Image from "next/image";
import { ModalLayout } from "../ModalLayout/ModalLayout";
import { Callback } from "../Callback/Callback";

const Footer: FC = () => {

    const { data } = useGlobalContext();

    const [modal, setModal] = useState(false);

    return (
        <>
            <footer className={s.footer}>
                <div className={s.footerSection}>
                    <div className={s.footerSectionList}>
                        <ul>
                            {data.footer.footerSectionList.map((item, index) => (
                                <li key={index}>
                                    <Link href={item[0]}>{item[1]}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={s.footerSectionLogo}>
                        <Link href="/">
                            <a>
                                <Image src={Logo} alt="logo" />
                            </a>
                        </Link>
                        <span>© 2022
                            <Link href="/">
                                <a>
                                    ggpromarket.surge.sh
                                </a>
                            </Link>
                        </span>
                    </div>
                </div>
                <div className={s.footerMenu}>
                    <ul>
                        {data.footer.mainMenu.map((item, index) => <li key={index}><Link href={item[0]}><a>{item[1]}</a></Link></li>)}
                    </ul>
                </div>
                <div className={s.footerContacts}>
                    <Link href="tel:+84950183210">
                        <a className={s.footerContactsPhone}>8 495 018-32-10</a>
                    </Link>
                    <div className={s.footerContactsButton}>
                        <button onClick={() => setModal(true)}>ЗАКАЗАТЬ ЗВОНОК</button>
                        {
                            modal && <ModalLayout setModal={setModal}>
                                <Callback />
                            </ModalLayout>
                        }
                    </div>
                    <div className={s.footerContactsShedule}>
                        <span>Пн-Пт: 10:00 — 20:00</span>
                        <span>Сб: 10:00 — 18:00</span>
                        <span>Вс: выходной</span>
                    </div>
                    <div className={s.footerContactsSocial}>
                        <Link href="/">
                            <a>
                                <Image src={WhatsApp} alt="whatsApp" />
                            </a>
                        </Link>
                        <Link href="/">
                            <a>
                                <Image src={Instagram} alt="instagram" />
                            </a>
                        </Link>
                        <Link href="/">
                            <a>
                                <Image src={Telegram} alt="telegram" />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={s.footerLocation}>
                    <div className={s.footerLocationStreet}>
                        <span>Склад:</span>
                        <span>
                            <Link href="https://goo.gl/maps/je6Thfut32U1v1zk8"><a>Київ, ул. Радосинська, 6 стр 11</a></Link>
                        </span>
                        <span>
                            <Link href="mail:zakaz@ggpromarket.surge.sh"><a>zakaz@ggpromarket.surge.sh</a></Link>
                        </span>
                    </div>
                </div>
            </footer>
            <section className={s.rules}>
                <span>ВАЖНО!</span> Сайт создан исключительно для резюме и не работает как интернет магазин!
            </section>
        </>
    )
}

export default Footer;