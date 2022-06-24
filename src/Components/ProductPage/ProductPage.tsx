import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { useGlobalContext } from "../Context/Context"
import { ItemStars } from "../Templates/ItemStars/ItemStars";
import s from "./ProductPage.module.sass"
import chat from "../../Image/hits/messageLogo.svg"
import { AddsClassForTags } from "../Templates/AddedClassForTag/AddsClassForTags";
import SliderItem from "../Templates/SliderItem/SliderItem";
import { PriceDivision } from "../Templates/PriceDivision/PriceDivision";

export const ProductPage = () => {

	const { product, contextFindItem, contextRemoveItem, contextPushItem, data } = useGlobalContext();

	const [like, setLike] = useState<boolean | null>(null);
	const [buy, setBuy] = useState<boolean | null>(null);

	const clickSetIn = (itemName: string) => {
		if (itemName === 'likes') {
			if (like) {
				setLike(false);
				contextRemoveItem('likes', product!.personalKey);
			} else {
				setLike(true);
				contextPushItem('likes', product!);
			}
		} else if (itemName === 'basket') {
			if (buy) {
				setBuy(false);
				contextRemoveItem('basket', product!.personalKey);
			} else {
				setBuy(true);
				contextPushItem('basket', product!);
			}
		}
	};

	useEffect(() => {
		if (product !== null) {
			setLike(contextFindItem('likes', product!.personalKey) ? false : true);
			setBuy(contextFindItem('basket', product!.personalKey) ? false : true);
		}
	}, [contextFindItem, product]);

	return (
		<>
			{product === null ? <Navigate to="/" /> : (
				<section className={s.product}>
					<div className={s.productHeader}>
						<div className={s.productHeaderText}>
							<h1>{product!.description}</h1>
						</div>
						<div className={s.productHeaderTypes}>
							{product!.type.map(element => AddsClassForTags(element))}
						</div>
					</div>
					<div className={s.productInfo}>
						<div className={s.productInfoImg}>
							<img src={product!.imgUrl} alt={product!.description} />
							<div className={s.productInfoImgOther}>
								<img src={product!.imgUrl} alt={product!.description} />
								<img src={product!.imgUrl} alt={product!.description} />
								<img src={product!.imgUrl} alt={product!.description} />
								<img src={product!.imgUrl} alt={product!.description} />
								<img src={product!.imgUrl} alt={product!.description} />
							</div>
						</div>
						<div className={s.productInfoMain}>
							<div className={s.productInfoMainFullname}>
								<h3>{product!.description}</h3>
							</div>
							<div className={s.productInfoMainReviews}>
								<div className={s.productInfoMainReviewsStars}>
									<ItemStars stars={product!.stars} />
								</div>
								<div className={s.productInfoMainReviewsCount}>
									<img src={chat} alt="chat" />
								</div>
							</div>
							<div className={s.productInfoMainCountry}>
								<span>{product.country}</span>
							</div>
							<div className={s.productInfoMainPrice}>
								<PriceDivision price={product.price} />
							</div>
							<div className={s.productInfoMainAdd}>
								<button className={buy ? s.productInfoMainAddBuyActive : s.productInfoMainAddBuy} onClick={() => clickSetIn('basket')}>{buy ? 'В корзине' : 'В корзину'}</button>
								<button className={like ? s.productInfoMainAddLikeActive : s.productInfoMainAddLike} onClick={() => clickSetIn('likes')}>{like ? 'Не нравится' : 'Нравится'}</button>
							</div>
						</div>
					</div>
					<div className={s.productCharacteristic}>
						<div className={s.productCharacteristicVideo}>
							<div className={s.productCharacteristicVideoHeader}>
								<h3>Видеообзор</h3>
							</div>
							<div className={s.productCharacteristicVideoPlayer}>
								<iframe width="90%" height="90%" src="https://www.youtube.com/embed/KOqs4WUhgVk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
							</div>
						</div>
						<div className={s.productCharacteristicReviews}>
							<div className={s.productCharacteristicReviewsHeader}>
								<h3>Отзывы</h3>
							</div>
							<div className={s.productCharacteristicReviewsList}>
								<div className={s.productCharacteristicReviewsListItem}>
									<span>Vasya Pupkin</span>
									<span>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, magni ea debitis sapiente blanditiis maiores non ipsum itaque illum fugit, quo assumenda quia? Molestias incidunt, assumenda corporis ratione itaque voluptatem?
									</span>
								</div>
								<div className={s.productCharacteristicReviewsListItem}>
									<span>Vasya Pupkin</span>
									<span>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, magni ea debitis sapiente blanditiis maiores non ipsum itaque illum fugit, quo assumenda quia? Molestias incidunt, assumenda corporis ratione itaque voluptatem?
									</span>
								</div>
								<div className={s.productCharacteristicReviewsListItem}>
									<span>Vasya Pupkin</span>
									<span>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, magni ea debitis sapiente blanditiis maiores non ipsum itaque illum fugit, quo assumenda quia? Molestias incidunt, assumenda corporis ratione itaque voluptatem?
									</span>
								</div>
								<div className={s.productCharacteristicReviewsListItem}>
									<span>Vasya Pupkin</span>
									<span>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, magni ea debitis sapiente blanditiis maiores non ipsum itaque illum fugit, quo assumenda quia? Molestias incidunt, assumenda corporis ratione itaque voluptatem?
									</span>
								</div>
								<div className={s.productCharacteristicReviewsListItem}>
									<span>Vasya Pupkin</span>
									<span>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, magni ea debitis sapiente blanditiis maiores non ipsum itaque illum fugit, quo assumenda quia? Molestias incidunt, assumenda corporis ratione itaque voluptatem?
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className={s.productSimilars}>
						{data.hits.slideItems!.filter(item => item.price[0] < product!.price[0] + 5000 && item.price[0] > product!.price[0] - 1000 && item.personalKey !== product!.personalKey).map((item, index) => <SliderItem key={index} tags={item.tags} itemImg={item.imgSrc} itemStars={item.stars} message={item.reviews} itemDesc={item.description} itemCountry={item.country} price={item.price} personalKey={item.personalKey} />)}
					</div>
				</section>
			)}
		</>
	)
}