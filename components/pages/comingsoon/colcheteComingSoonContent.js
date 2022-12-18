const ColcheteComingSoonContent = () => {
    return (
        <>
            <section className="coming-soon-section padding-tb">
                <div className="container">
                    <div className="coming-wrapper text-center">
                        <div className="inner-logo mb-5">
                            <a href="index.html"><img src="assets/images/logo/logo.png" alt="aNFT Logo" /></a>
                        </div>
                        <ul className="lab-ul count-down d-flex flex-wrap event-count justify-content-center mb-4" data-date="July 31, 2022 21:14:01">
                            <li className="rounded-circle">
                                <span className="days">34</span>
                                <div className="count-text">Days</div>
                            </li>
                            <li className="rounded-circle">
                                <span className="hours">09</span>
                                <div className="count-text">Hours</div>
                            </li>
                            <li className="rounded-circle">
                                <span className="minutes">32</span>
                                <div className="count-text">Muni</div>
                            </li>
                            <li className="rounded-circle">
                                <span className="seconds">32</span>
                                <div className="count-text">Seco</div>
                            </li>
                        </ul>
                        <h1 className="coming-soon-title mb-4">Coming Soon</h1>
                    </div>
                </div>
            </section>

        </>
    )
}
export default ColcheteComingSoonContent;
