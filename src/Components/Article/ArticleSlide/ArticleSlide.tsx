import s from "./ArticleSlide.module.sass";

interface IArticleSlideProps {
    image: string;
    articleHeader: string;
}

const ArticleSlide = ({ image, articleHeader }: IArticleSlideProps) => {
    return (
        <article className={s.itemArticle} key={articleHeader + `${Math.floor(Math.random() * 100)}`}>
            <img src={image} alt={articleHeader} />
            <a href="/">
                <div className={s.itemArticleHeader}>
                    <span>{articleHeader}</span>
                </div>
            </a>
        </article>
    )
}

export default ArticleSlide;