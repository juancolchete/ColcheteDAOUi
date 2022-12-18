import ColcheteHead from '../components/global/colcheteHead';
import ColchetePreloader from '../components/global/colchetePreloader';
import ColcheteHeader from '../components/global/colcheteHeader';
import ColcheteFooter from '../components/global/colcheteFooter';

import ColcheteBlogTop from '../components/pages/blog/colcheteBlogTop';
import ColcheteBlogContent from '../components/pages/blog/colcheteBlogContent';

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
