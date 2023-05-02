import { useState } from 'react';
import CheckboxesSelect from '@components/CheckboxesSelect/CheckboxesSelect';
import { faFilter, faUserPlus, faFile, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import './EmployeesFilter.scss';

function EmployeesFilter() {
    const [checkboxesSelects, setCheckboxesSelects] = useState([
        {
            id: 1,
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
            id: 4,
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
            id: 5,
            checkboxesSelectTitle: 'Manager',
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
    ]);
    const [isActiveSearch, setIsActiveSearch] = useState(false);

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
            <div className="employees-filter__checkboxes-wrapper">
                <h6>
                    Filter:
                </h6>

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

            <div className="employees-filter__buttons">
                <button type="button" className="btn btn-tertiary">
                    <FontAwesomeIcon icon={ faFilter } />
                </button>

                <div className={classNames('employees-filter__search', { active: isActiveSearch })}>
                    <input placeholder="Search" />

                    <button type="button" className="btn btn-tertiary" onClick={() => setIsActiveSearch(!isActiveSearch)}>
                        <FontAwesomeIcon icon={ faMagnifyingGlass } />
                    </button>
                </div>

                <button type="button" className="btn btn-tertiary">
                    <FontAwesomeIcon icon={ faUserPlus } />
                </button>

                <button type="button" className="btn btn-tertiary">
                    <FontAwesomeIcon icon={ faFile } />
                </button>
            </div>
        </div>
    );
}

export default EmployeesFilter;
