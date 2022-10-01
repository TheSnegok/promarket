import { FC, FormEvent, useEffect, useState } from "react";
import s from "./Menu.module.sass";
import loop from '../../public/search.svg';
import cabinet from '../../public/Group.svg';
import desire from '../../public/heart.svg';
import shoppingCart from '../../public/Cart.svg';
import { IDataTemplate, useGlobalContext } from "../Context/Context";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Likes from "~/../pages/LikesPage/Likes";

const Menu: FC = () => {

	const { data, setProduct, likes, basket, findInput, setFindInput } = useGlobalContext();
	const [info, setInfo] = useState<number>(0);

	let router = useRouter();

	const checkMatch = (e: FormEvent<HTMLInputElement>) => {
		setFindInput({
			text: e.currentTarget.value,
			matchFound: findInput.matchFound,
			minPrice: findInput.minPrice,
			maxPrice: findInput.maxPrice,
			maxYear: findInput.maxYear,
			minYear: findInput.minYear,
			sort: findInput.sort
		});
	}

	const selectedItem = (item: IDataTemplate) => {
		setProduct(item);
		setFindInput({
			text: '',
			matchFound: [],
			minPrice: findInput.minPrice,
			maxPrice: findInput.maxPrice,
			maxYear: findInput.maxYear,
			minYear: findInput.minYear,
			sort: findInput.sort
		})
		router.push('/product');
	};

	useEffect(() => {
		if (findInput.text !== '') {
			const hitMatch = data.hits.slideItems.filter(item => item.description.includes(findInput.text) === true);
			const stockMatch = data.stock.slideItems.filter(item => item.description.includes(findInput.text) === true);
			setFindInput({
				text: findInput.text,
				matchFound: hitMatch.concat(stockMatch),
				minPrice: findInput.minPrice,
				maxPrice: findInput.maxPrice,
				maxYear: findInput.maxYear,
				minYear: findInput.minYear,
				sort: findInput.sort
			});
		} else {
			setFindInput({
				text: '',
				matchFound: [],
				minPrice: findInput.minPrice,
				maxPrice: findInput.maxPrice,
				maxYear: findInput.maxYear,
				minYear: findInput.minYear,
				sort: findInput.sort
			});
		}//eslint-disable-next-line
	}, [findInput.text]);

	return (
		<menu className={s.menu}>
			<div className={s.menuItems}>
				<div className={s.catalog}>
					<div className={s.burger}>
						<div className={s.line1}></div>
						<div className={s.line2}></div>
						<div className={s.line3}></div>
					</div>
					<div className={s.catalogText}>
						<span className={s.catalogTextHeader}>каталог товаров</span>
						<div className={s.border}></div>
						<div className={s.hover}>
							<div className={s.hoverSections}>
								{data.menu.map((item, index) => (
									<div key={item.description} className={info === index ? s.wrapperSectionsActive : s.wrapperSections} onMouseEnter={() => setInfo(index)}>
										<Image src={item.src} alt={item.description} />
										<span>{item.text}</span>
									</div>
								))}
							</div>
							<div className={s.hoverInfo}>
								<div className={s.hoverInfoHeader}>
									<span>{data.menu[info].text}</span>
								</div>
								<div className={s.wrapper}>
									<>
										<div className={s.wrapperFirst}>
											{data.menu[info].list?.first.map(mas => (
												<div className={s.columnWrapper} key={mas[0].text}>
													<span className={s.columnWrapperHeader}>{mas[0].text}</span>
													{mas.map((item, index) => index > 0 && (
														<ul key={item.text}>
															<li>
																<Link href={item.url}>
																	<span>{item.text}</span>
																</Link>
															</li>
														</ul>
													))}
												</div>
											))}
										</div>
										<div className={s.wrapperSecond}>
											<ul>
												{data.menu[info].list?.second.map((item, index) => (
													<li key={index} >
														<Link href={item.url}>{item.text}</Link>
													</li>
												))}
											</ul>
										</div>
										<div className={s.wrapperThird}>
											<ul>
												{data.menu[info].list?.third.map((item, index) => (
													<li key={index}>
														<Link href={item.url}>{item.text}</Link>
													</li>
												))}
											</ul>
										</div>
									</>
									<div className={s.wrapperBanner}>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={s.catalogHover}></div>
				<Link href={"/"} className={s.stonks}>
					<div className={s.stonksText}>АКЦИИ</div>
				</Link>
				<Link href={"/"} className={s.brand}>
					<div className={s.brandText}>БРЕНДЫ</div>
				</Link>
			</div>
			<div className={s.menuSearcher}>
				<input type="text" className={s.input} placeholder='Что вы ищете?' value={findInput.text} onChange={(e) => checkMatch(e)} onKeyDown={(e) => (e.key === 'Enter' && findInput.text !== '' && location.pathname !== "/search") && router.push('/search')} />
				<div className={s.icon}>
					<Link href={findInput.text === '' ? '#' : '/search'}>
						<img src={loop} alt="search" className={s.loop} />
					</Link>
				</div>
				<div className={s.menuSearcherMatches}>
					{findInput.matchFound &&
						(findInput.matchFound.map((find, index) => (
							<div className={s.menuSearcherMatchesItem} key={index} onClick={() => selectedItem(find)}>
								{find.description}
							</div>
						)))
					}
				</div>
			</div>
			<div className={s.menuActions} >
				<div className={s.cabinet}>
					<Link href={"/profile"} >
						<img src={cabinet} alt="cabinet" className={s.cabinetImg} />
					</Link>
				</div>
				<div className={s.desired}>
					<Link href={"/likes"} >
						<>
							<img src={desire} alt="desired" className={s.desiredImg} />
							{likes.count === 0 ? null : <div className={s.desiredAlert}>{likes.count}</div>}
						</>
					</Link>
				</div>
				<div className={s.shopping}>
					<Link href={"/basket"} >
						<>
							<img src={shoppingCart} alt="shoppingCart" className={s.shoppingImg} />
							{basket.count === 0 ? null : <div className={s.shoppingAlert}>{basket.count}</div>}
						</>
					</Link>
				</div>
			</div >
			<div className={s.catalogHover}></div>
		</menu>
	)
}

export default Menu;
