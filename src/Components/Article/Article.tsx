import { FC, useState } from "react";
import { useGlobalContext } from "../Context/Context";
import s from './Article.module.sass';
import ArticleSlide from "./ArticleSlide/ArticleSlide";

const Article: FC = () => {

    const { data, setArticle } = useGlobalContext();

    const [position, setPosition] = useState<number>(0);

    return (
        <section className={s.article}>
            <h1 className={s.articleHeader}>Статьи</h1>
            <div className={s.articleWrapper}>
                <div className={s.articleWrapperSlider}>
                    <div className={s.articleWrapperSliderItem} style={{ left: position + "px" }}>
                        {data.articleList && data.articleList.map((item, index) => (
                            <ArticleSlide key={index} image={item[0]} articleHeader={item[1]} setArticle={setArticle} />
                        ))}
                    </div>
                </div>
                <div className={s.arrowRight} onClick={() => (data.articleList.length * -390) + (window.innerWidth < 800 ? 0 : window.innerWidth < 1350 ? 780 : window.innerWidth < 1600 ? 1170 : 1560) === position ? null : setPosition(position => position - 390)}></div>
                <div className={s.arrowLeft} onClick={() => position === 0 ? null : setPosition(position => position + 390)}></div>
            </div>
        </section>
    )
}

export default Article;