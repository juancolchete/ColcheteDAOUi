import ColcheteHead from '../components/global/colcheteHead';
import ColchetePreloader from '../components/global/colchetePreloader';
import ColcheteHeader from '../components/global/colcheteHeader';
import ColcheteFooter from '../components/global/colcheteFooter';

import ColcheteSigninTop from '../components/pages/signin/colcheteSigninTop';
import ColcheteSigninLogin from '../components/pages/signin/colcheteSigninLogin';

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
