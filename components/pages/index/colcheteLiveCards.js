import NftCard from "../../nftCard";


const ColcheteLiveCards = () => {
    return (
        <>
            <section className="auction-section padding-bottom">
                <div className="container">
                    <div className="section-header style-4">
                        <div className="header-shape"><span /></div>
                        <h3>Live Auctions</h3>
                    </div>
                    <div className="section-wrapper">
                        <div className="auction-holder">
                            <div className="swiper-wrapper">
                                <NftCard />
                                <NftCard />
                                <NftCard />
                                <NftCard />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ColcheteLiveCards;
