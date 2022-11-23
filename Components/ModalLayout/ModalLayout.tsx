import { useEffect } from "react";
import { useGlobalContext } from "../Context/Context";
import s from "../../Styles/components/ModalLayout.module.sass";

export const ModalLayout = ({ children, name }) => {

	const { modal, setModal } = useGlobalContext();

	console.log(name);

	useEffect(() => {
		if (modal.visible) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
	}, [modal]);//eslint-disable-line

	return (
		<section className={modal.visible ? s.modal : s.modalHidden}>
			<div className={s.modalBlock}>
				<div className={s.modalBlockHeader}>
					<div className={s.modalBlockHeaderName}>
						<span>{name}</span>
					</div>
					<div className={s.modalBlockHeaderClose} onClick={() => setModal({
						visible: false
					})}>
						<div className={s.modalBlockHeaderCloseTop}></div>
						<div className={s.modalBlockHeaderCloseBottom}></div>
					</div>
				</div>
				{children}
			</div>
		</section>
	)
}