import Image from "next/image";
import { useRouter } from "next/router";
import { useGlobalContext, IDataTemplate } from "../../Context/Context";
import { PriceDivision } from "../PriceDivision/PriceDivision";
import s from "../../../Styles/components/GoodsTile.module.sass";

export const GoodsTile = ({ index, find }: { index: number, find: IDataTemplate }) => {

	const { findInput, setProduct, setFindInput } = useGlobalContext();

	let router = useRouter();

	const selectedItem = (item: IDataTemplate) => {
		setProduct(item);
		setFindInput({
			text: '',
			matchFound: [],
			minPrice: findInput.minPrice,
			maxPrice: findInput.maxPrice,
			minYear: findInput.minYear,
			maxYear: findInput.maxYear,
			sort: findInput.sort
		})
		router.push('/product');
	};

	return (
		<div
			className={s.Item}
			key={index}
			onClick={() => selectedItem(find)}
		>
			<div className={s.ItemImg}>
				<Image
					src={find.imgSrc}
					alt={find.personalKey}
					width="90%"
					height="100px"
				/>
			</div>
			<div className={s.ItemDescription}>
				<span>{find.description}</span>
			</div>
			<div className={s.ItemPrice}>
				<PriceDivision price={find.price} />
			</div>
		</div>
	);
};