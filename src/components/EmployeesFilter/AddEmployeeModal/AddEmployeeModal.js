import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { addEmployee } from '@store/employeesSlice';
import Modal from '@components/Modal/Modal';
import Input from '@components/Input/Input';
import Select from '@components/Select/Select';
import classNames from 'classnames';
import './AddEmployeeModal.scss';

function AddEmployeeModal({ isModalOpened, setIsModalOpened, isSuccessModal, setIsSuccessModal }) {
    const dispatch = useDispatch();
    const companyOptions = [
        {
            id: 1,
            value: 'Phonexa',
            disabled: false,
        },
        {
            id: 2,
            value: 'Zero Parallel',
            disabled: false,
        },
    ];
    const roleOptions = [
        {
            id: 1,
            value: 'Admin',
            disabled: false,
        },
        {
            id: 2,
            value: 'User',
            disabled: false,
        },
    ];
    const locationOptions = [
        {
            id: 1,
            value: 'US',
            disabled: false,
        },
        {
            id: 2,
            value: 'UK',
            disabled: false,
        },
    ];
    const departmentOptions = [
        {
            id: 1,
            value: 'Front End',
            disabled: false,
        },
        {
            id: 2,
            value: 'Back End',
            disabled: false,
        },
    ];
    const payStatusOptions = [
        {
            id: 1,
            value: 'payStatus1',
            disabled: false,
        },
        {
            id: 2,
            value: 'payStatus2',
            disabled: false,
        },
        {
            id: 3,
            value: 'payStatus3',
            disabled: false,
        },
    ];

    function setTouched(isTouched, fieldName, setFieldTouched) {
        !isTouched && setFieldTouched(fieldName, true);
    }

    function getFieldStatus(error, touched) {
        return error && touched ? 'error' : touched ? 'success' : '';
    }

    function getInitialValues() {
        return {
            name: '',
            surname: '',
            company: '',
            role: '',
            location: '',
            department: '',
            payStatus: '',
        };
    }

    function setCustomFieldValue(value, name, touched, setFieldValue, setFieldTouched) {
        setTouched(touched, name, setFieldTouched);
        setFieldValue(name, value);
    }

    function validateForm(values) {
        const errors = {};

        if(!values.name) {
            errors.name = 'Required';
        }

        if(!values.surname) {
            errors.surname = 'Required';
        }

        if(!values.company) {
            errors.company = 'Required';
        }

        if(!values.role) {
            errors.role = 'Required';
        }

        if(!values.location) {
            errors.location = 'Required';
        }

        if(!values.department) {
            errors.department = 'Required';
        }

        if(!values.payStatus) {
            errors.payStatus = 'Required';
        }

        return errors;
    }

    function onFormSubmit(values, { setSubmitting }) {
        setSubmitting(true);

        const newEmployee = {
            ...values,
            hireDate: 1684425170,
            manager: 1,
        }

        dispatch(addEmployee(newEmployee))
            .then(() => setIsSuccessModal(true))
            .finally(() => setSubmitting(false));
    }

    function renderForm() {
        return ({ errors, touched, values, setFieldValue, setFieldTouched, isValid, dirty, isSubmitting }) => (
            <Form className="add-employee-modal__form form" autoComplete="off" noValidate>
                <Input
                    boxClassName="form__field-box"
                    currentValue={values.name}
                    setCurrentValue={(value) => setCustomFieldValue(value, 'name', touched.name, setFieldValue, setFieldTouched)}
                    status={classNames(getFieldStatus(errors.name, touched.name))}
                    label="Name"
                    name="name"
                />

                <Input
                    boxClassName="form__field-box"
                    currentValue={values.surname}
                    setCurrentValue={(value) => setCustomFieldValue(value, 'surname', touched.surname, setFieldValue, setFieldTouched)}
                    status={classNames(getFieldStatus(errors.surname, touched.surname))}
                    label="Surname"
                    name="surname"
                />

                <Select
                    boxClassName="form__field-box"
                    selectClassName={classNames(getFieldStatus(errors.company, touched.company))}
                    options={companyOptions}
                    currentValue={values.company}
                    setCurrentValue={(value) => setCustomFieldValue(value, 'company', touched.company, setFieldValue, setFieldTouched)}
                    label="Company"
                    name="company"
                />

                <Select
                    boxClassName="form__field-box"
                    selectClassName={classNames(getFieldStatus(errors.role, touched.role))}
                    options={roleOptions}
                    currentValue={values.role}
                    setCurrentValue={(value) => setCustomFieldValue(value, 'role', touched.role, setFieldValue, setFieldTouched)}
                    label="Role"
                    name="role"
                />

                <Select
                    boxClassName="form__field-box"
                    selectClassName={classNames(getFieldStatus(errors.location, touched.location))}
                    options={locationOptions}
                    currentValue={values.location}
                    setCurrentValue={(value) => setCustomFieldValue(value, 'location', touched.location, setFieldValue, setFieldTouched)}
                    label="Location"
                    name="location"
                />

                <Select
                    boxClassName="form__field-box"
                    selectClassName={classNames(getFieldStatus(errors.department, touched.department))}
                    options={departmentOptions}
                    currentValue={values.department}
                    setCurrentValue={(value) => setCustomFieldValue(value, 'department', touched.department, setFieldValue, setFieldTouched)}
                    label="Department"
                    name="department"
                />

                <Select
                    boxClassName="form__field-box"
                    selectClassName={classNames(getFieldStatus(errors.payStatus, touched.payStatus))}
                    options={payStatusOptions}
                    currentValue={values.payStatus}
                    setCurrentValue={(value) => setCustomFieldValue(value, 'payStatus', touched.payStatus, setFieldValue, setFieldTouched)}
                    label="Pay Status"
                    name="payStatus"
                />

                <div className="form__submit-box">
                    <button className={classNames('form__submit', { disabled: !isValid || !dirty || isSubmitting })} disabled={isSubmitting} type="submit">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18.3333 9.66667H12.3333V3.66667C12.3333 3.29833 12.035 3 11.6667 3H10.3333C9.965 3 9.66667 3.29833 9.66667 3.66667V9.66667H3.66667C3.29833 9.66667 3 9.965 3 10.3333V11.6667C3 12.035 3.29833 12.3333 3.66667 12.3333H9.66667V18.3333C9.66667 18.7017 9.965 19 10.3333 19H11.6667C12.035 19 12.3333 18.7017 12.3333 18.3333V12.3333H18.3333C18.7017 12.3333 19 12.035 19 11.6667V10.3333C19 9.965 18.7017 9.66667 18.3333 9.66667Z"
                                fill="white"/>
                        </svg>

                        <h5>
                            Add New Employee
                        </h5>
                    </button>
                </div>
            </Form>
        );
    }

    return (
        <>
            {
                isSuccessModal ? (
                    <Modal
                        open={isModalOpened}
                        setOpen={setIsModalOpened}
                    >
                        <div className="add-employee-modal-success">
                            <div
                                className="add-employee-modal-success__close"
                                onClick={() => setIsModalOpened(false)}
                            >
                                <div></div>
                                <div></div>
                            </div>

                            <h4>New employee successfully added!</h4>

                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M63 32C63 49.1209 49.1209 63 32 63C14.8791 63 1 49.1209 1 32C1 14.8791 14.8791 1 32 1C49.1209 1 63 14.8791 63 32ZM28.4142 48.4142L51.4142 25.4142C52.1952 24.6332 52.1952 23.3669 51.4142 22.5859L48.5859 19.7575C47.8049 18.9764 46.5385 18.9764 45.7574 19.7575L27 38.5148L18.2426 29.7574C17.4616 28.9764 16.1953 28.9764 15.4141 29.7574L12.5857 32.5858C11.8047 33.3667 11.8047 34.6331 12.5857 35.4141L25.5858 48.4141C26.3669 49.1952 27.6331 49.1952 28.4142 48.4142Z" fill="#47C8A7"/>
                            </svg>
                        </div>
                    </Modal>
                ) : (
                    <Modal
                        open={isModalOpened}
                        setOpen={setIsModalOpened}
                        modalHeadTitle="Add New Employee"
                    >
                        <div className="add-employee-modal">
                            <Formik
                                initialValues={getInitialValues()}
                                validate={validateForm}
                                onSubmit={onFormSubmit}
                            >
                                {renderForm()}
                            </Formik>
                        </div>
                    </Modal>
                )
            }
        </>
    );
}

export default AddEmployeeModal;
