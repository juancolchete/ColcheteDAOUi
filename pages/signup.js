import ColcheteHead from '../components/global/colcheteHead';
import ColchetePreloader from '../components/global/colchetePreloader';
import ColcheteHeader from '../components/global/colcheteHeader';
import ColcheteFooter from '../components/global/colcheteFooter';

import ColcheteSignupTop from '../components/pages/signup/ColcheteSignupTop';
import ColcheteSignupLogin from '../components/pages/signup/ColcheteSignupLogin';

export default function Signup() {
    return (
        <>
            <ColcheteHead />

            <body>
                <ColchetePreloader />
                <ColcheteHeader />
               
                 <ColcheteSignupTop />
                <ColcheteSignupLogin />

                <ColcheteFooter />
            </body>
        </>
    )
}
