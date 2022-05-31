import { FC } from "react";
import s from './Footer.module.sass';
import logo from '../../Image/logo.svg';
import telegram from '../../Image/logo/telegram 1.svg'
import instagram from '../../Image/logo/instagram 2.svg'
import whatsApp from '../../Image/logo/whatsApp.svg'
import yandex from '../../Image/yandex.png'
import { Link } from "react-router-dom";

const footerSectionList: string[][] = [['/', 'Плитка'], ['/', 'Сантехника'], ['/', 'Мебель для ванной'], ['/', 'Электроника и бытовая техника'], ['/', 'Отопление'], ['/', 'Напольное покрытие']];
const footerMenu: string[][] = [['/', 'Оплата'], ['/', 'Доставка'], ['/', 'Поставщикам'], ['/', 'Статьи'], ['/', 'Контакты']];

const Footer: FC = () => {
    return (
        <>
            <footer className={s.footer}>
                <div className={s.footerSection}>
                    <div className={s.footerSectionList}>
                        <ul>
                            {footerSectionList.map((item, index) => <li key={index}><Link to={item[0]}>{item[1]}</Link></li>)}
                        </ul>
                    </div>
                    <div className={s.footerSectionLogo}>
                        <Link to="/"><img src={logo} alt="logo" /></Link>
                        <span>© 2020 <Link to="/">ggpromarket.ru</Link></span>
                    </div>
                </div>
                <div className={s.footerMenu}>
                    <ul>
                        {footerMenu.map((item, index) => <li key={index}><Link to={item[0]}>{item[1]}</Link></li>)}
                    </ul>
                </div>
                <div className={s.footerContacts}>
                    <a href="tel:+84950183210" className={s.footerContactsPhone}>8 495 018-32-10</a>
                    <div className={s.footerContactsButton}>
                        <button>ЗАКАЗАТЬ ЗВОНОК</button>
                    </div>
                    <div className={s.footerContactsShedule}>
                        <span>Пн-Пт: 10:00 — 20:00</span>
                        <span>Сб: 10:00 — 18:00</span>
                        <span>Вс: выходной</span>
                    </div>
                    <div className={s.footerContactsSocial}>
                        <a href="/"><img src={whatsApp} alt="whatsApp" /></a>
                        <a href="/"><img src={instagram} alt="instagram" /></a>
                        <a href="/"><img src={telegram} alt="telegram" /></a>
                    </div>
                </div>
                <div className={s.footerLocation}>
                    <div className={s.footerLocationStreet}>
                        <span>Склад:</span>
                        <span>
                            <a href="https://goo.gl/maps/je6Thfut32U1v1zk8">Москва, ул. Салтыковская, 6 стр 11</a>
                        </span>
                        <span>
                            <Link to="mail:zakaz@ggpromarket.ru">zakaz@ggpromarket.ru</Link>
                        </span>
                    </div>
                    <div className={s.footerLocationYandex}>
                        <a href="/"><img src={yandex} alt="yandex" /></a>
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