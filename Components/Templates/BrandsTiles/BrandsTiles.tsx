import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import s from "../../../Styles/components/BrandsTiles.module.sass";

export const BrandsTiles = ({ brands }: { brands: (StaticImageData | string)[][] }) => {
    return (
        <div className={s.brandsWrapper}>
            {brands.map((item, index) => (
                <div className={s.brandsLogo} key={index}>
                    <Link href={item[1].toString()}>
                        <a>
                            <div className={s.brandsLogoImg}>
                                <Image src={item[0]} alt={`${index}`} layout='responsive' />
                            </div>
                        </a>
                    </Link>
                </div>
            ))}
        </div>
    )
}