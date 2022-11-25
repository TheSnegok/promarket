import s from "../../Styles/components/ModalLayout.module.sass";

export const ModalLayout = ({ children, setModal }) => {

	document.body.style.overflowY = "hidden";

	const hideModal = () => {
		setModal(false);
		document.body.style.overflowY = "unset";
	};

	return (
		<section className={s.modal}>
			<div className={s.modalBlock}>
				<div className={s.modalBlockHeader}>
					<div className={s.modalBlockHeaderClose} onClick={hideModal}>
						<div className={s.modalBlockHeaderCloseTop}></div>
						<div className={s.modalBlockHeaderCloseBottom}></div>
					</div>
				</div>
				{children}
			</div>
		</section>
	)
}