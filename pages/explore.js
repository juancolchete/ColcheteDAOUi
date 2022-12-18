import ColcheteHead from '../components/global/ColcheteHead';
import ColchetePreloader from '../components/global/ColchetePreloader';
import ColcheteHeader from '../components/global/ColcheteHeader';
import ColcheteFooter from '../components/global/ColcheteFooter';

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
