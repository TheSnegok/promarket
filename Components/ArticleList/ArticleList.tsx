import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import s from "../../Styles/components/ArticleList.module.sass";
import { IArticle } from "../Context/Context";
import { articleText } from "../../pages/api/api";

interface IArticleList {
    image: StaticImageData;
    header: string;
    setArticle: (c: IArticle) => void;
}

const ArticleList = ({ image, header, setArticle }: IArticleList) => {

    const pushArticle = () => {
        setArticle({ articleHeader: header, articleText: articleText[articleText.findIndex(element => element.header === header)].text });
    }

    return (
        <Link href="/article">
            <a onClick={pushArticle} className={s.item}>
                <div className={s.itemImg}>
                    <Image src={image} alt={header} layout="fill" />
                </div>
                <h4 className={s.itemHeader}>
                    {header}
                </h4>
            </a>
        </Link>
    )
}

export default ArticleList;