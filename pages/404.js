import ColcheteHead from '../components/global/colcheteHead';
import ColchetePreloader from '../components/global/colchetePreloader';
import ColcheteHeader from '../components/global/colcheteHeader';
import ColcheteFooter from '../components/global/colcheteFooter';

import Colchete404Top from '../components/pages/404/colchete404Top';
import Colchete404Content from '../components/pages/404/colchete404Content';

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
