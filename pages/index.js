import ColcheteHead from '../components/global/colcheteHead';
import ColchetePreloader from '../components/global/colchetePreloader';
import ColcheteHeader from '../components/global/colcheteHeader';
import ColcheteFooter from '../components/global/colcheteFooter';

import ColcheteHero from '../components/pages/index/colcheteHero';
import ColcheteBanner from '../components/pages/index/colcheteBanner';
import ColcheteLiveCards from '../components/pages/index/colcheteLiveCards';
import ColcheteCategoryCards from '../components/pages/index/colcheteCategoryCards';
import ColcheteTopSeller from '../components/pages/index/colcheteTopSeller';
import ColcheteDrop from '../components/pages/index/colcheteDrop';
import ColcheteBlogPosts from '../components/pages/index/colcheteBlogPosts';
import NftCard from '../components/nftCard';


export default function Home() {
    return (
        <>
            <ColcheteHead />

            <body className='home-4'>
                <ColchetePreloader />
                <ColcheteHeader />

                <ColcheteHero />
                {/* <ColcheteBanner /> */}
                {/* <ColcheteLiveCards /> */}
                {/* <ColcheteCategoryCards />
                <ColcheteTopSeller/>
                <ColcheteDrop/>
                <ColcheteBlogPosts/> */}
                <ColcheteFooter />
            </body>
        </>
    )
}
