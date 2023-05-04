import ModalHead from '@components/Modal/ModalHead/ModalHead';
import classNames from 'classnames';
import './Modal.scss';

function Modal({ open, setOpen, children, modalHeadTitle }) {
    return (
        <div
            className={classNames('modall', { open })}
            onClick={() => setOpen(false)}
        >
            <div
                className="modall__content"
                onClick={(e) => e.stopPropagation()}
            >
                {modalHeadTitle && <ModalHead setOpen={setOpen} title={modalHeadTitle} />}

                {children}
            </div>
        </div>
    );
}

export default Modal;
