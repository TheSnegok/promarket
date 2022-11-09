import Image from "next/image";
import { useGlobalContext } from "~/../Components/Context/Context";
import Instructions from "~/../Components/Templates/Instruction/Instruction";
import TypicalPage from "~/../Components/Templates/TypicalPage/TypicalPage";
import s from "../../Styles/pages/Providers.module.sass";
import sharing from "../../public/sharing.svg";

const Providers = () => {

    const { data } = useGlobalContext();

    return (
        <TypicalPage header="Поставщикам">
            <div className={s.providersInfo}>
                <h4 className={s.providersInfoHeader}>Как стать нашим поставщиком?</h4>
                <div className={s.providersInfoBox}>
                    <div className={s.providersInfoBoxImg}>
                        <Image src={sharing} alt="sharing" layout="fill" />
                    </div>
                </div>
                <div className={s.providersInfoWrapper}>
                    {data.providers.map((item, index) => <Instructions key={index} number={index + 1} header={item.header} text={item.text} linkText={item.link.text} linkHref={item.link.href} />)}
                </div>
            </div>
        </TypicalPage>
    )
}

export default Providers;