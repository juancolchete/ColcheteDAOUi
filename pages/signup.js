import ColcheteHead from '../components/global/ColcheteHead';
import ColchetePreloader from '../components/global/ColchetePreloader';
import ColcheteHeader from '../components/global/ColcheteHeader';
import ColcheteFooter from '../components/global/ColcheteFooter';

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
