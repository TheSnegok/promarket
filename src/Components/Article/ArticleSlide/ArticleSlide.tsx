import s from "./ArticleSlide.module.sass";

interface IArticleSlideProps {
    index: number;
    image: string;
    articleHeader: string;
}

const ArticleSlide = ({ index, image, articleHeader }: IArticleSlideProps) => {
    return (
        <article className={s.itemArticle} key={index}>
            <a href="/">
                <img src={image} alt={articleHeader} />
                <div className={s.itemArticleHeader}>
                    <span>{articleHeader}</span>
                </div>
            </a>
        </article>
    )
}

export default ArticleSlide;