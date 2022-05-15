import { FC } from 'react';
import Banners from './Banners/Banners';
import Icons from './Icons/Icons';
import Collections from './Collections/Collections';
import Hits from './Hits/Hits';
import Stock from './Stock/Stock';
import Banner from './Banner/Banner';
import Brands from './Brands/Brands';
import Article from './Article/Article';
import Seo from './Seo/Seo';

const Main: FC = () => {
    return (
        <>
            <Banners />
            <Icons />
            <Collections />
            <Hits />
            <Stock />
            <Banner />
            <Brands />
            <Article />
            <Seo />
        </>
    )
}

export { Main };