const ModalSuccess = () => {
    return (
        <>
            <div className="modal nft-inner fade justify-content-center " id="modalSuccess" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content nft-inner" id="modal-content-success">
                        <div className="justify-content-end align-self-end">
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="text-center">
                            <h6 className="modal-text-success text-center my-3 mx-2 text-uppercase">Confirmed transaction</h6>
                            <lord-icon
                                src="https://cdn.lordicon.com/etwtznjn.json"
                                trigger="loop"
                                colors="primary:#0be881,secondary:#0be881"
                                state="hover"
                                style={{ width: 200, height: 200 }}>
                            </lord-icon>
                            <a href="explore" className="default-btn default-btn-success move-left"><span>Go to Inventory</span> </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ModalSuccess;