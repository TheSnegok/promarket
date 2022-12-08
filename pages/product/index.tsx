import { useEffect, useState } from "react";
import { useGlobalContext } from "../../Components/Context/Context"
import { ItemStars } from "../../Components/Templates/ItemStars/ItemStars";
import s from "../../Styles/pages/Product.module.sass"
import chat from "../../public/hits/messageLogo.svg"
import { AddsClassForTags } from "../../Components/Templates/AddedClassForTag/AddsClassForTags";
import SliderItem from "../../Components/Templates/SliderItem/SliderItem";
import { PriceDivision } from "../../Components/Templates/PriceDivision/PriceDivision";
import { useRouter } from "next/router";
import Image from "next/image";
import TypicalPage from "~/../Components/Templates/TypicalPage/TypicalPage";

const Product = () => {

	const router = useRouter();

	const { product, contextFindItem, contextRemoveItem, contextPushItem, data } = useGlobalContext();

	useEffect(() => {
		if (product === null) {
			router.push("/");
		}
	}, [product])


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
			{product !== null && (
				<TypicalPage header={product.description}>
					<div className={s.productInfo}>
						<div className={s.productInfoImg}>
							<div className={s.productInfoImgMain}>
								<Image src={product.imgSrc} alt={product.description} layout='fill' />
							</div>

							<div className={s.productInfoImgOther}>
								<Image src={product.imgSrc} alt={product!.description} />
								<Image src={product.imgSrc} alt={product!.description} />
								<Image src={product.imgSrc} alt={product!.description} />
								<Image src={product.imgSrc} alt={product!.description} />
								<Image src={product.imgSrc} alt={product!.description} />
							</div>
						</div>
						<div className={s.productInfoMain}>
							<div className={s.productInfoMainFullname}>
								<h3>{product!.description}</h3>
								<div className={s.productInfoMainFullnameTypes}>
									{product!.tags.map(element => AddsClassForTags(element))}
								</div>
							</div>
							<div className={s.productInfoMainReviews}>
								<div className={s.productInfoMainReviewsStars}>
									<ItemStars stars={product!.stars} />
								</div>
								<div className={s.productInfoMainReviewsCount}>
									<Image src={chat} alt="chat" />
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
					{
						data.hits.slideItems!.filter(item => item.price[0] < product!.price[0] + 5000 && item.price[0] > product!.price[0] - 1000 && item.personalKey !== product!.personalKey).length !== 0 && (
							<div className={s.productSimilars}>
								{
									data.hits.slideItems!.filter(item => item.price[0] < product!.price[0] + 5000 && item.price[0] > product!.price[0] - 1000 && item.personalKey !== product!.personalKey).map((item, index) => <SliderItem key={index} item={item} />)
								}
							</div>
						)
					}
				</TypicalPage>
			)}
		</>
	)
}

export default Product;