import { useEffect, useState } from "react";
import { useGlobalContext } from "../Context/Context";
import s from "../../Styles/components/ModalLayout.module.sass";

export const ModalLayout = ({ data }, { data: IDataTemplate }) => {

	const { modal, setModal, contextRemoveItem, contextPushItem, contextFindItem } = useGlobalContext();

	const [like, setLike] = useState<boolean>(false);
	const [buy, setBuy] = useState<boolean>(false);

	useEffect(() => {
		if (modal.visible) {
			document.body.style.overflow = "hidden";
			setLike(contextFindItem("likes", modal.item!.personalKey) ? false : true);
			setBuy(contextFindItem("basket", modal.item!.personalKey) ? false : true);
		} else {
			document.body.style.overflow = "unset";
		}
	}, [modal]);//eslint-disable-line

	

	return (
		<>
			{
				modal.item !== null && (<section className={modal.visible ? s.modal : s.modalHidden}>
					<div className={s.modalBlock}>
						<GoodCard />
					</div>
				</section>)
			}
		</>
	)
}