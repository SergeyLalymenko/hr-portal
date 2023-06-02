import { useState } from 'react';
import AddEmployeeModal from "./AddEmployeeModal/AddEmployeeModal";
import Modal from '@components/Modal/Modal';
import Input from '@components/Input/Input';
import CheckboxesSelect from '@components/CheckboxesSelect/CheckboxesSelect';
import { faFilter, faUserPlus, faFile, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import './EmployeesFilter.scss';

function EmployeesFilter({ checkboxesSelects, setCheckboxesSelects }) {
    const [isOpenFilterModal, setIsOpenFilterModal] = useState(false);
    const [isOpenEmployeeModal, setIsOpenEmployeeModal] = useState(false);
    const [isSuccessEmployeeModal, setIsSuccessEmployeeModal] = useState(false);
    const [isActiveSearch, setIsActiveSearch] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    function onCheckboxesSelectChange(newCheckboxesSelect) {
        const newCheckboxesSelects = checkboxesSelects.map((checkboxesSelect) => (
            checkboxesSelect.id !== newCheckboxesSelect.id ? checkboxesSelect : newCheckboxesSelect
        ));

        setCheckboxesSelects(newCheckboxesSelects);
    }

    function onEmployeeModalOpen() {
        isSuccessEmployeeModal && setIsSuccessEmployeeModal(false);

        setIsOpenEmployeeModal(true);
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
                <button type="button" className="employees-filter__button" onClick={() => setIsOpenFilterModal(true)}>
                    <FontAwesomeIcon icon={faFilter} />
                </button>

                <div className={classNames('employees-filter__search', { active: isActiveSearch })}>
                    {/*<input placeholder="Search" />*/}

                    <Input
                        currentValue={searchValue}
                        setCurrentValue={(value) => setSearchValue(value)}
                        boxClassName="employees-filter__search-component"
                        label="Search"
                    />

                    <button
                        onClick={() => setIsActiveSearch(!isActiveSearch)}
                        type="button"
                        className="employees-filter__button"
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

                <button
                    onClick={onEmployeeModalOpen}
                    type="button"
                    className="employees-filter__button"
                >
                    <FontAwesomeIcon icon={faUserPlus} />
                </button>

                <button type="button" className="employees-filter__button">
                    <FontAwesomeIcon icon={faFile} />
                </button>
            </div>

            <Modal
                open={isOpenFilterModal}
                setOpen={setIsOpenFilterModal}
                modalHeadTitle="Advanced Filters"
            >
                <div className="employees-filter__modal-body modal-body">
                    {
                        checkboxesSelects.map(({ additionalProps, checkboxesSelectTitle, checkboxes, id }) => (
                            <div key={id} className="modal-body__field-box">
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
                            onClick={() => setIsOpenFilterModal(false)}
                        >
                            Cancel
                        </button>

                        <button
                            className="modal-body__button modal-body__button--apply"
                            onClick={() => setIsOpenFilterModal(false)}
                        >
                            Apply Filters
                        </button>
                    </div>
                </div>
            </Modal>

            <AddEmployeeModal
                isModalOpened={isOpenEmployeeModal}
                setIsModalOpened={setIsOpenEmployeeModal}
                isSuccessModal={isSuccessEmployeeModal}
                setIsSuccessModal={setIsSuccessEmployeeModal}
            />
        </div>
    );
}

export default EmployeesFilter;
