import WalletCard from '../../walletCard';

const ColcheteWalletContent = () => {
    return (
        <>
            <section className="wallet-section padding-top padding-bottom">
                <div className="container">
                    <div className="wallet-inner">
                        <div className="wallet-title">
                            <h3 className="mb-3">Connect your wallet</h3>
                            <p>Connect with one of available wallet providers or <a href="signup.html">create a
                                new wallet</a></p>
                        </div>
                        <div className="row g-3">
                            <WalletCard />
                        </div>
                        <p className="mt-5 mb-0 wallet-notice"><span className="me-1 theme-color"><i className="icofont-bulb-alt" /></span> We
                            do not own your private keys and cannot access your funds
                            without your confirmation.</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ColcheteWalletContent;