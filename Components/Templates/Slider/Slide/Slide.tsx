import s from '../../../../Styles/components/Slide.module.sass';

interface IProps {
    headerText: string;
    subHeaderText: string;
    buttonText: string;
    slideWidth: number;
}

const Slide = ({ headerText, subHeaderText, buttonText, slideWidth }: IProps) => {
    return (
        <div className={s.slidesItem} style={{ width: slideWidth }}>
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