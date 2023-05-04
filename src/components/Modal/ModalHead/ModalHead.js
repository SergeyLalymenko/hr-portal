import './ModalHead.scss';

function ModalHead({ setOpen, title }) {
    return (
        <div className="modal-head">
            <h4>{title}</h4>

            <div
                className="modal-head__close"
                onClick={() => setOpen(false)}
            >
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default ModalHead;
