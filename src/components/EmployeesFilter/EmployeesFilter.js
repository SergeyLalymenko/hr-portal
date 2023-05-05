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
                    checkboxesSelects.map(({ additionalProps, checkboxesSelectTitle, checkboxes, id }) => (
                        additionalProps.isRenderForPage && <CheckboxesSelect
                            key={id}
                            id={id}
                            additionalProps={additionalProps}
                            checkboxesSelectTitle={checkboxesSelectTitle}
                            checkboxes={checkboxes}
                            onCheckboxesSelectChange={onCheckboxesSelectChange}
                        />
                    ))
                }
            </div>

            <div className="employees-filter__buttons">
                <button type="button" className="btn btn-tertiary icon" onClick={() => setIsOpenModal(true)}>
                    <FontAwesomeIcon icon={faFilter} />
                </button>

                <div className={classNames('employees-filter__search', { active: isActiveSearch })}>
                    <input placeholder="Search" />

                    <button type="button" className="btn btn-tertiary icon" onClick={() => setIsActiveSearch(!isActiveSearch)}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

                <button type="button" className="btn btn-tertiary icon">
                    <FontAwesomeIcon icon={faUserPlus} />
                </button>

                <button type="button" className="btn btn-tertiary icon">
                    <FontAwesomeIcon icon={faFile} />
                </button>
            </div>

            <Modal
                open={isOpenModal}
                setOpen={setIsOpenModal}
                modalHeadTitle="Advanced Filters"
            >
                <div className="employees-filter__modal-body modal-body">
                    {
                        checkboxesSelects.map(({ additionalProps, checkboxesSelectTitle, checkboxes, id }) => (
                            additionalProps.isRenderForModal && <div key={id} className="form-control modal-body__field-box">
                                <CheckboxesSelect
                                    id={id}
                                    additionalProps={additionalProps}
                                    checkboxesSelectTitle={checkboxesSelectTitle}
                                    checkboxes={checkboxes}
                                    onCheckboxesSelectChange={onCheckboxesSelectChange}
                                />
                            </div>
                        ))
                    }

                    <div className="modal-body__buttons">
                        <button
                            className="btn btn-tertiary outline"
                            onClick={() => setIsOpenModal(false)}
                        >
                            Cancel
                        </button>

                        <button
                            className="btn btn-tertiary"
                            onClick={() => setIsOpenModal(false)}
                        >
                            Apply Filters
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default EmployeesFilter;
