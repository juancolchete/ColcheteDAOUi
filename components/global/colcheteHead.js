import Script from 'next/script'

const ColcheteHead = () => {
    return (
        <>

            <div>
                <meta charSet="utf-8" />
                <meta name="author" content="codexcoder" />
                <meta name="description" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </div>
            {/* All Scripts */}
            <Script src="/assets/js/app.js"></Script>
            <Script src="/assets/js/jquery-3.6.0.min.js"></Script>
            <Script src="/assets/js/bootstrap.bundle.min.js"></Script>
            <Script src="/assets/js/waypoints.min.js"></Script>
            <Script src="/assets/js/lightcase.js"></Script>
            <Script src="/assets/js/swiper-bundle.min.js"></Script>
            <Script src="/assets/js/countdown.min.js"></Script>
            <Script src="/assets/js/jquery.counterup.min.js"></Script>
            <Script src="/assets/js/wow.min.js"></Script>
            <Script src="/assets/js/isotope.pkgd.min.js"></Script>
            <Script src="/assets/js/functions.js"></Script>
            <Script src="https://cdn.lordicon.com/xdjxvujz.js"></Script>
        </>
    )
}
export default ColcheteHead;