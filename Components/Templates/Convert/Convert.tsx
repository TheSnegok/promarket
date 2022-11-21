import Image from "next/image";
import { IBrand } from "~/../pages/api/api";
import s from "../../../Styles/components/Convert.module.sass";

export const Convert = ({ brand }: { brand: IBrand }) => {
    return (
        <div className={s.convert}>
            <div className={s.convertImg}>
                <div className={s.convertImgWrapper}>
                    <Image src={brand.img} />
                </div>
            </div>
            <div className={s.convertHeader}>
                <h3>{brand.name}</h3>            
            </div>
            <div className={s.convertDescription}>
                <span>{brand.description}</span>
            </div>
        </div>
    )
}