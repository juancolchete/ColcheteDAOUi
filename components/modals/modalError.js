const ModalError = () => {
    return (
        <>
            <div className="modal nft-inner fade justify-content-center " id="modalError" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content nft-inner" id="modal-content-error">
                        <div className="justify-content-end align-self-end">
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="text-center">
                            <h6 className="modal-text-error text-center my-3 mx-2 text-uppercase">Error</h6>
                           
                            <lord-icon
                                src="https://cdn.lordicon.com/tdrtiskw.json"
                                trigger="loop"
                                delay="2000"
                                colors="primary:#c8232c,secondary:#c8232c"
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

export default ModalError;