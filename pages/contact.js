import ColcheteHead from '../components/global/ColcheteHead';
import ColchetePreloader from '../components/global/ColchetePreloader';
import ColcheteHeader from '../components/global/ColcheteHeader';
import ColcheteFooter from '../components/global/ColcheteFooter';

import ColcheteContactTop from '../components/pages/contact/ColcheteContactTop';
import ColcheteContactForm from '../components/pages/contact/ColcheteContactForm';

export default function Contact() {
    return (
        <>
            <ColcheteHead />

            <body>
                <ColchetePreloader />
                <ColcheteHeader />
               
                <ColcheteContactTop />
                <ColcheteContactForm />

                <ColcheteFooter />
            </body>
        </>
    )
}
