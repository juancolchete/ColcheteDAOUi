const ModalConfirm = () => {
    return (
        <>
            <div className="modal nft-inner fade justify-content-center " id="modalConfirm" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content nft-inner" id="modal-content-confirm">
                        <div className="justify-content-end align-self-end">
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="text-center">
                            <h6 className="text-center my-3 mx-2 text-uppercase modal-text-confirm">Confirm the transaction <br /> in your wallet</h6>

                            <lord-icon
                                src="https://cdn.lordicon.com/ufknjsoh.json"
                                trigger="loop"
                                delay="2000"
                                colors="primary:#ffc107,secondary:#ffc107"
                                state="hover"
                                style={{ width: 200, height: 200 }}>
                            </lord-icon>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ModalConfirm;