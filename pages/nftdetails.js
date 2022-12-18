import ColcheteHead from '../components/global/colcheteHead';
import ColchetePreloader from '../components/global/colchetePreloader';
import ColcheteHeader from '../components/global/colcheteHeader';
import ColcheteFooter from '../components/global/colcheteFooter';

import ColcheteNftDetailsTop from '../components/pages/nftdetails/colcheteNftDetailsTop';
import ColcheteNftDetailsContent from '../components/pages/nftdetails/colcheteNftDetailsContent';

export default function Nftdetails() {
    return (
        <>
            <ColcheteHead />

            <body>
                <ColchetePreloader />
                <ColcheteHeader />
               
                <ColcheteNftDetailsTop />
                <ColcheteNftDetailsContent />

                <ColcheteFooter />
            </body>
        </>
    )
}
