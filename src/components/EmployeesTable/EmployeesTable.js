import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees } from '@store/employeesSlice';
import EmployeeCard from './EmployeeCard/EmployeeCard';
import './EmployeesTable.scss';

function EmployeesTable({ filters }) {
    const dispatch = useDispatch();
    const employees = useSelector(state => state.employees.data);

    useEffect(() => {
        dispatch(fetchEmployees());
    }, [dispatch]);

    function renderEmployees() {
        const filteredEmployees = getFilteredEmployees();

        return filteredEmployees.map((employee) => (
            <EmployeeCard
                key={employee.id}
                employee={employee}
            />
        ));
    }

    function getFilteredEmployees() {
        return employees.filter((employee) => {
            for(let key in filters) {
                if(!filters[key].length) continue;

                if(!filters[key].includes(employee[key])) return false;
            }

            return true;
        })
    }

    return (
        <div className="employees-table">
            {employees && renderEmployees()}
        </div>
    );
}

export default EmployeesTable;
