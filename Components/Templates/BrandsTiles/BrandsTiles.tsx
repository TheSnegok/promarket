import Image from "next/image";
import Link from "next/link";
import { IBrand } from "~/../pages/api/api";
import s from "../../../Styles/components/BrandsTiles.module.sass";

export const BrandsTiles = ({ brands }: { brands: IBrand[] }) => {
    return (
        <div className={s.brandsWrapper}>
            {brands.map((item, index) => (
                <div className={s.brandsLogo} key={index}>
                    <Link href={item.url}>
                        <a>
                            <div className={s.brandsLogoImg}>
                                <Image src={item.img} alt={`${index}`} layout='responsive' />
                            </div>
                        </a>
                    </Link>
                </div>
            ))}
        </div>
    )
}