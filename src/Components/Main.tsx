import { FC } from 'react';
import Header from "./Header/Header";
import Menu from './Menu/Menu';
import Banners from './Banners/Banners';
import Icons from './Icons/Icons';
import Collections from './Collections/Collections';
import Hits from './Hits/Hits';
import Stock from './Stock/Stock';
import Banner from './Banner/Banner';
import Brands from './Brands/Brands';
import Article from './Article/Article';
import Seo from './Seo/Seo';
import Footer from './Footer/Footer';
import { Provider } from './Context/Context';

const Main: FC = () => {
	return (
		<Provider>
			<main className="container">
				<Header />
				<Menu />
				<Banners />
				<Icons />
				<Collections />
				<Hits />
				<Stock />
				<Banner />
				<Brands />
				<Article />
				<Seo />
				<Footer />
			</main>
		</Provider>
	)
}

export default Main;