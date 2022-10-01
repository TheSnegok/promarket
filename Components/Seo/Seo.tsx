import { FC } from "react";
import s from './Seo.module.sass';
import seoImg from '../../public/seoBlock.png';
import Image from "next/image";

const Seo: FC = () => {
    return (
        <section className={s.seo}>
            <div className={s.seoBlock}>
                <h2 className={s.seoBlockHeader}>Блок SEO-текста про магазин</h2>
                <span className={s.seoBlockText}>GG Promarket — крупный ритейлер сантехнического оборудования, плитки <br />
                    и аксессуаров. Мы нацелены на то, чтобы сделать процесс выбора <br />
                    и покупки сантехники максимально простым и интуитивно понятным. <br />
                    При создании и обновлении сайта santehnika-online.ru мы продумали <br />
                    логичную структуру каталога, организовали систему поиска, снабдили <br />
                    карточки товаров подробными описаниями и характеристиками. <br />
                    <br />
                    Выбирать оборудование в нашем магазине легко даже тем, кто впервые<br />
                    имеет дело с сантехникой. А уточнить детали и получить информацию<br />
                    о совместимости товаров круглосуточно помогут опытные консультанты<br />
                    нашего контакт-центра. С нами вы полюбите выбирать!</span>
            </div>
            <div className={s.seoImage}>
                <Image src={seoImg} alt="seo img" />
            </div>
        </section>
    )
}

export default Seo;