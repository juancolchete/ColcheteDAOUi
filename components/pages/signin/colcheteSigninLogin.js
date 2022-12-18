const ColcheteSigninLogin = () => {
    return (
        <>
            <div className="login-section padding-top padding-bottom">
                <div className=" container">
                    <div className="row g-5 align-items-center flex-md-row-reverse">
                        <div className="col-lg-5">
                            <div className="account-wrapper">
                                <h3 className="title">Sign In</h3>
                                <form className="account-form">
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label htmlFor="floatingInput">Email address</label>
                                    </div>
                                    <div className="form-floating">
                                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>
                                    <div className="form-group">
                                        <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                                            <div className="checkgroup">
                                                <input type="checkbox" name="remember" id="remember" />
                                                <label htmlFor="remember">Remember Me</label>
                                            </div>
                                            <a href="forgot-pass.html">Forgot Password?</a>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button className="d-block default-btn move-top"><span>Signin Now</span></button>
                                    </div>
                                </form>
                                <div className="account-bottom">
                                    <span className="d-block cate pt-10">Don’t Have any Account? <a href="signup.html"> Sign
                                        Up</a></span>
                                    <span className="or"><span>or</span></span>
                                    <h5 className="subtitle">Login With Social Media</h5>
                                    <ul className="social-media social-color lab-ul d-flex justify-content-center">
                                        <li>
                                            <a href="#" className="facebook"><i className="icofont-facebook" /></a>
                                        </li>
                                        <li>
                                            <a href="#" className="twitter"><i className="icofont-twitter" /></a>
                                        </li>
                                        <li>
                                            <a href="#" className="linkedin"><i className="icofont-linkedin" /></a>
                                        </li>
                                        <li>
                                            <a href="#" className="instagram"><i className="icofont-instagram" /></a>
                                        </li>
                                        <li>
                                            <a href="#" className="pinterest"><i className="icofont-pinterest" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="account-img">
                                <img src="assets/images/account/01.png" alt="shape-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ColcheteSigninLogin;
