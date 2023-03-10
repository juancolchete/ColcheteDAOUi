import ColcheteHead from '../components/global/colcheteHead';
import ColchetePreloader from '../components/global/colchetePreloader';
import ColcheteHeader from '../components/global/colcheteHeader';
import ColcheteFooter from '../components/global/colcheteFooter';

import ColcheteWalletTop from '../components/pages/wallet/colcheteWalletTop';
import ColcheteWalletContent from '../components/pages/wallet/colcheteWalletContent';


export default function Wallet() {
    return (
        <>
            <ColcheteHead />

            <body>
                <ColchetePreloader />
                <ColcheteHeader />

                <ColcheteWalletTop />
                <ColcheteWalletContent />

                <ColcheteFooter />
            </body>
        </>
    )
}
