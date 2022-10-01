import s from './Slide.module.sass';

interface IProps {
    headerText: string;
    subHeaderText: string;
    buttonText: string;
}

const Slide = ({ headerText, subHeaderText, buttonText }: IProps) => {
    return (
        <div className={s.slidesItem}>
            <div className={s.slidesHeader}>
                {headerText}
            </div>
            <div className={s.slidesSubheader}>
                {subHeaderText}
            </div>
            <button className={s.slidesButton}>
                {buttonText}
            </button>
        </div>
    )
}

export default Slide;