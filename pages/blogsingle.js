import ColcheteHead from '../components/global/colcheteHead';
import ColchetePreloader from '../components/global/colchetePreloader';
import ColcheteHeader from '../components/global/colcheteHeader';
import ColcheteFooter from '../components/global/colcheteFooter';

import ColcheteBlogSingleTop from '../components/pages/blogsingle/colcheteblogSingleTop';
import ColcheteBlogSingleContent from '../components/pages/blogsingle/colcheteblogSingleContent';

export default function BlogSingle() {
    return (
        <>
            <ColcheteHead />

            <body>
                <ColchetePreloader />
                <ColcheteHeader />
               
                <ColcheteBlogSingleTop/>
                <ColcheteBlogSingleContent />

                <ColcheteFooter />
            </body>
        </>
    )
}
