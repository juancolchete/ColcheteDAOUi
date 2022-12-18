const NftCard = () => {
    return (
        <>
            <div className="swiper-slide">
                <div className="nft-item home-4">
                    <div className="nft-inner">
                        {/* nft top part */}
                        {/* nft-bottom part */}
                        <div className="nft-item-bottom">
                            <div className="nft-thumb">
                                <img src="assets/images/nft-item/card.png" alt="nft-img" />
                                {/* nft countdwon */}
                                {/* <ul className="nft-countdown count-down" data-date="July 05, 2022 21:14:01" data-blast="bgColor">
                                    <li>
                                        <span className="days">34</span><span className="count-txt">D</span>
                                    </li>
                                    <li>
                                        <span className="hours">09</span><span className="count-txt">H</span>
                                    </li>
                                    <li>
                                        <span className="minutes">32</span><span className="count-txt">M</span>
                                    </li>
                                    <li>
                                        <span className="seconds">32</span><span className="count-txt">S</span>
                                    </li>
                                </ul> */}
                            </div>
                            <div className="nft-content">
                                <h4><a href="nftdetails">WakaTime Top1</a> </h4>
                                <div className="price-like d-flex justify-content-between align-items-center">
                                    <p className="nft-price">Price: <span className="yellow-color">2.56 MATIC</span>
                                    </p>
                                    <a href="#" className="nft-like">
                                        <i className="icofont-star-shape mx-1 " />
                                        230</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NftCard;
