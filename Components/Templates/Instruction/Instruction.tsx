import Link from "next/link";
import s from "../../../Styles/components/Instructions.module.sass";

interface IInstructions {
    number: number;
    header: string;
    text: string;
    linkText: string;
    linkHref: string;
}

const Instructions = ({number, header, text, linkText, linkHref}: IInstructions) => {
    return (
        <div className={s.instructions}>
            <h2 className={s.instructionsNumber}>
                {number}
            </h2>
            <h4 className={s.instructionsHeader}>
                {header}
            </h4>
            <p className={s.instructionsText}>
                {text}
            </p>
            <Link href={linkHref}>
                <a className={s.instructionsLink}>
                    <span className={s.instructionsLinkText}>
                        {linkText}
                    </span>
                </a>
            </Link>
        </div>
    )
}

export default Instructions;
