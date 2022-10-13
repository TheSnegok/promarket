import { useGlobalContext } from "../../Components/Context/Context";
import s from "../../Styles/pages/ArcticlePage.module.sass";

const ArcticlePage = () => {

    const { article } = useGlobalContext();

    return (
        <>
            <section className={s.article}>
                <h1 className={s.articleHeader}>{article?.articleHeader}</h1>
                <span>{article?.articleText}</span>
            </section>
        </>
    )
}

export default ArcticlePage;