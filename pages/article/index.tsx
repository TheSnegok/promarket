import TypicalPage from "../../Components/Templates/TypicalPage/TypicalPage";
import { useGlobalContext } from "../../Components/Context/Context";
import s from "../../Styles/pages/ArcticlePage.module.sass";

const ArcticlePage = () => {

    const { article } = useGlobalContext();

    return (
        <TypicalPage header={article?.articleHeader}>
            <span>{article?.articleText}</span>
        </TypicalPage >
    )
}

export default ArcticlePage;