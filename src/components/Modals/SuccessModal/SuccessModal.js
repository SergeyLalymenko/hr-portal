import './SuccessModal.scss';

function SuccessModal({ title, closeSuccessModal }) {
    function closeModal(e) {
        e.target.classList.contains('modal') && closeSuccessModal();
    }

    return (
        <div className="modal" onClick={closeModal}>
            <div className="modal__content">
                <div className="success-modal">
                    <div className="success-modal__close modal__close" onClick={closeSuccessModal}>
                        <div></div>
                        <div></div>
                    </div>

                    <h4>{title}</h4>

                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M63 32C63 49.1209 49.1209 63 32 63C14.8791 63 1 49.1209 1 32C1 14.8791 14.8791 1 32 1C49.1209 1 63 14.8791 63 32ZM28.4142 48.4142L51.4142 25.4142C52.1952 24.6332 52.1952 23.3669 51.4142 22.5859L48.5859 19.7575C47.8049 18.9764 46.5385 18.9764 45.7574 19.7575L27 38.5148L18.2426 29.7574C17.4616 28.9764 16.1953 28.9764 15.4141 29.7574L12.5857 32.5858C11.8047 33.3667 11.8047 34.6331 12.5857 35.4141L25.5858 48.4141C26.3669 49.1952 27.6331 49.1952 28.4142 48.4142Z" fill="#47C8A7"/>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default SuccessModal;
