import Image, { StaticImageData } from "next/image";
import s from "../../Styles/components/ArticleList.module.sass";

interface IArticleList {
    image: StaticImageData;
    header: string;
}

const ArticleList = ({ image, header }: IArticleList) => {
    return (
        <div className={s.item}>
            <div className={s.itemImg}>
                <Image src={image} alt={header} layout="fill" />
            </div>
            <h4 className={s.itemHeader}>
                {header}
            </h4>
        </div>
    )
}

export default ArticleList;