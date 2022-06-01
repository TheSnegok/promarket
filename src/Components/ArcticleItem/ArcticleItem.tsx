import { useGlobalContext } from "../Context/Context";
import s from "./ArcticleItem.module.sass";

export const ArcticleItem = () => {

    const { article } = useGlobalContext();

    return (
        <section className={s.article}>
            <h1 className={s.articleHeader}>{article?.articleHeader}</h1>
            <span>{article?.articleText}</span>
        </section>
    )
}