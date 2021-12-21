import React from 'react';

function Modal(props) {

    const { isOpenForm, onCloseModal } = props

    const handleToggleModal = () => {
        if (onCloseModal) {
            onCloseModal()
        }
    }

    return (
        <div className={`modal ${isOpenForm ? 'active' : ''}`} >
            <div className="modal__overlay" onClick={handleToggleModal} />
            <div className="modal__body">
                <div className="modal__inner">
                    {props.children}
                </div>
            </div>
        </div >
    );
}

export default Modal;