import ColcheteHead from '../components/global/ColcheteHead';
import ColchetePreloader from '../components/global/ColchetePreloader';
import ColcheteHeader from '../components/global/ColcheteHeader';
import ColcheteFooter from '../components/global/ColcheteFooter';

import ColcheteNftDetailsTop from '../components/pages/nftdetails/ColcheteNftDetailsTop';
import ColcheteNftDetailsContent from '../components/pages/nftdetails/ColcheteNftDetailsContent';

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
