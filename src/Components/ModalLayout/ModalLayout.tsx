import { useEffect } from "react";
import { useGlobalContext } from "../Context/Context";
import s from "./ModalLayout.module.sass";

export const ModalLayout = () => {

    const { modal, setModal } = useGlobalContext();

    useEffect(() => {
        modal.visible ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset";
    }, [modal]);

    return (
        <section className={modal.visible ? s.modal : s.modalHidden}>
            <div className={s.modalBlock} onClick={() => setModal({
                visible: false,
                item: null
            })}>close</div>
        </section>
    )
}