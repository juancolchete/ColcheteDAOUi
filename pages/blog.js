import ColcheteHead from '../components/global/colcheteHead';
import ColchetePreloader from '../components/global/colchetePreloader';
import ColcheteHeader from '../components/global/colcheteHeader';
import ColcheteFooter from '../components/global/colcheteFooter';

import ColcheteBlogTop from '../components/pages/Blog/ColcheteBlogTop';
import ColcheteBlogContent from '../components/pages/Blog/ColcheteBlogContent';

export default function Blog() {
    return (
        <>
            <ColcheteHead />

            <body>
                <ColchetePreloader />
                <ColcheteHeader />
               
                 <ColcheteBlogTop />
                <ColcheteBlogContent />

                <ColcheteFooter />
            </body>
        </>
    )
}
