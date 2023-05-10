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
                isRenderForModal: true,
            },
            checkboxesSelectTitle: 'Company',
            filterName: 'company',
            checkboxes: [
                {
                    checkboxClassName: "checkboxes-select__checkbox",
                    checkboxName: "1",
                    checkboxTitle: "Option 1",
                    checkboxChecked: true,
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
                isRenderForModal: true,
            },
            checkboxesSelectTitle: 'Role',
            filterName: 'role',
            checkboxes: [
                {
                    checkboxClassName: "checkboxes-select__checkbox",
                    checkboxName: "1",
                    checkboxTitle: "Option 1",
                    checkboxChecked: true,
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
                isRenderForModal: true,
            },
            checkboxesSelectTitle: 'Location',
            filterName: 'location',
            checkboxes: [
                {
                    checkboxClassName: "checkboxes-select__checkbox",
                    checkboxName: "1",
                    checkboxTitle: "Option 1",
                    checkboxChecked: true,
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
                isRenderForModal: true,
            },
            checkboxesSelectTitle: 'Status',
            filterName: 'status',
            checkboxes: [
                {
                    checkboxClassName: "checkboxes-select__checkbox",
                    checkboxName: "1",
                    checkboxTitle: "Option 1",
                    checkboxChecked: true,
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
                isRenderForModal: true,
            },
            checkboxesSelectTitle: 'Department',
            filterName: 'department',
            checkboxes: [
                {
                    checkboxClassName: "checkboxes-select__checkbox",
                    checkboxName: "1",
                    checkboxTitle: "Option 1",
                    checkboxChecked: true,
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
                isRenderForModal: true,
            },
            checkboxesSelectTitle: 'Pay Status',
            filterName: 'payStatus',
            checkboxes: [
                {
                    checkboxClassName: "checkboxes-select__checkbox",
                    checkboxName: "1",
                    checkboxTitle: "Option 1",
                    checkboxChecked: true,
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
                isRenderForModal: true,
            },
            checkboxesSelectTitle: 'Direct Report',
            filterName: 'directReport',
            checkboxes: [
                {
                    checkboxClassName: "checkboxes-select__checkbox",
                    checkboxName: "1",
                    checkboxTitle: "Option 1",
                    checkboxChecked: true,
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
                isRenderForModal: true,
            },
            checkboxesSelectTitle: 'Add/Remove Columns',
            filterName: 'changeColumns',
            checkboxes: [
                {
                    checkboxClassName: "checkboxes-select__checkbox",
                    checkboxName: "1",
                    checkboxTitle: "Option 1",
                    checkboxChecked: true,
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
        const employeesFilters = [];

        checkboxesSelects.forEach((checkboxesSelect) => {
            const filterItem = new Map();
            const filterValues = [];

            checkboxesSelect.checkboxes.forEach((checkbox) => {
                checkbox.checkboxChecked && filterValues.push(checkbox.checkboxTitle);
            });

            filterItem.set(checkboxesSelect['filterName'], filterValues);


            employeesFilters.push(filterItem);
        });

        console.log('чекбоксы хуево работают, новое свойство filterName теряют');
        console.log(employeesFilters);

        return checkboxesSelects;
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
