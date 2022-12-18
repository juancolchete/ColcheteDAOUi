import ColcheteHead from '../components/global/ColcheteHead';
import ColchetePreloader from '../components/global/ColchetePreloader';
import ColcheteHeader from '../components/global/ColcheteHeader';
import ColcheteFooter from '../components/global/ColcheteFooter';

import Colchete404Top from '../components/pages/404/Colchete404Top';
import Colchete404Content from '../components/pages/404/Colchete404Content';

export default function Error404() {
    return (
        <>
            <ColcheteHead />

            <body>
                <ColchetePreloader />
                <ColcheteHeader />
               
                <Colchete404Top />
                <Colchete404Content />

                <ColcheteFooter />
            </body>
        </>
    )
}
