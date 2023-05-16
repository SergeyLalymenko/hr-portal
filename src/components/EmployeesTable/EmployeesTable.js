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

    return (
        <div className="employees-table">
            {
                employees?.map((employee) => (
                    <EmployeeCard
                        key={employee.id}
                        employee={employee}
                    />
                ))
            }
        </div>
    );
}

export default EmployeesTable;
