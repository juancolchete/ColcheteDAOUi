const ColcheteExploreContent = () => {
    return (
        <>
            <section className="explore-section padding-top padding-bottom">
                <div className="container">
                    <div className="section-header">
                        <div className="nft-filter d-flex flex-wrap justify-content-center">
                            <div className="form-floating">
                                <select className="form-select" id="catSelect" aria-label="Floating label select example">
                                    <option selected>All Category</option>
                                    <option value={1}>Art</option>
                                    <option value={2}>Music</option>
                                    <option value={3}>Video</option>
                                    <option value={3}>Digital Anime</option>
                                </select>
                                <label htmlFor="catSelect">Select a Category</label>
                            </div>
                            <div className="form-floating">
                                <select className="form-select" id="sortSelect" aria-label="Floating label select example">
                                    <option selected>Newest</option>
                                    <option value={1}>Trending</option>
                                    <option value={2}>Most Viewed</option>
                                    <option value={3}>Less Viewed</option>
                                    <option value={3}>Ending Soon</option>
                                    <option value={3}>Recently Sold </option>
                                    <option value={3}>Recently Created </option>
                                    <option value={3}>Recently Viewed </option>
                                    <option value={3}>Ending Soon</option>
                                </select>
                                <label htmlFor="sortSelect">Sort By</label>
                            </div>
                        </div>
                        <div className="nft-search">
                            <div className="form-floating nft-search-input">
                                <input type="text" className="form-control" id="nftSearch" placeholder="Search NFT" />
                                <label htmlFor="nftSearch">Search NFT</label>
                                <button type="button"> <i className="icofont-search-1" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="section-wrapper">
                        <div className="explore-wrapper">
                            <div className="row justify-content-center gx-4 gy-3">
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="nft-item">
                                        <div className="nft-inner">
                                            {/* nft top part */}
                                            <div className="nft-item-top d-flex justify-content-between align-items-center">
                                                <div className="author-part">
                                                    <ul className="author-list d-flex">
                                                        <li className="single-author d-flex align-items-center">
                                                            <a href="author.html" className="veryfied"><img loading="lazy" src="assets/images/seller/04.png" alt="author-img" /></a>
                                                            <h6><a href="author.html">Gucci Lucas</a></h6>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="more-part">
                                                    <div className=" dropstart">
                                                        <a className=" dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="25,0">
                                                            <i className="icofont-flikr" />
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li><a className="dropdown-item" href="#"><span>
                                                                <i className="icofont-warning" />
                                                            </span> Report </a>
                                                            </li>
                                                            <li><a className="dropdown-item" href="#"><span><i className="icofont-reply" /></span> Share</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* nft-bottom part */}
                                            <div className="nft-item-bottom">
                                                <div className="nft-thumb">
                                                    <img loading="lazy" src="assets/images/nft-item/02.gif" alt="nft-img" />
                                                    {/* nft countdwon */}
                                                    {/* <ul class="nft-countdown count-down" data-date="July 05, 2022 21:14:01">
                                          <li>
                                              <span class="days">34</span><span class="count-txt">D</span>
                                          </li>
                                          <li>
                                              <span class="hours">09</span><span class="count-txt">H</span>
                                          </li>
                                          <li>
                                              <span class="minutes">32</span><span class="count-txt">M</span>
                                          </li>
                                          <li>
                                              <span class="seconds">32</span><span class="count-txt">S</span>
                                          </li>
                                      </ul> */}
                                                </div>
                                                <div className="nft-content">
                                                    <h4><a href="item-details.html">EUPHORIA de</a> </h4>
                                                    <div className="price-like d-flex justify-content-between align-items-center">
                                                        <p className="nft-price">Price: <span className="yellow-color">0.34 ETH</span>
                                                        </p>
                                                        <a href="#" className="nft-like"><i className="icofont-heart" />
                                                            230</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="nft-item">
                                        <div className="nft-inner">
                                            {/* nft top part */}
                                            <div className="nft-item-top d-flex justify-content-between align-items-center">
                                                <div className="author-part">
                                                    <ul className="author-list d-flex">
                                                        <li className="single-author">
                                                            <a href="author.html"><img loading="lazy" src="assets/images/seller/01.png" alt="author-img" /></a>
                                                        </li>
                                                        <li className="single-author">
                                                            <a href="author.html"><img loading="lazy" src="assets/images/seller/01.gif" alt="author-img" /></a>
                                                        </li>
                                                        <li className="single-author d-flex align-items-center">
                                                            <a href="author.html" className="veryfied"><img loading="lazy" src="assets/images/seller/02.png" alt="author-img" /></a>
                                                            <h6><a href="author.html">Ecalo jers</a></h6>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="more-part">
                                                    <div className=" dropstart">
                                                        <a className=" dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="25,0">
                                                            <i className="icofont-flikr" />
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li><a className="dropdown-item" href="#"><span>
                                                                <i className="icofont-warning" />
                                                            </span> Report </a>
                                                            </li>
                                                            <li><a className="dropdown-item" href="#"><span><i className="icofont-reply" /></span> Share</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* nft-bottom part */}
                                            <div className="nft-item-bottom">
                                                <div className="nft-thumb">
                                                    <img loading="lazy" src="assets/images/nft-item/01.jpg" alt="nft-img" />
                                                    {/* nft countdwon */}
                                                    {/* <ul class="nft-countdown count-down" data-date="July 05, 2022 21:14:01">
                                          <li>
                                              <span class="days">34</span><span class="count-txt">D</span>
                                          </li>
                                          <li>
                                              <span class="hours">09</span><span class="count-txt">H</span>
                                          </li>
                                          <li>
                                              <span class="minutes">32</span><span class="count-txt">M</span>
                                          </li>
                                          <li>
                                              <span class="seconds">32</span><span class="count-txt">S</span>
                                          </li>
                                      </ul> */}
                                                </div>
                                                <div className="nft-content">
                                                    <h4><a href="item-details.html">Mewao com de</a> </h4>
                                                    <div className="price-like d-flex justify-content-between align-items-center">
                                                        <p className="nft-price">Price: <span className="yellow-color">0.34 ETH</span>
                                                        </p>
                                                        <a href="#" className="nft-like"><i className="icofont-heart" />
                                                            278</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="nft-item">
                                        <div className="nft-inner">
                                            {/* nft top part */}
                                            <div className="nft-item-top d-flex justify-content-between align-items-center">
                                                <div className="author-part">
                                                    <ul className="author-list d-flex">
                                                        <li className="single-author">
                                                            <a href="author.html"><img loading="lazy" src="assets/images/seller/02.png" alt="author-img" /></a>
                                                        </li>
                                                        <li className="single-author">
                                                            <a href="author.html"><img loading="lazy" src="assets/images/seller/05.png" alt="author-img" /></a>
                                                        </li>
                                                        <li className="single-author d-flex align-items-center">
                                                            <a href="author.html" className="veryfied"><img loading="lazy" src="assets/images/seller/04.png" alt="author-img" /></a>
                                                            <h6><a href="author.html">Hola moc</a></h6>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="more-part">
                                                    <div className=" dropstart">
                                                        <a className=" dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="25,0">
                                                            <i className="icofont-flikr" />
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li><a className="dropdown-item" href="#"><span>
                                                                <i className="icofont-warning" />
                                                            </span> Report </a>
                                                            </li>
                                                            <li><a className="dropdown-item" href="#"><span><i className="icofont-reply" /></span> Share</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* nft-bottom part */}
                                            <div className="nft-item-bottom">
                                                <div className="nft-thumb">
                                                    <img loading="lazy" src="assets/images/nft-item/06.gif" alt="nft-img" />
                                                    {/* nft countdwon */}
                                                    {/* <ul class="nft-countdown count-down" data-date="July 05, 2022 21:14:01">
                                          <li>
                                              <span class="days">34</span><span class="count-txt">D</span>
                                          </li>
                                          <li>
                                              <span class="hours">09</span><span class="count-txt">H</span>
                                          </li>
                                          <li>
                                              <span class="minutes">32</span><span class="count-txt">M</span>
                                          </li>
                                          <li>
                                              <span class="seconds">32</span><span class="count-txt">S</span>
                                          </li>
                                      </ul> */}
                                                </div>
                                                <div className="nft-content">
                                                    <h4><a href="item-details.html">pet mice rio</a> </h4>
                                                    <div className="price-like d-flex justify-content-between align-items-center">
                                                        <p className="nft-price">Price: <span className="yellow-color">0.34 ETH</span>
                                                        </p>
                                                        <a href="#" className="nft-like"><i className="icofont-heart" />
                                                            340</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="nft-item">
                                        <div className="nft-inner">
                                            {/* nft top part */}
                                            <div className="nft-item-top d-flex justify-content-between align-items-center">
                                                <div className="author-part">
                                                    <ul className="author-list d-flex">
                                                        <li className="single-author">
                                                            <a href="author.html"><img loading="lazy" src="assets/images/seller/06.png" alt="author-img" /></a>
                                                        </li>
                                                        <li className="single-author d-flex align-items-center">
                                                            <a href="author.html" className="veryfied"><img loading="lazy" src="assets/images/seller/05.gif" alt="author-img" /></a>
                                                            <h6><a href="author.html">Logicto pen</a></h6>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="more-part">
                                                    <div className=" dropstart">
                                                        <a className=" dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="25,0">
                                                            <i className="icofont-flikr" />
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li><a className="dropdown-item" href="#"><span>
                                                                <i className="icofont-warning" />
                                                            </span> Report </a>
                                                            </li>
                                                            <li><a className="dropdown-item" href="#"><span><i className="icofont-reply" /></span> Share</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* nft-bottom part */}
                                            <div className="nft-item-bottom">
                                                <div className="nft-thumb">
                                                    <img loading="lazy" src="assets/images/nft-item/04.jpg" alt="nft-img" />
                                                    {/* nft countdwon */}
                                                    {/* <ul class="nft-countdown count-down" data-date="July 05, 2022 21:14:01">
                                          <li>
                                              <span class="days">34</span><span class="count-txt">D</span>
                                          </li>
                                          <li>
                                              <span class="hours">09</span><span class="count-txt">H</span>
                                          </li>
                                          <li>
                                              <span class="minutes">32</span><span class="count-txt">M</span>
                                          </li>
                                          <li>
                                              <span class="seconds">32</span><span class="count-txt">S</span>
                                          </li>
                                      </ul> */}
                                                </div>
                                                <div className="nft-content">
                                                    <h4><a href="item-details.html">Logical Impact </a> </h4>
                                                    <div className="price-like d-flex justify-content-between align-items-center">
                                                        <p className="nft-price">Price: <span className="yellow-color">0.34 ETH</span>
                                                        </p>
                                                        <a href="#" className="nft-like"><i className="icofont-heart" />
                                                            330</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="nft-item">
                                        <div className="nft-inner">
                                            {/* nft top part */}
                                            <div className="nft-item-top d-flex justify-content-between align-items-center">
                                                <div className="author-part">
                                                    <ul className="author-list d-flex">
                                                        <li className="single-author">
                                                            <a href="author.html"><img loading="lazy" src="assets/images/seller/06.png" alt="author-img" /></a>
                                                        </li>
                                                        <li className="single-author">
                                                            <a href="author.html"><img loading="lazy" src="assets/images/seller/07.gif" alt="author-img" /></a>
                                                        </li>
                                                        <li className="single-author d-flex align-items-center">
                                                            <a href="author.html" className="veryfied"><img loading="lazy" src="assets/images/seller/09.png" alt="author-img" /></a>
                                                            <h6><a href="author.html">unique lo</a></h6>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="more-part"><i className="icofont-flikr" /></div>
                                            </div>
                                            {/* nft-bottom part */}
                                            <div className="nft-item-bottom">
                                                <div className="nft-thumb">
                                                    <img loading="lazy" src="assets/images/nft-item/03.jpg" alt="nft-img" />
                                                    {/* nft countdwon */}
                                                    {/* <ul class="nft-countdown count-down" data-date="July 05, 2022 21:14:01">
                                          <li>
                                              <span class="days">34</span><span class="count-txt">D</span>
                                          </li>
                                          <li>
                                              <span class="hours">09</span><span class="count-txt">H</span>
                                          </li>
                                          <li>
                                              <span class="minutes">32</span><span class="count-txt">M</span>
                                          </li>
                                          <li>
                                              <span class="seconds">32</span><span class="count-txt">S</span>
                                          </li>
                                      </ul> */}
                                                </div>
                                                <div className="nft-content">
                                                    <h4><a href="item-details.html">Fly on high</a> </h4>
                                                    <div className="price-like d-flex justify-content-between align-items-center">
                                                        <p className="nft-price">Price: <span className="yellow-color">0.34 ETH</span>
                                                        </p>
                                                        <a href="#" className="nft-like"><i className="icofont-heart" />
                                                            355</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="nft-item">
                                        <div className="nft-inner">
                                            {/* nft top part */}
                                            <div className="nft-item-top d-flex justify-content-between align-items-center">
                                                <div className="author-part">
                                                    <ul className="author-list d-flex">
                                                        <li className="single-author d-flex align-items-center">
                                                            <a href="author.html" className="veryfied"><img loading="lazy" src="assets/images/seller/05.gif" alt="author-img" /></a>
                                                            <h6><a href="author.html">Monica bel</a></h6>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="more-part">
                                                    <div className=" dropstart">
                                                        <a className=" dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="25,0">
                                                            <i className="icofont-flikr" />
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li><a className="dropdown-item" href="#"><span>
                                                                <i className="icofont-warning" />
                                                            </span> Report </a>
                                                            </li>
                                                            <li><a className="dropdown-item" href="#"><span><i className="icofont-reply" /></span> Share</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* nft-bottom part */}
                                            <div className="nft-item-bottom">
                                                <div className="nft-thumb">
                                                    <img loading="lazy" src="assets/images/nft-item/04.gif" alt="nft-img" />
                                                    {/* nft countdwon */}
                                                    {/* <ul class="nft-countdown count-down" data-date="July 05, 2022 21:14:01">
                                          <li>
                                              <span class="days">34</span><span class="count-txt">D</span>
                                          </li>
                                          <li>
                                              <span class="hours">09</span><span class="count-txt">H</span>
                                          </li>
                                          <li>
                                              <span class="minutes">32</span><span class="count-txt">M</span>
                                          </li>
                                          <li>
                                              <span class="seconds">32</span><span class="count-txt">S</span>
                                          </li>
                                      </ul> */}
                                                </div>
                                                <div className="nft-content">
                                                    <h4><a href="item-details.html">kiara rodri de</a> </h4>
                                                    <div className="price-like d-flex justify-content-between align-items-center">
                                                        <p className="nft-price">Price: <span className="yellow-color">0.34 ETH</span>
                                                        </p>
                                                        <a href="#" className="nft-like"><i className="icofont-heart" />
                                                            60</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="nft-item">
                                        <div className="nft-inner">
                                            {/* nft top part */}
                                            <div className="nft-item-top d-flex justify-content-between align-items-center">
                                                <div className="author-part">
                                                    <ul className="author-list d-flex">
                                                        <li className="single-author">
                                                            <a href="author.html"><img loading="lazy" src="assets/images/seller/08.gif" alt="author-img" /></a>
                                                        </li>
                                                        <li className="single-author">
                                                            <a href="author.html"><img loading="lazy" src="assets/images/seller/01.png" alt="author-img" /></a>
                                                        </li>
                                                        <li className="single-author d-flex align-items-center">
                                                            <a href="author.html" className="veryfied"><img loading="lazy" src="assets/images/seller/11.png" alt="author-img" /></a>
                                                            <h6><a href="author.html">Gucci L.</a></h6>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="more-part">
                                                    <div className=" dropstart">
                                                        <a className=" dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="25,0">
                                                            <i className="icofont-flikr" />
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li><a className="dropdown-item" href="#"><span>
                                                                <i className="icofont-warning" />
                                                            </span> Report </a>
                                                            </li>
                                                            <li><a className="dropdown-item" href="#"><span><i className="icofont-reply" /></span> Share</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* nft-bottom part */}
                                            <div className="nft-item-bottom">
                                                <div className="nft-thumb">
                                                    <img loading="lazy" src="assets/images/nft-item/05.jpg" alt="nft-img" />
                                                    {/* nft countdwon */}
                                                    {/* <ul class="nft-countdown count-down" data-date="July 05, 2022 21:14:01">
                                          <li>
                                              <span class="days">34</span><span class="count-txt">D</span>
                                          </li>
                                          <li>
                                              <span class="hours">09</span><span class="count-txt">H</span>
                                          </li>
                                          <li>
                                              <span class="minutes">32</span><span class="count-txt">M</span>
                                          </li>
                                          <li>
                                              <span class="seconds">32</span><span class="count-txt">S</span>
                                          </li>
                                      </ul> */}
                                                </div>
                                                <div className="nft-content">
                                                    <h4><a href="item-details.html">EUPHORIA de</a> </h4>
                                                    <div className="price-like d-flex justify-content-between align-items-center">
                                                        <p className="nft-price">Price: <span className="yellow-color">0.34 ETH</span>
                                                        </p>
                                                        <a href="#" className="nft-like"><i className="icofont-heart" />
                                                            230</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="nft-item">
                                        <div className="nft-inner">
                                            {/* nft top part */}
                                            <div className="nft-item-top d-flex justify-content-between align-items-center">
                                                <div className="author-part">
                                                    <ul className="author-list d-flex">
                                                        <li className="single-author">
                                                            <a href="author.html"><img loading="lazy" src="assets/images/seller/01.png" alt="author-img" /></a>
                                                        </li>
                                                        <li className="single-author">
                                                            <a href="author.html"><img loading="lazy" src="assets/images/seller/07.png" alt="author-img" /></a>
                                                        </li>
                                                        <li className="single-author d-flex align-items-center">
                                                            <a href="author.html" className="veryfied"><img loading="lazy" src="assets/images/seller/09.png" alt="author-img" /></a>
                                                            <h6><a href="author.html">ptrax elm.</a></h6>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="more-part">
                                                    <div className=" dropstart">
                                                        <a className=" dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="25,0">
                                                            <i className="icofont-flikr" />
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li><a className="dropdown-item" href="#"><span>
                                                                <i className="icofont-warning" />
                                                            </span> Report </a>
                                                            </li>
                                                            <li><a className="dropdown-item" href="#"><span><i className="icofont-reply" /></span> Share</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* nft-bottom part */}
                                            <div className="nft-item-bottom">
                                                <div className="nft-thumb">
                                                    <img loading="lazy" src="assets/images/nft-item/05.gif" alt="nft-img" />
                                                    {/* nft countdwon */}
                                                    {/* <ul class="nft-countdown count-down" data-date="July 05, 2022 21:14:01">
                                          <li>
                                              <span class="days">34</span><span class="count-txt">D</span>
                                          </li>
                                          <li>
                                              <span class="hours">09</span><span class="count-txt">H</span>
                                          </li>
                                          <li>
                                              <span class="minutes">32</span><span class="count-txt">M</span>
                                          </li>
                                          <li>
                                              <span class="seconds">32</span><span class="count-txt">S</span>
                                          </li>
                                      </ul> */}
                                                </div>
                                                <div className="nft-content">
                                                    <h4><a href="item-details.html">Homies wall</a> </h4>
                                                    <div className="price-like d-flex justify-content-between align-items-center">
                                                        <p className="nft-price">Price: <span className="yellow-color">0.34 ETH</span>
                                                        </p>
                                                        <a href="#" className="nft-like"><i className="icofont-heart" />
                                                            930</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="nft-item">
                                        <div className="nft-inner">
                                            {/* nft top part */}
                                            <div className="nft-item-top d-flex justify-content-between align-items-center">
                                                <div className="author-part">
                                                    <ul className="author-list d-flex">
                                                        <li className="single-author">
                                                            <a href="author.html"><img loading="lazy" src="assets/images/seller/06.png" alt="author-img" /></a>
                                                        </li>
                                                        <li className="single-author d-flex align-items-center">
                                                            <a href="author.html" className="veryfied"><img loading="lazy" src="assets/images/seller/05.gif" alt="author-img" /></a>
                                                            <h6><a href="author.html">Logicto pen</a></h6>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="more-part">
                                                    <div className=" dropstart">
                                                        <a className=" dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="25,0">
                                                            <i className="icofont-flikr" />
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li><a className="dropdown-item" href="#"><span>
                                                                <i className="icofont-warning" />
                                                            </span> Report </a>
                                                            </li>
                                                            <li><a className="dropdown-item" href="#"><span><i className="icofont-reply" /></span> Share</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* nft-bottom part */}
                                            <div className="nft-item-bottom">
                                                <div className="nft-thumb">
                                                    <img loading="lazy" src="assets/images/nft-item/01.gif" alt="nft-img" />
                                                    {/* nft countdwon */}
                                                    {/* <ul class="nft-countdown count-down" data-date="July 05, 2022 21:14:01">
                                          <li>
                                              <span class="days">34</span><span class="count-txt">D</span>
                                          </li>
                                          <li>
                                              <span class="hours">09</span><span class="count-txt">H</span>
                                          </li>
                                          <li>
                                              <span class="minutes">32</span><span class="count-txt">M</span>
                                          </li>
                                          <li>
                                              <span class="seconds">32</span><span class="count-txt">S</span>
                                          </li>
                                      </ul> */}
                                                </div>
                                                <div className="nft-content">
                                                    <h4><a href="item-details.html">Logical Impact </a> </h4>
                                                    <div className="price-like d-flex justify-content-between align-items-center">
                                                        <p className="nft-price">Price: <span className="yellow-color">0.34 ETH</span>
                                                        </p>
                                                        <a href="#" className="nft-like"><i className="icofont-heart" />
                                                            330</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="nft-item">
                                        <div className="nft-inner">
                                            {/* nft top part */}
                                            <div className="nft-item-top d-flex justify-content-between align-items-center">
                                                <div className="author-part">
                                                    <ul className="author-list d-flex">
                                                        <li className="single-author">
                                                            <a href="author.html"><img loading="lazy" src="assets/images/seller/02.png" alt="author-img" /></a>
                                                        </li>
                                                        <li className="single-author">
                                                            <a href="author.html"><img loading="lazy" src="assets/images/seller/05.png" alt="author-img" /></a>
                                                        </li>
                                                        <li className="single-author d-flex align-items-center">
                                                            <a href="author.html" className="veryfied"><img loading="lazy" src="assets/images/seller/04.png" alt="author-img" /></a>
                                                            <h6><a href="author.html">Hola moc</a></h6>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="more-part">
                                                    <div className=" dropstart">
                                                        <a className=" dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="25,0">
                                                            <i className="icofont-flikr" />
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li><a className="dropdown-item" href="#"><span>
                                                                <i className="icofont-warning" />
                                                            </span> Report </a>
                                                            </li>
                                                            <li><a className="dropdown-item" href="#"><span><i className="icofont-reply" /></span> Share</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* nft-bottom part */}
                                            <div className="nft-item-bottom">
                                                <div className="nft-thumb">
                                                    <img loading="lazy" src="assets/images/nft-item/06.jpg" alt="nft-img" />
                                                    {/* nft countdwon */}
                                                    {/* <ul class="nft-countdown count-down" data-date="July 05, 2022 21:14:01">
                                          <li>
                                              <span class="days">34</span><span class="count-txt">D</span>
                                          </li>
                                          <li>
                                              <span class="hours">09</span><span class="count-txt">H</span>
                                          </li>
                                          <li>
                                              <span class="minutes">32</span><span class="count-txt">M</span>
                                          </li>
                                          <li>
                                              <span class="seconds">32</span><span class="count-txt">S</span>
                                          </li>
                                      </ul> */}
                                                </div>
                                                <div className="nft-content">
                                                    <h4><a href="item-details.html">pet mice rio</a> </h4>
                                                    <div className="price-like d-flex justify-content-between align-items-center">
                                                        <p className="nft-price">Price: <span className="yellow-color">0.34 ETH</span>
                                                        </p>
                                                        <a href="#" className="nft-like"><i className="icofont-heart" />
                                                            340</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="nft-item">
                                        <div className="nft-inner">
                                            {/* nft top part */}
                                            <div className="nft-item-top d-flex justify-content-between align-items-center">
                                                <div className="author-part">
                                                    <ul className="author-list d-flex">
                                                        <li className="single-author">
                                                            <a href="author.html"><img loading="lazy" src="assets/images/seller/01.png" alt="author-img" /></a>
                                                        </li>
                                                        <li className="single-author">
                                                            <a href="author.html"><img loading="lazy" src="assets/images/seller/01.gif" alt="author-img" /></a>
                                                        </li>
                                                        <li className="single-author d-flex align-items-center">
                                                            <a href="author.html" className="veryfied"><img loading="lazy" src="assets/images/seller/02.png" alt="author-img" /></a>
                                                            <h6><a href="author.html">Ecalo jers</a></h6>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="more-part">
                                                    <div className=" dropstart">
                                                        <a className=" dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="25,0">
                                                            <i className="icofont-flikr" />
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li><a className="dropdown-item" href="#"><span>
                                                                <i className="icofont-warning" />
                                                            </span> Report </a>
                                                            </li>
                                                            <li><a className="dropdown-item" href="#"><span><i className="icofont-reply" /></span> Share</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* nft-bottom part */}
                                            <div className="nft-item-bottom">
                                                <div className="nft-thumb">
                                                    <img loading="lazy" src="assets/images/nft-item/03.gif" alt="nft-img" />
                                                    {/* nft countdwon */}
                                                    {/* <ul class="nft-countdown count-down" data-date="July 05, 2022 21:14:01">
                                          <li>
                                              <span class="days">34</span><span class="count-txt">D</span>
                                          </li>
                                          <li>
                                              <span class="hours">09</span><span class="count-txt">H</span>
                                          </li>
                                          <li>
                                              <span class="minutes">32</span><span class="count-txt">M</span>
                                          </li>
                                          <li>
                                              <span class="seconds">32</span><span class="count-txt">S</span>
                                          </li>
                                      </ul> */}
                                                </div>
                                                <div className="nft-content">
                                                    <h4><a href="item-details.html">Mewao com de</a> </h4>
                                                    <div className="price-like d-flex justify-content-between align-items-center">
                                                        <p className="nft-price">Price: <span className="yellow-color">0.34 ETH</span>
                                                        </p>
                                                        <a href="#" className="nft-like"><i className="icofont-heart" />
                                                            278</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="nft-item">
                                        <div className="nft-inner">
                                            {/* nft top part */}
                                            <div className="nft-item-top d-flex justify-content-between align-items-center">
                                                <div className="author-part">
                                                    <ul className="author-list d-flex">
                                                        <li className="single-author d-flex align-items-center">
                                                            <a href="author.html" className="veryfied"><img loading="lazy" src="assets/images/seller/04.png" alt="author-img" /></a>
                                                            <h6><a href="author.html">Gucci Lucas</a></h6>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="more-part">
                                                    <div className=" dropstart">
                                                        <a className=" dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="25,0">
                                                            <i className="icofont-flikr" />
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li><a className="dropdown-item" href="#"><span>
                                                                <i className="icofont-warning" />
                                                            </span> Report </a>
                                                            </li>
                                                            <li><a className="dropdown-item" href="#"><span><i className="icofont-reply" /></span> Share</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* nft-bottom part */}
                                            <div className="nft-item-bottom">
                                                <div className="nft-thumb">
                                                    <img loading="lazy" src="assets/images/nft-item/08.jpg" alt="nft-img" />
                                                    {/* nft countdwon */}
                                                    {/* <ul class="nft-countdown count-down" data-date="July 05, 2022 21:14:01">
                                          <li>
                                              <span class="days">34</span><span class="count-txt">D</span>
                                          </li>
                                          <li>
                                              <span class="hours">09</span><span class="count-txt">H</span>
                                          </li>
                                          <li>
                                              <span class="minutes">32</span><span class="count-txt">M</span>
                                          </li>
                                          <li>
                                              <span class="seconds">32</span><span class="count-txt">S</span>
                                          </li>
                                      </ul> */}
                                                </div>
                                                <div className="nft-content">
                                                    <h4><a href="item-details.html">EUPHORIA de</a> </h4>
                                                    <div className="price-like d-flex justify-content-between align-items-center">
                                                        <p className="nft-price">Price: <span className="yellow-color">0.34 ETH</span>
                                                        </p>
                                                        <a href="#" className="nft-like"><i className="icofont-heart" />
                                                            230</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="load-btn mt-5">
                                <a href="#" className="default-btn move-bottom">
                                    <span>Load More</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ColcheteExploreContent;
