import { Navigate } from "react-router";
import { useGlobalContext } from "../Context/Context"
import { ItemStars } from "../Templates/ItemStars/ItemStars";
import s from "./ProductPage.module.sass"
import chat from "../../Image/hits/messageLogo.svg"

export const ProductPage = () => {

	const { product } = useGlobalContext();

	return (
		<>
			{product === null ? <Navigate to="/" replace={true} />
				: (
					<section className={s.product}>
						<div className={s.productHeader}>
							<h1>{product.description}</h1>
						</div>
						<div className={s.productInfo}>
							<div className={s.productInfoImg}>
								<img src={product.imgUrl} alt={product.description} />
								<div className={s.productInfoImgOther}>
									<img src={product.imgUrl} alt={product.description} />
									<img src={product.imgUrl} alt={product.description} />
									<img src={product.imgUrl} alt={product.description} />
									<img src={product.imgUrl} alt={product.description} />
									<img src={product.imgUrl} alt={product.description} />
								</div>
							</div>
							<div className={s.productInfoMain}>
								<div className={s.productInfoMainFullname}>
									<h3>{product.description}</h3>
								</div>
								<div className={s.productInfoReviews}>
									<div className={s.productInfoReviewsStars}>
										<ItemStars stars={product.stars} />
									</div>
									<div className={s.productInfoReviewsCount}>
										<img src={chat} alt="chat" />
									</div>
								</div>
								{product.price[1] ? (
									<div className={s.productInfoMainPrice}>
										<div className={s.productInfoMainPricePrevious}><span>{product.price[1]}</span></div>
										<div className={s.productInfoMainPriceStock}><span>{product.price[0]}</span></div>
									</div>
								) : (
									<div className={s.productInfoMainPrice}>
										<div className={s.productInfoMainPriceDefault}><span>{product.price[0]}</span></div>
									</div>
								)}
							</div>
						</div>
						<div className={s.productCharacteristic}>
							<div className={s.productCharacteristicVideo}>
								<iframe width="60vw" height="20vh" src="https://www.youtube.com/embed/KOqs4WUhgVk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
							</div>
							<div className={s.productCharacteristicReviews}>
								/* product.reviews.slice(0, 5).map() */
								<div className={s.productCharacteristicReviewsItem}>
									<span>Vasya Pupkin</span>
									<span>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, magni ea debitis sapiente blanditiis maiores non ipsum itaque illum fugit, quo assumenda quia? Molestias incidunt, assumenda corporis ratione itaque voluptatem?
									</span>
								</div>
								<div className={s.productCharacteristicReviewsItem}>
									<span>Vasya Pupkin</span>
									<span>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, magni ea debitis sapiente blanditiis maiores non ipsum itaque illum fugit, quo assumenda quia? Molestias incidunt, assumenda corporis ratione itaque voluptatem?
									</span>
								</div>
								<div className={s.productCharacteristicReviewsItem}>
									<span>Vasya Pupkin</span>
									<span>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, magni ea debitis sapiente blanditiis maiores non ipsum itaque illum fugit, quo assumenda quia? Molestias incidunt, assumenda corporis ratione itaque voluptatem?
									</span>
								</div>
								<div className={s.productCharacteristicReviewsItem}>
									<span>Vasya Pupkin</span>
									<span>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, magni ea debitis sapiente blanditiis maiores non ipsum itaque illum fugit, quo assumenda quia? Molestias incidunt, assumenda corporis ratione itaque voluptatem?
									</span>
								</div>
								<div className={s.productCharacteristicReviewsItem}>
									<span>Vasya Pupkin</span>
									<span>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, magni ea debitis sapiente blanditiis maiores non ipsum itaque illum fugit, quo assumenda quia? Molestias incidunt, assumenda corporis ratione itaque voluptatem?
									</span>
								</div>
							</div>
						</div>
						<div className={s.productSimilars}>
							// same type, +-price, 
						</div>
					</section>
				)}
		</>
	)
}