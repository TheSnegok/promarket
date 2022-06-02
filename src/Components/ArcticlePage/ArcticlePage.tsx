import { Navigate } from "react-router";
import { useGlobalContext } from "../Context/Context";
import s from "./ArcticleItem.module.sass";

export const ArcticlePage = () => {

    const { article } = useGlobalContext();

    return (
        <>
            {article === null ? <Navigate to="/" replace={true} /> : (
                <section className={s.article}>
                    <h1 className={s.articleHeader}>{article?.articleHeader}</h1>
                    <span>{article?.articleText}</span>
                </section>
            )}
        </>
    )
}