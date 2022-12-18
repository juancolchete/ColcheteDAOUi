import ColcheteHead from '../components/global/colcheteHead';
import ColchetePreloader from '../components/global/colchetePreloader';
import ColcheteHeader from '../components/global/colcheteHeader';
import ColcheteFooter from '../components/global/colcheteFooter';

import ColcheteSignupTop from '../components/pages/signup/colcheteSignupTop';
import ColcheteSignupLogin from '../components/pages/signup/colcheteSignupLogin';

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
