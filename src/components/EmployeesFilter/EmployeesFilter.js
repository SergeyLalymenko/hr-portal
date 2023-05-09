import { useState } from 'react';
import CheckboxesSelect from '@components/CheckboxesSelect/CheckboxesSelect';
import Modal from '@components/Modal/Modal';
import { faFilter, faUserPlus, faFile, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import './EmployeesFilter.scss';

function EmployeesFilter({ checkboxesSelects, setCheckboxesSelects }) {
    const [isOpenModal, setIsOpenModal] = useState(false);
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
                <button type="button" className="employees-filter__button" onClick={() => setIsOpenModal(true)}>
                    <FontAwesomeIcon icon={faFilter} />
                </button>

                <div className={classNames('employees-filter__search', { active: isActiveSearch })}>
                    <input placeholder="Search" />

                    <button type="button" className="employees-filter__button" onClick={() => setIsActiveSearch(!isActiveSearch)}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

                <button type="button" className="employees-filter__button">
                    <FontAwesomeIcon icon={faUserPlus} />
                </button>

                <button type="button" className="employees-filter__button">
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
                            className="modal-body__button modal-body__button--cancel"
                            onClick={() => setIsOpenModal(false)}
                        >
                            Cancel
                        </button>

                        <button
                            className="modal-body__button modal-body__button--apply"
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
