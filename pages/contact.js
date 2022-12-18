import ColcheteHead from '../components/global/colcheteHead';
import ColchetePreloader from '../components/global/colchetePreloader';
import ColcheteHeader from '../components/global/colcheteHeader';
import ColcheteFooter from '../components/global/colcheteFooter';

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
