import { useState } from 'react';
import CheckboxesSelect from '@components/CheckboxesSelect/CheckboxesSelect';
import './EmployeesFilter.scss';

function EmployeesFilter() {
    const [checkboxesSelects, setCheckboxesSelects] = useState([
        {
            id: 1,
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
            id: 2,
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

    function onCheckboxesSelectChange(newCheckboxesSelect) {
        const newCheckboxesSelects = checkboxesSelects.map((checkboxesSelect) => (
            checkboxesSelect.id !== newCheckboxesSelect.id ? (
                checkboxesSelect
            ) : (
                newCheckboxesSelect
            )
        ));

        setCheckboxesSelects(newCheckboxesSelects);
    }

    return (
        <div className="employees-filter">
            {
                checkboxesSelects.map(({ checkboxesSelectTitle, checkboxes, id }) => (
                    <CheckboxesSelect
                        key={id}
                        id={id}
                        checkboxesSelectTitle={checkboxesSelectTitle}
                        checkboxes={checkboxes}
                        onCheckboxesSelectChange={onCheckboxesSelectChange}
                    />
                ))
            }
        </div>
    );
}

export default EmployeesFilter;
