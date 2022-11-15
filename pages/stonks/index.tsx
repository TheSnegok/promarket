import { useGlobalContext } from "~/../Components/Context/Context";
import { GoodsTile } from "~/../Components/Templates/GoodsTile/GoodsTile";
import Slider from "~/../Components/Templates/Slider/Slider";
import TypicalPage from "~/../Components/Templates/TypicalPage/TypicalPage";
import s from "../../Styles/pages/Stonks.module.sass";

const Stonks = () => {

	const { data } = useGlobalContext();

	return (
		<TypicalPage header="Акции">
			<div className={s.stonksWrapper}>
				<div className={s.stonksWrapperSlider}>
					<Slider slidesInfo={data.slidesBanner} slideWidth={1300} />
				</div>
			</div>
			<div className={s.stonksList}>
				<div className={s.stonksListHeader}>
					<h3>Товары по акции</h3>
				</div>
				<div className={s.stonksListWrapper}>
					{data.stock.slideItems.map((item, index) => <GoodsTile index={index} find={item} />)}
				</div>
			</div>
		</TypicalPage>
	)
}

export default Stonks;