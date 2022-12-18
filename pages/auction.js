import ColcheteHead from '../components/global/colcheteHead';
import ColchetePreloader from '../components/global/colchetePreloader';
import ColcheteHeader from '../components/global/colcheteHeader';
import ColcheteFooter from '../components/global/colcheteFooter';

import ColcheteAuctionTop from '../components/pages/auction/colcheteAuctionTop';
import ColcheteAuctionExplore from '../components/pages/auction/colcheteAuctionExplore';

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
