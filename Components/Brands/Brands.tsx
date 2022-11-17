import s from '../../Styles/components/Brands.module.sass';
import { useGlobalContext } from '../Context/Context';
import { BrandsTiles } from '../Templates/BrandsTiles/BrandsTiles';

const Brands = () => {

	const { data } = useGlobalContext();

	return (
		<section className={s.brands}>
			<h1 className={s.brandsHeader}>Популярные бренды</h1>
			<BrandsTiles brands={data.brands} />
		</section>
	)
}

export default Brands;