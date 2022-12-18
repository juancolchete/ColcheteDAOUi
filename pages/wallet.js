import ColcheteHead from '../components/global/ColcheteHead';
import ColchetePreloader from '../components/global/ColchetePreloader';
import ColcheteHeader from '../components/global/ColcheteHeader';
import ColcheteFooter from '../components/global/ColcheteFooter';

import ColcheteWalletTop from '../components/pages/wallet/ColcheteWalletTop';
import ColcheteWalletContent from '../components/pages/wallet/ColcheteWalletContent';


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
