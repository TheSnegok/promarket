import { useGlobalContext } from "../Context/Context";
import s from "../../Styles/components/ModalLayout.module.sass";

export const ModalLayout = ({ children }) => {

	const { modal } = useGlobalContext();

	return (
		<>
			{
				modal.item !== null && (
					<section className={modal.visible ? s.modal : s.modalHidden}>
						<div className={s.modalBlock}>
							{children}
						</div>
					</section>
				)
			}
		</>
	)
}