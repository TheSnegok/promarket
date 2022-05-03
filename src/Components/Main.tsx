import { createContext, FC } from 'react';
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

const Main: FC = () => {

	const memoryApp = {
		likes: null,
		basket: null
	}

	const ContextApp = createContext(memoryApp);

	return (
		<ContextApp.Provider value={memoryApp}>
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
		</ContextApp.Provider>
	)
}

export default Main;