import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { createEvent } from '../../../store/eventsSlice';
import Select from '../../Select/Select';
import DatePicker from 'react-datepicker';
import '../../../styles/reactDatepicker/reactDatepicker.scss';
import './AddEventModal.scss';

function AddEventModal({ toggleIsModalOpened }) {
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

    function checkTargetEl(e) {
        e.target.classList.contains('modal') && toggleIsModalOpened();
    }

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

    function onFormSubmit(values) {
        const newEvent = {
            ...values,
            userFullname: 'Some name',
            avatar: 'https://i.postimg.cc/qBQ5RZ2m/avatar.png',
            startDate: Date.parse(values.startDate),
            endDate: Date.parse(values.endDate),
        }

        dispatch(createEvent(newEvent))
            .then(() => toggleIsModalOpened());
    }

    function renderForm() {
        return ({ errors, touched, values, setFieldValue, setFieldTouched, isValid, dirty }) => (
            <Form className="add-event-modal__form form" autoComplete="off" noValidate>
                <Select
                    boxClassName="form__select-box"
                    selectClassName={`${getFieldStatus(errors.eventType, touched.eventType)}`}
                    options={eventTypeOptions}
                    currentValue={values.eventType}
                    setCurrentValue={(value) => setCustomFieldValue(value, 'eventType', touched.eventType, setFieldValue, setFieldTouched)}
                    label="Event type"
                    name="eventType"
                />

                <Select
                    boxClassName="form__select-box"
                    selectClassName={`${getFieldStatus(errors.sharedWith, touched.sharedWith)}`}
                    options={sharedWithOptions}
                    currentValue={values.sharedWith}
                    setCurrentValue={(value) => setCustomFieldValue(value, 'sharedWith', touched.sharedWith, setFieldValue, setFieldTouched)}
                    label="Shared With"
                    name="sharedWith"
                />

                <div className={`form__field-box ${areDatepickersOpened.startDate || values.startDate ? 'active' : ''}`}>
                    <DatePicker
                        className={`form__field
                            ${getFieldStatus(errors.startDate, touched.startDate)}
                        `}
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

                <div className={`form__field-box form__field-box--textarea ${values.description ? 'active' : ''}`}>
                    <Field className={`form__field form__field--textarea
                            ${getFieldStatus(errors.description, touched.description)}
                        `}
                        as="textarea"
                        name="description"
                    />

                    <label>Description</label>
                </div>

                <div className={`form__field-box form__field-box--end-date ${areDatepickersOpened.endDate || values.endDate ? 'active' : ''}`}>
                    <DatePicker
                        className={`form__field
                            ${getFieldStatus(errors.endDate, touched.endDate)}
                        `}
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
                    <button className={`form__submit ${!isValid || !dirty ? 'disabled' : ''}`} type="submit">
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
        <div className="modal" onClick={checkTargetEl}>
            <div className="modal__content">
                <div className="add-event-modal">
                    <div className="add-event-modal__head">
                        <h4>Add New Event</h4>

                        <div className="add-event-modal__close" onClick={toggleIsModalOpened}>
                            <div></div>
                            <div></div>
                        </div>
                    </div>

                    <Formik
                        initialValues={getInitialValues()}
                        validate={validateForm}
                        onSubmit={onFormSubmit}
                    >
                        {renderForm()}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default AddEventModal;