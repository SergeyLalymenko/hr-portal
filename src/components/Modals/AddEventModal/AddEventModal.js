import './AddEventModal.scss';

function AddEventModal({ toggleIsModalOpened }) {
    function checkTargetEl(e) {
        e.target.classList.contains('modal') && toggleIsModalOpened();
    }

    return (
        <div className="modal" onClick={checkTargetEl}>
            <div className="modal__content">
                <form className="add-event-modal">
                    FORM
                </form>
            </div>
        </div>
    );
}

export default AddEventModal;