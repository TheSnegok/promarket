import { useGlobalContext } from "~/../Components/Context/Context";
import Instructions from "~/../Components/Templates/Instruction/Instruction";
import s from "../../Styles/pages/Providers.module.sass";

const Providers = () => {

    const { data } = useGlobalContext(); 

    return (
        <section className={s.providers}>
            <h2 className={s.providersHeader}>Поставщикам</h2>
            <div className={s.providersInfo}>
                <h4 className={s.providersInfoHeader}>Как стать нашим поставщиком?</h4>
                <div className={s.providersInfoWrapper}>
                    {data.providers.map((item, index) => <Instructions key={index} number={index + 1} header={item.header} text={item.text} linkText={item.link.text} linkHref={item.link.href} />)}
                </div>
            </div>
        </section>
    )
}

export default Providers;