import s from "./ArcticleItem.module.sass";

export const ArcticleItem = ({ article }: {article: string}) => {
    return (
        <section className={s.article}>
            <h1 className={s.articleHeader}>{article}</h1>
        </section>
    )
}