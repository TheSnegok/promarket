import { FC } from "react";
import s from './Footer.module.sass';
import logo from '../../Image/logo.svg';
import telegram from '../../Image/logo/telegram 1.svg'
import instagram from '../../Image/logo/instagram 2.svg'
import whatsApp from '../../Image/logo/whatsApp.svg'
import yandex from '../../Image/yandex.png'

const Footer:FC = () => {
    return (
        <>
            <footer className={s.footer}>
                <div className={s.footerSection}>
                    <div className={s.footerSectionList}>
                        <ul >
                            <a href="/"><li>Плитка</li></a>
                            <a href="/"><li>Сантехника</li></a>
                            <a href="/"><li>Мебель для ванной</li></a>
                            <a href="/"><li>Электроника и бытовая техника</li></a>
                            <a href="/"><li>Отопление</li></a>
                            <a href="/"><li>Напольное покрытие</li></a>
                        </ul>
                    </div>
                    <div className={s.footerSectionLogo}>
                        <img src={logo} alt="logo" />
                        <span>© 2020 <a href="/">ggpromarket.ru</a></span>
                    </div>
                </div>
                <div className={s.footerMenu}>
                    <div className={s.footerMenu}>
                        <ul>
                            <li>Оплата</li>
                            <li>Доставка</li>
                            <li>Поставщикам</li>
                            <li>Статьи</li>
                            <li>Контакты</li>
                        </ul>
                    </div>
                </div>
                <div className={s.footerContacts}>
                    <div className={s.footerContactsPhone}>8 495 018-32-10</div>
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
                        <span>Москва, ул. Салтыковская, 6 стр 11</span>
                        <span><a href="/">zakaz@ggpromarket.ru</a></span>
                    </div>
                    <div className={s.footerLocationYandex}>
                        <img src={yandex} alt="yandex" />
                    </div>
                </div>
            </footer>
            <section className={s.rules}>
                <span>Копирование всех составляющих частей сайта в какой бы то ни было форме без письменного разрешения владельцев авторских прав запрещено. Сайт носит исключительно информационный характер, и ни при каких условиях не является публичной офертой, определяемой положениями статьи 437(2) Гражданского кодекса Российской Федерации.Наличие и цены уточняйте у наших операторов.</span>
                <br /><br />
                <span>Сайт использует технологию cookie. Используя сайт, Вы соглашаетесь с <a href="/">правилами использования cookie</a>, а также даете <a href="/">согласие на обработку персональных данных</a></span>
            </section>
        </>
    )
}

export default Footer;