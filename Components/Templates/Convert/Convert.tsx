import Image from "next/image";
import Link from "next/link";
import { IBrand } from "~/../pages/api/api";
import s from "../../../Styles/components/Convert.module.sass";

export const Convert = ({ brand }: { brand: IBrand }) => {
    return (
        <div className={s.convert}>
            <div className={s.convertImg}>
                <Link href={brand.url}>
                    <a>
                        <Image src={brand.img} alt={brand.name} layout="responsive" />
                    </a>
                </Link>
            </div>
            <div className={s.convertInfo}>
                <div className={s.convertInfoHeader}>
                    <h3>{brand.name}</h3>
                </div>
                <div className={s.convertInfoDescription}>
                    <span>{brand.description}</span>
                </div>
            </div>
        </div>
    )
}