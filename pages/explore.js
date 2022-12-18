import ColcheteHead from '../components/global/colcheteHead';
import ColchetePreloader from '../components/global/colchetePreloader';
import ColcheteHeader from '../components/global/colcheteHeader';
import ColcheteFooter from '../components/global/colcheteFooter';

import ColcheteExploreTop from '../components/pages/explore/ColcheteExploreTop';
import ColcheteExploreContent from '../components/pages/explore/ColcheteExploreContent';

export default function Explore() {
    return (
        <>
            <ColcheteHead />

            <body>
                <ColchetePreloader />
                <ColcheteHeader />
               
                 <ColcheteExploreTop />
                <ColcheteExploreContent />

                <ColcheteFooter />
            </body>
        </>
    )
}
