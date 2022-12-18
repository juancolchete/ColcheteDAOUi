import ColcheteHead from '../components/global/ColcheteHead';
import ColchetePreloader from '../components/global/ColchetePreloader';
import ColcheteHeader from '../components/global/ColcheteHeader';
import ColcheteFooter from '../components/global/ColcheteFooter';

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
