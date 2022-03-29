import { FC } from "react";
import s from './Article.module.sass';
import article1 from '../../Image/article/image 12.png'
import article2 from '../../Image/article/image 13.png'
import article3 from '../../Image/article/image 14.png'
import article4 from '../../Image/article/image 15.png'

const Article: FC = () => {
    return (
        <section className={s.article}>
            <h1 className={s.articleHeader}>Статьи</h1>
            <div className={s.articleWrapper}>
                <article className={s.itemArticle}>
                    <img src={article1} alt="article img" />
                    <div className={s.itemArticleHeader}>
                        <span>Актуальные и необычные аксессуары для ванной комнаты</span>
                    </div>
                </article>
                <article className={s.itemArticle}>
                    <img src={article2} alt="article img" />
                    <div className={s.itemArticleHeader}>
                        <span>Какой температуры должна быть горячая вода?</span>
                    </div>
                </article>
                <article className={s.itemArticle}>
                    <img src={article3} alt="article img" />
                    <div className={s.itemArticleHeader}>
                        <span>Конденсат на бачке унитаза: причины появления и способы устранения</span>
                    </div>
                </article>
                <article className={s.itemArticle}>
                    <img src={article4} alt="article img" />
                    <div className={s.itemArticleHeader}>
                        <span>Анаэробный герметик для резьбовых соединений</span>
                    </div>
                </article>
                {/* <div className={s.wrapperArrowRight}></div>
					<div className={s.wrapperArrowLeft}></div> */}
            </div>
        </section>
    )
}

export default Article;