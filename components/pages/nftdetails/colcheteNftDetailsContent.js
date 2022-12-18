const Nft = () => {
    return (
        <>
            <div className="item-details-section padding-top padding-bottom">
                <div className="container">
                    <div className="item-details-wrapper">
                        <div className="row g-5">
                            <div className="col-lg-6">
                                <div className="item-desc-part">
                                    <div className="item-desc-inner">
                                        <div className="item-desc-thumb">
                                            <img src="assets/images/nft-item/item-details.gif" alt="item-img" />
                                        </div>
                                        <div className="item-desc-content">
                                            <nav>
                                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                    <button className="nav-link active" id="nav-details-tab" data-bs-toggle="tab" data-bs-target="#nav-details" type="button" role="tab" aria-controls="nav-details" aria-selected="true">Details</button>
                                                    <button className="nav-link" id="nav-bids-tab" data-bs-toggle="tab" data-bs-target="#nav-bids" type="button" role="tab" aria-controls="nav-bids" aria-selected="false">Bids</button>
                                                    <button className="nav-link" id="nav-history-tab" data-bs-toggle="tab" data-bs-target="#nav-history" type="button" role="tab" aria-controls="nav-history" aria-selected="false">History</button>
                                                </div>
                                            </nav>
                                            <div className="tab-content" id="nav-tabContent">
                                                <div className="details-tab tab-pane fade show active" id="nav-details" role="tabpanel" aria-labelledby="nav-details-tab">
                                                    <p>This is the second batch of Cybertino Genesis NFTs for early adopters and
                                                        is 1 of 5. This Genesis NFT will be
                                                        interactive: hold and wait for future exclusive benefits and early
                                                        access to new drops!</p>
                                                    <div className="author-profile d-flex flex-wrap align-items-center gap-15">
                                                        <div className="author-p-thumb">
                                                            <a href="author.html"><img src="assets/images/seller/02.gif" alt="author-img " /></a>
                                                        </div>
                                                        <div className="author-p-info">
                                                            <p className="mb-0">Owner</p>
                                                            <h6><a href="author.html">Alex joe</a></h6>
                                                        </div>
                                                    </div>
                                                    <ul className="other-info-list">
                                                        <li className="item-other-info">
                                                            <div className="item-info-title">
                                                                <h6>Contact Address</h6>
                                                            </div>
                                                            <div className="item-info-details">
                                                                <div id="cryptoCode" className="crypto-page">
                                                                    <input id="cryptoLink" defaultValue="0x1dDB2C0897daF134545641545462E71fdD2dbDC0eB3a9Ec" readOnly />
                                                                    <div id="cryptoCopy" data-bs-toggle="tooltip" data-bs-placement="top" title="Copy Address">
                                                                        <span className="copy-icon">
                                                                            <i className="icofont-ui-copy" aria-hidden="true" data-copytarget="#cryptoLink" />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="item-other-info">
                                                            <div className="item-info-title">
                                                                <h6>Token ID</h6>
                                                            </div>
                                                            <div className="item-info-details">
                                                                <p>0005515456416</p>
                                                            </div>
                                                        </li>
                                                        <li className="item-other-info">
                                                            <div className="item-info-title">
                                                                <h6>Blockchain</h6>
                                                            </div>
                                                            <div className="item-info-details">
                                                                <p>Ethereum (ETH)</p>
                                                            </div>
                                                        </li>
                                                        <li className="item-other-info">
                                                            <div className="item-info-title">
                                                                <h6>Size</h6>
                                                            </div>
                                                            <div className="item-info-details">
                                                                <p>1000 x 1000 px.VIDEO (19.85MB)</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="bids-tab tab-pane fade" id="nav-bids" role="tabpanel" aria-labelledby="nav-bids-tab">
                                                    <span><i className="icofont-law-order" /></span>
                                                    <p>No active bids yet. Be the first to make a bid!</p>
                                                </div>
                                                <div className="history-tab tab-pane fade" id="nav-history" role="tabpanel" aria-labelledby="nav-history-tab">
                                                    <ul className="item-histo-list">
                                                        <li className="histo-item">
                                                            <p>Created by <a href="author.html">@alex joe</a></p>
                                                            <time>2022-08-04 23:05:07</time>
                                                        </li>
                                                        <li className="histo-item">
                                                            <p>Listed by <a href="author.html">@alex joe</a></p>
                                                            <time>2022-08-04 20:05:07</time>
                                                        </li>
                                                        <li className="histo-item">
                                                            <p>Owned by <a href="author.html">@alex joe</a></p>
                                                            <time>2022-08-04 22:05:07</time>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="item-buy-part">
                                    <div className="nft-item-title">
                                        <h3>#003 da Silly Cat wid baLoon NFT: size 1/50</h3>
                                        <div className="share-btn">
                                            <div className=" dropstart">
                                                <a className=" dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="25,0">
                                                    <i className="icofont-share-alt" />
                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#"><span>
                                                        <i className="icofont-twitter" />
                                                    </span> Twitter </a>
                                                    </li>
                                                    <li><a className="dropdown-item" href="#"><span><i className="icofont-telegram" /></span> Telegram</a></li>
                                                    <li><a className="dropdown-item" href="#"><span><i className="icofont-envelope" /></span> Email</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-details-countdown">
                                        <h4>Ends In:</h4>
                                        <ul className="item-countdown-list count-down" data-date="June 05, 2022 21:14:01">
                                            <li>
                                                <span className="days">34</span><span className="count-txt">Days</span>
                                            </li>
                                            <li>
                                                <span className="hours">09</span><span className="count-txt">Hours</span>
                                            </li>
                                            <li>
                                                <span className="minutes">32</span><span className="count-txt">Mins</span>
                                            </li>
                                            <li>
                                                <span className="seconds">32</span><span className="count-txt">Secs</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="item-price">
                                        <h4>Price</h4>
                                        <p><span><i className="icofont-coins" /> 2.29 ETH
                                        </span>($ 6,227.15)</p>
                                    </div>
                                    <div className="buying-btns d-flex flex-wrap">
                                        <a href="wallet.html" className="default-btn move-right"><span>Buy Now</span> </a>
                                        <a href="wallet.html" className="default-btn move-right"><span>Place a Bid</span> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Nft;
