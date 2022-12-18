import ColcheteHead from '../components/global/ColcheteHead';
import ColchetePreloader from '../components/global/ColchetePreloader';
import ColcheteHeader from '../components/global/ColcheteHeader';
import ColcheteFooter from '../components/global/ColcheteFooter';

import ColcheteSigninTop from '../components/pages/signin/ColcheteSigninTop';
import ColcheteSigninLogin from '../components/pages/signin/ColcheteSigninLogin';

export default function Signin() {
    return (
        <>
            <ColcheteHead />

            <body>
                <ColchetePreloader />
                <ColcheteHeader />
               
                 <ColcheteSigninTop />
                <ColcheteSigninLogin />

                <ColcheteFooter />
            </body>
        </>
    )
}
