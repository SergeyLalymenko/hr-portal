import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUser } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope, faMapPin, faPen, faPhoneFlip, faTrash } from '@fortawesome/free-solid-svg-icons';
import avatarImg from '@assets/img/header/logo.svg';
import './EmployeeCard.scss';

function EmployeeCard({ employee }) {
    return (
        <div className="employee-card">
            <div className="employee-card__head">
                <div className="employee-card__avatar-box">
                    <img src={avatarImg} alt="avatar" />
                </div>

                <div className="employee-card__head-data">
                    <h4 className="employee-card__name">{employee.name}</h4>

                    <p className="employee-card__role">{employee.role}</p>

                    <p className="employee-card__pay-status">{employee.payStatus}</p>
                </div>
            </div>

            <div className="employee-card__body">
                <div className="employee-card__body-item">
                    <FontAwesomeIcon icon={faCalendar} />

                    <h6>4/4/18</h6>
                </div>

                <div className="employee-card__body-item">
                    <FontAwesomeIcon icon={faUser} />

                    <h6>{employee.department}</h6>
                </div>

                <div className="employee-card__body-item">
                    <FontAwesomeIcon icon={faMapPin} />

                    <h6>{employee.location}</h6>
                </div>
            </div>

            <div className="employee-card__actions">
                <button
                    className="employee-card__icon employee-card__icon--tertiary"
                    type="button"
                >
                    <FontAwesomeIcon icon={faPhoneFlip} />
                </button>

                <button
                    className="employee-card__icon employee-card__icon--tertiary"
                    type="button"
                >
                    <FontAwesomeIcon icon={faEnvelope} />
                </button>

                <button
                    className="employee-card__icon employee-card__icon--tertiary"
                    type="button"
                >
                    <FontAwesomeIcon icon={faPen} />
                </button>

                <button
                    className="employee-card__icon employee-card__icon--error"
                    type="button"
                >
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    );
}

export default EmployeeCard;
