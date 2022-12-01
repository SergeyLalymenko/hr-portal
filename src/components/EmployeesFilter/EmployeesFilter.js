import { useState } from 'react';
import CheckboxesSelect from '@components/CheckboxesSelect/CheckboxesSelect';
import './EmployeesFilter.scss';

function EmployeesFilter() {
    const [checkboxesSelects, setCheckboxesSelects] = useState([
        {
            checkboxesSelectTitle: 'Company',
            checkboxes: [
                {
                    checkboxClassName: "checkboxes-select__checkbox",
                    checkboxName: "phonexa",
                    checkboxTitle: "Phonexa",
                    checkboxChecked: true,
                },
                {
                    checkboxClassName: "checkboxes-select__checkbox",
                    checkboxName: "phonexa2",
                    checkboxTitle: "Phonexa2",
                    checkboxChecked: false,
                },
            ],
        },
        {
            checkboxesSelectTitle: 'Company2',
            checkboxes: [
                {
                    checkboxClassName: "checkboxes-select__checkbox",
                    checkboxName: "phonexa3",
                    checkboxTitle: "Phonexa3",
                    checkboxChecked: true,
                },
                {
                    checkboxClassName: "checkboxes-select__checkbox",
                    checkboxName: "phonexa4",
                    checkboxTitle: "Phonexa4",
                    checkboxChecked: false,
                },
            ],
        },
    ]);

    return (
        <div className="employees-filter">
            {/*<CheckboxesSelect*/}
            {/*    checkboxesData={checkboxesData}*/}
            {/*    setCheckboxesData={setCheckboxesData}*/}
            {/*/>*/}
        </div>
    );
}

export default EmployeesFilter;
