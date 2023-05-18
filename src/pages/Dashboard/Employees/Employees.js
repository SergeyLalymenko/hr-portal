import { useState } from 'react';
import EmployeesFilter from '@components/EmployeesFilter/EmployeesFilter';
import EmployeesTable from '@components/EmployeesTable/EmployeesTable';
import './Employees.scss';

function Employees() {
    const [checkboxesSelects, setCheckboxesSelects] = useState([
        {
            id: 1,
            additionalProps: {
                isRenderForPage: true,
                filterName: 'company',
            },
            checkboxesSelectTitle: 'Company',
            checkboxes: [
                {
                    checkboxClassName: "checkboxes-select__checkbox",
                    checkboxName: "1",
                    checkboxTitle: "Phonexa",
                    checkboxChecked: false,
                },
                {
                    checkboxClassName: "checkboxes-select__checkbox",
                    checkboxName: "2",
                    checkboxTitle: "Zero Parallel",
                    checkboxChecked: false,
                },
            ],
        },
        {
            id: 2,
            additionalProps: {
                isRenderForPage: true,
                filterName: 'role',
            },
            checkboxesSelectTitle: 'Role',
            checkboxes: [
                {
                    checkboxClassName: "checkboxes-select__checkbox",
                    checkboxName: "1",
                    checkboxTitle: "Admin",
                    checkboxChecked: false,
                },
                {
                    checkboxClassName: "checkboxes-select__checkbox",
                    checkboxName: "2",
                    checkboxTitle: "User",
                    checkboxChecked: false,
                },
            ],
        },
        {
            id: 3,
            additionalProps: {
                isRenderForPage: true,
                filterName: 'location',
            },
            checkboxesSelectTitle: 'Location',
            checkboxes: [
                {
                    checkboxClassName: "checkboxes-select__checkbox",
                    checkboxName: "1",
                    checkboxTitle: "US",
                    checkboxChecked: false,
                },
                {
                    checkboxClassName: "checkboxes-select__checkbox",
                    checkboxName: "2",
                    checkboxTitle: "UK",
                    checkboxChecked: false,
                },
            ],
        },
        {
            id: 4,
            additionalProps: {
                isRenderForPage: true,
                filterName: 'department',
            },
            checkboxesSelectTitle: 'Department',
            checkboxes: [
                {
                    checkboxClassName: "checkboxes-select__checkbox",
                    checkboxName: "1",
                    checkboxTitle: "Front End",
                    checkboxChecked: false,
                },
                {
                    checkboxClassName: "checkboxes-select__checkbox",
                    checkboxName: "2",
                    checkboxTitle: "Back End",
                    checkboxChecked: false,
                },
            ],
        },
        {
            id: 5,
            additionalProps: {
                isRenderForPage: false,
                filterName: 'payStatus',
            },
            checkboxesSelectTitle: 'Pay Status',
            checkboxes: [
                {
                    checkboxClassName: "checkboxes-select__checkbox",
                    checkboxName: "1",
                    checkboxTitle: "payStatus1",
                    checkboxChecked: false,
                },
                {
                    checkboxClassName: "checkboxes-select__checkbox",
                    checkboxName: "2",
                    checkboxTitle: "payStatus2",
                    checkboxChecked: false,
                },
                {
                    checkboxClassName: "checkboxes-select__checkbox",
                    checkboxName: "3",
                    checkboxTitle: "payStatus3",
                    checkboxChecked: false,
                },
            ],
        },
    ]);

    function getEmployeesFilters() {
        const employeesFilters = new Map();

        checkboxesSelects.forEach((checkboxesSelect) => {
            const filterValues = [];

            checkboxesSelect.checkboxes.forEach((checkbox) => {
                checkbox.checkboxChecked && filterValues.push(checkbox.checkboxTitle);
            });

            employeesFilters.set(checkboxesSelect.additionalProps.filterName, filterValues);
        });

        return Object.fromEntries(employeesFilters);
    }

    return (
        <div className="employees">
            <h5>Employees</h5>

            <EmployeesFilter
                checkboxesSelects={checkboxesSelects}
                setCheckboxesSelects={setCheckboxesSelects}
            />

            <EmployeesTable filters={getEmployeesFilters()} />
        </div>
    );
}

export default Employees;
