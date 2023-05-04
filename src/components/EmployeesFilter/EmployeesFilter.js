import { useState } from 'react';
import CheckboxesSelect from '@components/CheckboxesSelect/CheckboxesSelect';
import Modal from '@components/Modal/Modal';
import { faFilter, faUserPlus, faFile, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import './EmployeesFilter.scss';

function EmployeesFilter() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [checkboxesSelects, setCheckboxesSelects] = useState([
        {
            id: 1,
            isRenderForPage: true,
            isRenderForModal: true,
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
            isRenderForPage: true,
            isRenderForModal: true,
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
            isRenderForPage: true,
            isRenderForModal: true,
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
            isRenderForPage: true,
            isRenderForModal: true,
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
            isRenderForPage: true,
            isRenderForModal: true,
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
            isRenderForPage: true,
            isRenderForModal: true,
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

    console.log('isRenderForModal');

    return (
        <>
            <div className="employees-filter">
                <div className="employees-filter__checkboxes-wrapper">
                    <h6>
                        Filter:
                    </h6>

                    {
                        checkboxesSelects.map(({ isRenderForPage, checkboxesSelectTitle, checkboxes, id }) => (
                            isRenderForPage && <CheckboxesSelect
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
                    <button type="button" className="btn btn-tertiary" onClick={() => setIsOpenModal(true)}>
                        <FontAwesomeIcon icon={faFilter} />
                    </button>

                    <div className={classNames('employees-filter__search', { active: isActiveSearch })}>
                        <input placeholder="Search" />

                        <button type="button" className="btn btn-tertiary" onClick={() => setIsActiveSearch(!isActiveSearch)}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>

                    <button type="button" className="btn btn-tertiary">
                        <FontAwesomeIcon icon={faUserPlus} />
                    </button>

                    <button type="button" className="btn btn-tertiary">
                        <FontAwesomeIcon icon={faFile} />
                    </button>
                </div>
            </div>

            <Modal
                open={isOpenModal}
                setOpen={setIsOpenModal}
                modalHeadTitle="Add New Event"
            >
                Content~~~
            </Modal>
        </>
    );
}

export default EmployeesFilter;
