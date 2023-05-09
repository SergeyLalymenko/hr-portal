import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { createEvent } from '@store/eventsSlice';
import Modal from '@components/Modal/Modal';
import Select from '@components/Select/Select';
import DatePicker from 'react-datepicker';
import classNames from 'classnames';
import '@styles/reactDatepicker/reactDatepicker.scss';
import './AddEventModal.scss';

function AddEventModal({ isModalOpened, setIsModalOpened, isSuccessModal, setIsSuccessModal }) {
    const dispatch = useDispatch();
    const [areDatepickersOpened, setAreDatepickersOpened] = useState({
        startDate: false,
        endDate: false,
    });
    const eventTypeOptions = [
        {
            id: 1,
            value: '*Anniversary',
            disabled: false,
        },
        {
            id: 2,
            value: '*Anniversary2',
            disabled: false,
        },
    ];
    const sharedWithOptions = [
        {
            id: 1,
            value: '*All Phonexa Employees',
            disabled: false,
        },
        {
            id: 2,
            value: '*All Phonexa Employees2',
            disabled: false,
        },
    ];

    function onDatepickersOpenedToggle(name, bool) {
        setAreDatepickersOpened({
            ...areDatepickersOpened,
            [name]: bool,
        });
    }

    function setTouched(isTouched, fieldName, setFieldTouched) {
        !isTouched && setFieldTouched(fieldName, true);
    }

    function getFieldStatus(error, touched) {
        return error && touched ? 'error' : touched ? 'success' : '';
    }

    function getInitialValues() {
        return {
            eventType: '',
            sharedWith: '',
            description: '',
            startDate: null,
            endDate: null,
        };
    }

    function setCustomFieldValue(value, name, touched, setFieldValue, setFieldTouched) {
        setTouched(touched, name, setFieldTouched);
        setFieldValue(name, value);
    }

    function validateForm(values) {
        const errors = {};

        if(!values.eventType) {
            errors.eventType = 'Required';
        }

        if(!values.sharedWith) {
            errors.sharedWith = 'Required';
        }

        if(!values.description) {
            errors.description = 'Required';
        }

        if(!values.startDate) {
            errors.startDate = 'Required';
        }

        if(!values.endDate) {
            errors.endDate = 'Required';
        }

        return errors;
    }

    function onFormSubmit(values, { setSubmitting }) {
        setSubmitting(true);

        const newEvent = {
            ...values,
            userFullname: 'Some name',
            avatar: 'https://i.postimg.cc/qBQ5RZ2m/avatar.png',
            startDate: Date.parse(values.startDate),
            endDate: Date.parse(values.endDate),
        }

        dispatch(createEvent(newEvent))
            .then(() => setIsSuccessModal(true))
            .finally(() => setSubmitting(false));
    }

    function renderForm() {
        return ({ errors, touched, values, setFieldValue, setFieldTouched, isValid, dirty, isSubmitting }) => (
            <Form className="add-event-modal__form form" autoComplete="off" noValidate>
                <Select
                    boxClassName="form__field-box"
                    selectClassName={classNames(getFieldStatus(errors.eventType, touched.eventType))}
                    options={eventTypeOptions}
                    currentValue={values.eventType}
                    setCurrentValue={(value) => setCustomFieldValue(value, 'eventType', touched.eventType, setFieldValue, setFieldTouched)}
                    label="Event type"
                    name="eventType"
                />

                <Select
                    boxClassName="form__field-box"
                    selectClassName={classNames(getFieldStatus(errors.sharedWith, touched.sharedWith))}
                    options={sharedWithOptions}
                    currentValue={values.sharedWith}
                    setCurrentValue={(value) => setCustomFieldValue(value, 'sharedWith', touched.sharedWith, setFieldValue, setFieldTouched)}
                    label="Shared With"
                    name="sharedWith"
                />

                <div className={classNames('form__field-box', 'form-control', { active: areDatepickersOpened.startDate || values.startDate})}>
                    <DatePicker
                        className={classNames('form__field', 'datepicker', getFieldStatus(errors.startDate, touched.startDate))}
                        selected={values.startDate}
                        maxDate={values.endDate}
                        onChange={(date) => setCustomFieldValue(date, 'startDate', touched.startDate, setFieldValue, setFieldTouched)}
                        onBlur={() => setTouched(touched.startDate, 'startDate', setFieldTouched)}
                        onCalendarOpen={() => onDatepickersOpenedToggle('startDate', true)}
                        onCalendarClose={() => onDatepickersOpenedToggle('startDate', false)}
                        dateFormat="MMM dd, yyyy"
                        name="startDate"
                    />

                    <label>Start Date</label>
                </div>

                <div className={
                    classNames(
                        'form__field-box',
                        'form-control',
                        'form__field-box--textarea',
                        { active: values.description }
                    )
                }>
                    <Field
                        className={
                            classNames(
                                'form__field',
                                'textarea',
                                'form__field--textarea',
                                getFieldStatus(errors.description, touched.description)
                            )
                        }
                        as="textarea"
                        name="description"
                    />

                    <label>Description</label>
                </div>

                <div className={
                    classNames(
                        'form__field-box',
                        'form-control',
                        'form__field-box--end-date',
                        { active: areDatepickersOpened.endDate || values.endDate }
                    )
                }>
                    <DatePicker
                        className={classNames('form__field', 'datepicker', getFieldStatus(errors.endDate, touched.endDate))}
                        selected={values.endDate}
                        minDate={values.startDate}
                        onChange={(date) => setCustomFieldValue(date, 'endDate', touched.endDate, setFieldValue, setFieldTouched)}
                        onBlur={() => setTouched(touched.endDate, 'endDate', setFieldTouched)}
                        onCalendarOpen={() => onDatepickersOpenedToggle('endDate', true)}
                        onCalendarClose={() => onDatepickersOpenedToggle('endDate', false)}
                        dateFormat="MMM dd, yyyy"
                        name="endDate"
                    />

                    <label>End Date</label>
                </div>

                <div className="form__submit-box">
                    <button className={classNames('form__submit', { disabled: !isValid || !dirty || isSubmitting })} disabled={isSubmitting} type="submit">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18.3333 9.66667H12.3333V3.66667C12.3333 3.29833 12.035 3 11.6667 3H10.3333C9.965 3 9.66667 3.29833 9.66667 3.66667V9.66667H3.66667C3.29833 9.66667 3 9.965 3 10.3333V11.6667C3 12.035 3.29833 12.3333 3.66667 12.3333H9.66667V18.3333C9.66667 18.7017 9.965 19 10.3333 19H11.6667C12.035 19 12.3333 18.7017 12.3333 18.3333V12.3333H18.3333C18.7017 12.3333 19 12.035 19 11.6667V10.3333C19 9.965 18.7017 9.66667 18.3333 9.66667Z"
                                fill="white"/>
                        </svg>

                        <h5>
                            Add New Event
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
                        <div className="add-event-modal-success">
                            <div
                                className="add-event-modal-success__close"
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
                        modalHeadTitle="Add New Event"
                    >
                        <div className="add-event-modal">
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

export default AddEventModal;
