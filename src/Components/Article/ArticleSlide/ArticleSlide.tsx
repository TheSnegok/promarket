import { Link } from "react-router-dom";
import s from "./ArticleSlide.module.sass";

interface IArticleSlideProps {
    image: string;
    articleHeader: string;
}

const ArticleSlide = ({ image, articleHeader }: IArticleSlideProps) => {
    return (
        <article className={s.itemArticle} key={articleHeader + `${Math.floor(Math.random() * 100)}`}>
            <img src={image} alt={articleHeader} />
            <Link to="/">
                <div className={s.itemArticleHeader}>
                    <span>{articleHeader}</span>
                </div>
            </Link>
        </article>
    )
}

export default ArticleSlide;