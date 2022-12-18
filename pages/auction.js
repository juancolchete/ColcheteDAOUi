import ColcheteHead from '../components/global/ColcheteHead';
import ColchetePreloader from '../components/global/ColchetePreloader';
import ColcheteHeader from '../components/global/ColcheteHeader';
import ColcheteFooter from '../components/global/ColcheteFooter';

import ColcheteAuctionTop from '../components/pages/auction/ColcheteAuctionTop';
import ColcheteAuctionExplore from '../components/pages/auction/ColcheteAuctionExplore';

export default function Auction() {
    return (
        <>
            <ColcheteHead />

            <body>
                <ColchetePreloader />
                <ColcheteHeader />
               
                 <ColcheteAuctionTop />
                <ColcheteAuctionExplore />

                <ColcheteFooter />
            </body>
        </>
    )
}
