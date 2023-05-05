import ModalHead from '@components/Modal/ModalHead/ModalHead';
import classNames from 'classnames';
import './Modal.scss';

function Modal({ open, setOpen, children, modalHeadTitle }) {
    function onModalClick({ target }) {
        target.classList.contains('modall') && setOpen(false);
    }

    return (
        <div
            className={classNames('modall', { open })}
            onClick={onModalClick}
        >
            <div className="modall__content">
                {modalHeadTitle && <ModalHead setOpen={setOpen} title={modalHeadTitle} />}

                {children}
            </div>
        </div>
    );
}

export default Modal;
