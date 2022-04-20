import s from "./ArticleSlide.module.sass";

interface IArticleSlideProps {
    index: number;
    image: string;
    articleHeader: string;
}

const ArticleSlide = ({ index, image, articleHeader }: IArticleSlideProps) => {
    return (
        <article className={s.itemArticle} key={index}>
            <img src={image} alt="header-image(" />
            <div className={s.itemArticleHeader}>
                <span>{articleHeader}</span>
            </div>
        </article>
    )
}

export default ArticleSlide;