import Image from "next/image";
import { articleText } from "../../../pages/api/api";
import { IArticle } from "../../Context/Context";
import s from "./ArticleSlide.module.sass";

interface IArticleSlideProps {
    image: string;
    articleHeader: string;
    setArticle: (c: IArticle) => void;
}

const ArticleSlide = ({ image, articleHeader, setArticle }: IArticleSlideProps) => {
    
    const pushArticle = () => {
        setArticle({ articleHeader: articleHeader, articleText: articleText[articleText.findIndex(element => element.header === articleHeader)].text});
    }

    return (
        <article className={s.itemArticle} >
            <Image src={image} alt={articleHeader} />
            <a href="/article" onClick={pushArticle}>
                <div className={s.itemArticleHeader}>
                    <span>{articleHeader}</span>
                </div>
            </a>
        </article>
    )
}

export default ArticleSlide;