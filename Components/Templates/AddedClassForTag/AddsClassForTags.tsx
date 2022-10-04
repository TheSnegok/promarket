import s from '../../../Styles/components/AddsClassForTags.module.sass';

export const AddsClassForTags = (tag: string) => {
    switch (tag.toLowerCase()) {
        case "хит": return <div key={Math.floor(Math.random() * 100)} className={s.hot}>{tag}</div>;
        case "акция": return <div key={Math.floor(Math.random() * 100)} className={s.tagTip}>{tag}</div>;
        default: return null;
    }
}