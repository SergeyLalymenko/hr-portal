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

    return (
        <div className="employees">
            <h5>Employees</h5>

            <EmployeesFilter
                checkboxesSelects={checkboxesSelects}
                setCheckboxesSelects={setCheckboxesSelects}
            />

            <EmployeesTable filters={checkboxesSelects} />
        </div>
    );
}

export default Employees;
