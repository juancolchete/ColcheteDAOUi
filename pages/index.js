import ColcheteHead from '../components/global/ColcheteHead';
import ColchetePreloader from '../components/global/ColchetePreloader';
import ColcheteHeader from '../components/global/ColcheteHeader';
import ColcheteFooter from '../components/global/ColcheteFooter';

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
