import { useEffect } from "react";
import { useGlobalContext } from "../Context/Context";
import { ItemStars } from "../Templates/ItemStars/ItemStars";
import s from "./ModalLayout.module.sass";
import chat from "../../Image/hits/messageLogo.svg";
import { AddsClassForTags } from "../Templates/AddedClassForTag/AddsClassForTags";

export const ModalLayout = () => {

	const { modal, setModal } = useGlobalContext();

	useEffect(() => {
		modal.visible ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset";
	}, [modal]);

	return (
		<section className={modal.visible ? s.modal : s.modalHidden}>
			<div className={s.modalBlock}>
				<div className={s.modalBlockHeader}>
					<div className={s.modalBlockHeaderName}>
						{modal.item?.description}
						{modal.item?.type.map(tag => AddsClassForTags(tag))}
					</div>
					<div className={s.modalBlockHeaderClose} onClick={() => setModal({
						visible: false,
						item: null
					})}>Close</div>
				</div>
				<div className={s.modalBlockInfo}>
					<div className={s.modalBlockHeaderImage}>
						<img src={modal.item?.imgUrl} alt="product-preview-ploto" />
					</div>
					<div className={s.modalBlockInfoOptions}>
						<div className={s.modalBlockInfoOptionsReviews}>
							{modal.item && <ItemStars stars={modal.item.stars} />}
							<div className={s.modalBlockInfoOptionsReviewsMessage}>
								<img src={chat} alt="chat" />
								<span className={s.messageCount}>{modal.item?.review}</span>
							</div>
						</div>

					</div>
				</div>
			</div>
		</section>
	)
}