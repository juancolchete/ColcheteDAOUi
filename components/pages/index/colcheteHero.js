import NftSlider from '/components/nftSlider';

const ColcheteHero = () => {
    return (
        <>
            <section className="banner-section home-4" style={{ backgroundImage: 'url(assets/images/banner/bg-4.jpg)' }}>
                <div className="container">
                    <div className="banner-wrapper">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-7">
                                <div className="banner-content">
                                    <h1>
                                        <span className="theme-color-4">
                                            Build </span>, Collect And <span className="theme-color-4"> <br />Be </span> on Colchete DAO
                                    </h1>
                                    <p>A web3 community focused on professional growth made by builder to builders.</p>
                                    <div className="banner-btns d-flex flex-wrap">
                                        <a data-blast="bgColor" href="wallet" className="default-btn move-top"><span>Buy 2.56 MATIC</span> </a>
                                        {/* <a href="signin.html" className="default-btn move-right"><span>View NFTs</span> </a> */}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-5">
                                <NftSlider />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ColcheteHero;
