import { FC, FormEvent, useEffect, useState } from "react";
import s from "./Menu.module.sass";
import loop from '../../Image/search.svg';
import cabinet from '../../Image/Group.svg';
import desire from '../../Image/heart.svg';
import shoppingCart from '../../Image/Cart.svg';
import { IDataTemplate, useGlobalContext } from "../Context/Context";
import { Link, useNavigate } from "react-router-dom";

const Menu: FC = () => {

	const { data, setProduct, likes, basket, findInput, setFindInput } = useGlobalContext();
	const [info, setInfo] = useState<number>(0);
	let redirect = useNavigate();

	const checkMatch = (e: FormEvent<HTMLInputElement>) => {
		setFindInput({
			text: e.currentTarget.value,
			matchFound: findInput.matchFound,
			minValue: findInput.minValue,
			maxValue: findInput.maxValue
		});
	}

	const selectedItem = (item: IDataTemplate) => {
		setProduct(item);
		setFindInput({
			text: '',
			matchFound: [],
			minValue: findInput.minValue,
			maxValue: findInput.maxValue
		})
		redirect('/product');
	};

	useEffect(() => {
		if (findInput.text !== '') {
			const hitMatch = data.hits.slideItems.filter(item => item.description.includes(findInput.text) === true);
			const stockMatch = data.stock.slideItems.filter(item => item.description.includes(findInput.text) === true);
			setFindInput({
				text: findInput.text,
				matchFound: hitMatch.concat(stockMatch),
				minValue: findInput.minValue,
				maxValue: findInput.maxValue
			});
		} else {
			setFindInput({
				text: findInput.text,
				matchFound: [],
				minValue: findInput.minValue,
				maxValue: findInput.maxValue
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
								{data.menu.MenuListItems.map((item, index) => (
									<div key={item.description} className={info === index ? s.wrapperSectionsActive : s.wrapperSections} onMouseEnter={() => setInfo(index)}>
										<img src={item.src} alt={item.description} />
										<span>{item.text}</span>
									</div>
								))}
							</div>
							<div className={s.hoverInfo}>
								<div className={s.hoverInfoHeader}>
									<span>{data.menu.MenuListItems[info].text}</span>
								</div>
								<div className={s.wrapper}>
									{info === 1 ?
										(
											<>
												<div className={s.wrapperFirst}>
													{data.menu.MenuInfoItems.map(mas => (
														<div className={s.columnWrapper} key={mas[0].text}>
															<span className={s.columnWrapperHeader}>{mas[0].text}</span>
															<ul>
																<li>
																	<Link to={mas[1].url}>
																		<span>{mas[1].text}</span>
																	</Link>
																</li>
																<li>
																	<Link to={mas[2].url}>
																		<span>{mas[2].text}</span>
																	</Link>
																</li>
																<li>
																	<Link to={mas[2].url}>
																		<span>{mas[3].text}</span>
																	</Link>
																</li>
																<li>
																	<Link to={mas[2].url}>
																		<span>{mas[4].text}</span>
																	</Link>
																</li>
															</ul>
														</div>
													))}
												</div>
												<div className={s.wrapperSecond}>
													<ul>
														{data.menu.MenuInfoItemsSecond.map((item, index) => (
															<li key={index} >
																<Link to={item.url}>{item.text}</Link>
															</li>
														))}
													</ul>
												</div>
												<div className={s.wrapperThird}>
													<ul>
														{data.menu.MenuInfoItemsThird.map((item, index) => (
															<li key={index}>
																<Link to={item.url}>{item.text}</Link>
															</li>
														))}
													</ul>
												</div>

											</>
										) : (
											<div className={s.wrapperFirst}>
												Comming soon...
											</div>
										)
									}
									<div className={s.wrapperBanner}>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={s.catalogHover}></div>
				<Link to={"/"} className={s.stonks}>
					<div className={s.stonksText}>АКЦИИ</div>
				</Link>
				<Link to={"/"} className={s.brand}>
					<div className={s.brandText}>БРЕНДЫ</div>
				</Link>
			</div>
			<div className={s.menuSearcher}>
				<input type="text" className={s.input} placeholder='Что вы ищете?' value={findInput.text} onChange={(e) => checkMatch(e)} />
				<div className={s.icon}>
					<Link to={findInput.text === '' ? '#' : '/search'}>
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
					<Link to={"/profile"} >
						<img src={cabinet} alt="cabinet" className={s.cabinetImg} />
					</Link>
				</div>
				<div className={s.desired}>
					<Link to={"/likes"} >
						<img src={desire} alt="desired" className={s.desiredImg} />
						{likes.count === 0 ? null : <div className={s.desiredAlert}>{likes.count}</div>}
					</Link>
				</div>
				<div className={s.shopping}>
					<Link to={"/basket"} >
						<img src={shoppingCart} alt="shoppingCart" className={s.shoppingImg} />
						{basket.count === 0 ? null : <div className={s.shoppingAlert}>{basket.count}</div>}
					</Link>
				</div>
			</div >
			<div className={s.catalogHover}></div>
		</menu>
	)
}

export default Menu;
