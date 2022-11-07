import { FC } from "react";
import s from "../../../Styles/components/TypicalPage.module.sass";

interface ITypicalPage {
    header?: string;
};

const TypicalPage: FC<ITypicalPage> = ({ header, children }) => {
    return (
        <section className={s.page}>
            {header && <h2 className={s.pageHeader}>
                {header}
            </h2>}
            {children}
        </section>
    )
}

export default TypicalPage;