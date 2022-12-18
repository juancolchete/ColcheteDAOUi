import ColcheteHead from '../components/global/ColcheteHead';
import ColchetePreloader from '../components/global/ColchetePreloader';
import ColcheteHeader from '../components/global/ColcheteHeader';
import ColcheteFooter from '../components/global/ColcheteFooter';

import ColcheteBlogSingleTop from '../components/pages/blogsingle/ColcheteblogSingleTop';
import ColcheteBlogSingleContent from '../components/pages/blogsingle/ColcheteblogSingleContent';

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
