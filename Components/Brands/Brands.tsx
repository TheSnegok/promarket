import s from '../../Styles/components/Brands.module.sass';
import hansgrohe from '../../public/brands/image 17.png';
import grohe from '../../public/brands/image 16.png';
import stworki from '../../public/brands/image 18.png';
import ampm from '../../public/brands/image 19.png';
import jacot from '../../public/brands/image 20.png';
import cersanit from '../../public/brands/image 21.png';
import geberit from '../../public/brands/image 22.png';
import roca from '../../public/brands/image 23.png';
import vitra from '../../public/brands/image 24.png';
import villeroy from '../../public/brands/image 25.png';
import isideal from '../../public/brands/image 26.png';
import aquanika from '../../public/brands/image 27.png';
import benetto from '../../public/brands/image 28.png';
import colombo from '../../public/brands/image 29.png';
import dyson from '../../public/brands/image 30.png';
import goronje from '../../public/brands/image 31.png';
import jado from '../../public/brands/image 32.png';
import lvi from '../../public/brands/image 33.png';
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

const listLogoBrands: (StaticImageData | string)[][] = [
	[hansgrohe, "/"],
	[grohe, "/"],
	[stworki, "/"],
	[ampm, "/"],
	[jacot, "/"],
	[cersanit, "/"],
	[geberit, "/"],
	[roca, "/"],
	[vitra, "/"],
	[villeroy, "/"],
	[isideal, "/"],
	[aquanika, "/"],
	[benetto, "/"],
	[colombo, "/"],
	[dyson, "/"],
	[goronje, "/"],
	[jado, "/"],
	[lvi, "/"],
];

const Brands = ({ header }: { header?: boolean }) => {
	return (
		<section className={s.brands}>
			<h1 className={s.brandsHeader}>Популярные бренды</h1>
			
		</section>
	)
}

export default Brands;