const ModalLoading = () => {
    return (
        <>
            <div className="modal nft-inner fade justify-content-center " id="modalLoading" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content nft-inner" id="modal-content-loading">
                        <div className="justify-content-end align-self-end">
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="text-center">
                            <h6 className="modal-text-loading text-center my-3 mx-2 text-uppercase">Confirming transaction</h6>
                            <lord-icon
                                src="https://cdn.lordicon.com/ymrqtsej.json"
                                trigger="loop"
                                colors="primary:#3d8fff,secondary:#3d8fff"
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

export default ModalLoading;