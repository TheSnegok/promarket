import { Link } from "react-router-dom";
import { articleText } from "../../../api/api";
import { IArticle } from "../../Context/Context";
import s from "./ArticleSlide.module.sass";

interface IArticleSlideProps {
    image: string;
    articleHeader: string;
    setArticle: (c: IArticle) => void;
    indexText: number;
}

const ArticleSlide = ({ image, articleHeader, setArticle, indexText }: IArticleSlideProps) => {
    
    const pushArticle = () => {
        setArticle({ articleHeader: articleHeader, articleText: articleText[indexText].text });
    }

    return (
        <article className={s.itemArticle} >
            <img src={image} alt={articleHeader} />
            <Link to="/article" onClick={pushArticle}>
                <div className={s.itemArticleHeader}>
                    <span>{articleHeader}</span>
                </div>
            </Link>
        </article>
    )
}

export default ArticleSlide;