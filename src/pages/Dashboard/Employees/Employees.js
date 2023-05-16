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
                    checkboxTitle: "Option 1",
                    checkboxChecked: false,
                },
                {
                    checkboxClassName: "checkboxes-select__checkbox",
                    checkboxName: "2",
                    checkboxTitle: "Option 2",
                    checkboxChecked: false,
                },
            ],
        },
        {
            id: 2,
            additionalProps: {
                isRenderForPage: false,
                filterName: 'role',
            },
            checkboxesSelectTitle: 'Role',
            checkboxes: [
                {
                    checkboxClassName: "checkboxes-select__checkbox",
                    checkboxName: "1",
                    checkboxTitle: "Option 1",
                    checkboxChecked: false,
                },
                {
                    checkboxClassName: "checkboxes-select__checkbox",
                    checkboxName: "2",
                    checkboxTitle: "Option 2",
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
                    checkboxTitle: "Option 1",
                    checkboxChecked: false,
                },
                {
                    checkboxClassName: "checkboxes-select__checkbox",
                    checkboxName: "2",
                    checkboxTitle: "Option 2",
                    checkboxChecked: false,
                },
            ],
        },
        {
            id: 4,
            additionalProps: {
                isRenderForPage: false,
                filterName: 'status',
            },
            checkboxesSelectTitle: 'Status',
            checkboxes: [
                {
                    checkboxClassName: "checkboxes-select__checkbox",
                    checkboxName: "1",
                    checkboxTitle: "Option 1",
                    checkboxChecked: false,
                },
                {
                    checkboxClassName: "checkboxes-select__checkbox",
                    checkboxName: "2",
                    checkboxTitle: "Option 2",
                    checkboxChecked: false,
                },
            ],
        },
        {
            id: 5,
            additionalProps: {
                isRenderForPage: true,
                filterName: 'department',
            },
            checkboxesSelectTitle: 'Department',
            checkboxes: [
                {
                    checkboxClassName: "checkboxes-select__checkbox",
                    checkboxName: "1",
                    checkboxTitle: "Option 1",
                    checkboxChecked: false,
                },
                {
                    checkboxClassName: "checkboxes-select__checkbox",
                    checkboxName: "2",
                    checkboxTitle: "Option 2",
                    checkboxChecked: false,
                },
            ],
        },
        {
            id: 6,
            additionalProps: {
                isRenderForPage: false,
                filterName: 'payStatus',
            },
            checkboxesSelectTitle: 'Pay Status',
            checkboxes: [
                {
                    checkboxClassName: "checkboxes-select__checkbox",
                    checkboxName: "1",
                    checkboxTitle: "Option 1",
                    checkboxChecked: false,
                },
                {
                    checkboxClassName: "checkboxes-select__checkbox",
                    checkboxName: "2",
                    checkboxTitle: "Option 2",
                    checkboxChecked: false,
                },
            ],
        },
        {
            id: 7,
            additionalProps: {
                isRenderForPage: true,
                filterName: 'directReport',
            },
            checkboxesSelectTitle: 'Direct Report',
            checkboxes: [
                {
                    checkboxClassName: "checkboxes-select__checkbox",
                    checkboxName: "1",
                    checkboxTitle: "Option 1",
                    checkboxChecked: false,
                },
                {
                    checkboxClassName: "checkboxes-select__checkbox",
                    checkboxName: "2",
                    checkboxTitle: "Option 2",
                    checkboxChecked: false,
                },
            ],
        },
        {
            id: 8,
            additionalProps: {
                isRenderForPage: false,
                filterName: 'changeColumns',
            },
            checkboxesSelectTitle: 'Add/Remove Columns',
            checkboxes: [
                {
                    checkboxClassName: "checkboxes-select__checkbox",
                    checkboxName: "1",
                    checkboxTitle: "Option 1",
                    checkboxChecked: false,
                },
                {
                    checkboxClassName: "checkboxes-select__checkbox",
                    checkboxName: "2",
                    checkboxTitle: "Option 2",
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
