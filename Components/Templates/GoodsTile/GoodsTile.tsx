import Image from "next/image";
import { useRouter } from "next/router";
import { useGlobalContext, IDataTemplate } from "../../Context/Context";
import { PriceDivision } from "../PriceDivision/PriceDivision";

export const GoodsTile = ({ index, find}) => {

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
			className={s.searchMatchesBlockItem}
			key={index}
			onClick={() => selectedItem(find)}
		>
			<div className={s.searchMatchesBlockItemImg}>
				<Image
					src={find.imgSrc}
					alt={find.personalKey}
					width="90%"
					height="100px"
				/>
			</div>
			<div className={s.searchMatchesBlockItemDescription}>
				<span>{find.description}</span>
			</div>
			<div className={s.searchMatchesBlockItemPrice}>
				<PriceDivision price={find.price} />
			</div>
		</div>
	);
};