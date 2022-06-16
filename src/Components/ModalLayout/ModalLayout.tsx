import { useEffect } from "react";
import { useGlobalContext } from "../Context/Context";
import s from "./ModalLayout.module.sass";

export const ModalLayout = () => {

    const { modal, setModal } = useGlobalContext();

    useEffect(() => {
        modal ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset"; 
    }, [modal]);

    return (
        <section className={modal ? s.modal : s.modalHidden}>
            <div onClick={() => setModal(false)}>close</div>
        </section>
    )
}