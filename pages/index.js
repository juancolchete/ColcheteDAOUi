import ColcheteHead from '../components/global/colcheteHead';
import ColchetePreloader from '../components/global/colchetePreloader';
import ColcheteHeader from '../components/global/colcheteHeader';
import ColcheteFooter from '../components/global/colcheteFooter';

import ColcheteHero from '../components/pages/index/ColcheteHero';
import ColcheteBanner from '../components/pages/index/ColcheteBanner';
import ColcheteLiveCards from '../components/pages/index/ColcheteLiveCards';
import ColcheteCategoryCards from '../components/pages/index/ColcheteCategoryCards';
import ColcheteTopSeller from '../components/pages/index/ColcheteTopSeller';
import ColcheteDrop from '../components/pages/index/ColcheteDrop';
import ColcheteBlogPosts from '../components/pages/index/ColcheteBlogPosts';
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
