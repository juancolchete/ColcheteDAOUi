import ColcheteHead from '../components/global/ColcheteHead';
import ColchetePreloader from '../components/global/ColchetePreloader';
import ColcheteHeader from '../components/global/ColcheteHeader';
import ColcheteFooter from '../components/global/ColcheteFooter';

import ColcheteForgotTop from '../components/pages/forgotpass/ColcheteForgotTop';
import ColcheteForgotContent from '../components/pages/forgotpass/ColcheteForgotContent';

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