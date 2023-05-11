import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUser } from '@fortawesome/free-regular-svg-icons';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import avatarImg from '@assets/img/header/logo.svg';
import './EmployeesTable.scss';

function EmployeesTable({ filters }) {
    console.log(filters);

    return (
        <div className="employees-table">
            <div className="employees-table__card card">
                <div className="card__head">
                    <div className="card__avatar-box">
                        <img src={avatarImg} alt="avatar" />
                    </div>

                    <div className="card__head-data">
                        <h4 className="card__name">Esther Howard</h4>

                        <p className="card__role">Creative Content Writer</p>

                        <p className="card__pay-status">Full Time</p>
                    </div>
                </div>

                <div className="card__body">
                    <div className="card__body-item">
                        <FontAwesomeIcon icon={faCalendar} />

                        <h6>4/4/18</h6>
                    </div>

                    <div className="card__body-item">
                        <FontAwesomeIcon icon={faUser} />

                        <h6>Arlene McCoy</h6>
                    </div>

                    <div className="card__body-item">
                        <FontAwesomeIcon icon={faMapPin} />

                        <h6>Glendale, CA</h6>
                    </div>
                </div>

                <div className="card__actions">
                    <div className="icon">
                        sss
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmployeesTable;
