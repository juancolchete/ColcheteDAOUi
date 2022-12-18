import ColcheteHead from '../components/global/colcheteHead';
import ColchetePreloader from '../components/global/colchetePreloader';
import ColcheteHeader from '../components/global/colcheteHeader';
import ColcheteFooter from '../components/global/colcheteFooter';

import ColcheteForgotTop from '../components/pages/forgotpass/colcheteForgotTop';
import ColcheteForgotContent from '../components/pages/forgotpass/colcheteForgotContent';

export default function ForgotPass() {
    return (
        <>
            <ColcheteHead />

            <body>
                <ColchetePreloader />
                <ColcheteHeader />

                <ColcheteForgotTop />
                <ColcheteForgotContent />

                <ColcheteFooter />
            </body>
        </>
    )
}