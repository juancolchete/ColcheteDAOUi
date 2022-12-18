import ColcheteHead from '../components/global/ColcheteHead';
import ColcheteHeader from '../components/global/ColcheteHeader';

import { useEffect } from 'react';

import ModalConfirm from "../components/modals/modalConfirm";
import ModalError from "../components/modals/modalError";
import ModalLoading from "../components/modals/modalLoading";
 import ModalSuccess from "../components/modals/modalSuccess";




function openModal(modalName) {
    modal = document.getElementById(modalName);
    modal.classList.add('modal-active');

}


export default function LayoutPanel() {
    return (

        <>
            <ColcheteHead />
            <ColcheteHeader />
            <ModalConfirm />
            <ModalError />
            <ModalLoading />
            <ModalSuccess />{/*
            
            <ModalSuccessMsg /> */}




            <div className='container'>
                <div className="row">
                    <div className="col">
                        <h3 className='text-white text-center fw-bold mt-5 pt-5'>MODAIS DE TRANSAÇÃO</h3>

                        <button className="bold m-3 btn-block btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalConfirm">
                            Modal Confirm
                        </button>

                        <button className="bold m-3 btn-block btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalError">
                            Modal Error
                        </button>

                        
                        <button className="bold m-3 btn-block btn btn-info" data-bs-toggle="modal" data-bs-target="#modalLoading">
                            Modal Loading
                        </button>

                        <button className="bold m-3 btn-block btn btn-success" data-bs-toggle="modal" data-bs-target="#modalSuccess">
                            Modal Success
                        </button>


                    </div>
                </div>
            </div>


        </>
    )
}
