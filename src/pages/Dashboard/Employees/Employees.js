import EmployeesFilter from '@components/EmployeesFilter/EmployeesFilter';
import './Employees.scss';

function Employees() {
    return (
        <div className="employees">
            <h5>Employees</h5>

            <EmployeesFilter />
        </div>
    );
}

export default Employees;
