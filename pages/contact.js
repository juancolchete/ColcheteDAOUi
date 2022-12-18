import ColcheteHead from '../components/global/colcheteHead';
import ColchetePreloader from '../components/global/colchetePreloader';
import ColcheteHeader from '../components/global/colcheteHeader';
import ColcheteFooter from '../components/global/colcheteFooter';

import ColcheteContactTop from '../components/pages/contact/colcheteContactTop';
import ColcheteContactForm from '../components/pages/contact/colcheteContactForm';

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
