import NftCard from "./nftCard";

const NftSlider = () => {
    return (
        <>
            <div className="nft-slider-wrapper">
                <div className="swiper banner-item-slider-2">
                    <div className="swiper-wrapper">
                        <NftCard />
                        <NftCard />
                        <NftCard />
                        <NftCard />
                    </div>
                </div>
            </div>
        </>
    )
}
export default NftSlider;
