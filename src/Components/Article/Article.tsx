import { FC, useState } from "react";
import s from './Article.module.sass';
import article1 from '../../Image/article/image 12.png'
import article2 from '../../Image/article/image 13.png'
import article3 from '../../Image/article/image 14.png'
import article4 from '../../Image/article/image 15.png'
import ArticleSlide from "./ArticleSlide/ArticleSlide";

const articleList: string[][] = [
    [
        article1, "Актуальные и необычные аксессуары для ванной комнаты"
    ],
    [
        article2, "Какой температуры должна быть горячая вода?"
    ],
    [
        article3, "Конденсат на бачке унитаза: причины появления и способы устранения"
    ],
    [
        article4, "Анаэробный герметик для резьбовых соединений"
    ],
    [
        article1, "Актуальные и необычные аксессуары для ванной комнаты"
    ],
    [
        article2, "Какой температуры должна быть горячая вода?"
    ],
    [
        article3, "Конденсат на бачке унитаза: причины появления и способы устранения"
    ],
    [
        article4, "Анаэробный герметик для резьбовых соединений"
    ],
];

const Article: FC = () => {

    const [position, setPosition] = useState<number>(0);

    return (
        <section className={s.article}>
            <h1 className={s.articleHeader}>Статьи</h1>
            <div className={s.articleWrapper}>
                <div className={s.articleWrapperSlider}>
                    <div className={s.articleWrapperSliderItem} style={{left: position + "px"}}>                   
                        {articleList.map((item, index) => (
                            <ArticleSlide index={index} image={item[0]} articleHeader={item[1]} />
                        ))}
                    </div>
                </div>
                <div className={s.arrowRight} onClick={() => setPosition(position => position - 390)}></div>
                <div className={s.arrowLeft} onClick={() => setPosition(position => position + 390)}></div>
            </div>
        </section>
    )
}

export default Article;