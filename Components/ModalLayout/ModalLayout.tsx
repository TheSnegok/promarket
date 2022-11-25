import s from "../../Styles/components/ModalLayout.module.sass";

export const ModalLayout = ({ children, setModal }) => {
	return (
		<section className={s.modal}>
			<div className={s.modalBlock}>
				<div className={s.modalBlockHeader}>
					<div className={s.modalBlockHeaderClose} onClick={() => setModal(false)}>
						<div className={s.modalBlockHeaderCloseTop}></div>
						<div className={s.modalBlockHeaderCloseBottom}></div>
					</div>
				</div>
				{children}
			</div>
		</section>
	)
}