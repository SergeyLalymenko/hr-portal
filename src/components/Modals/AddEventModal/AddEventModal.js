import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { createEvent } from '../../../store/eventsSlice';
import DatePicker from 'react-datepicker';
import '../../../styles/reactDatepicker/reactDatepicker.scss';
import './AddEventModal.scss';

function AddEventModal({ toggleIsModalOpened }) {
    const dispatch = useDispatch();
    const [areDatepickersOpened, setAreDatepickersOpened] = useState({
        startDate: false,
        endDate: false,
    });

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
        return ({ errors, touched, isSubmitting, values, setFieldValue, setFieldTouched, isValid, dirty }) => (
            <Form className="add-event-modal__form form flex-lg-column" autoComplete="off" noValidate>
                <div className={`form__field-box ${values.eventType ? 'active' : ''}`}>
                    <Field className={`form__field
                            ${getFieldStatus(errors.eventType, touched.eventType)}
                       `}
                       name="eventType"
                       as="select"
                    >
                        <option value="" disabled></option>
                        <option value="*Anniversary">*Anniversary</option>
                        <option value="*Anniversary2">*Anniversary2</option>
                    </Field>

                    <label>Event Type</label>
                </div>

                <div className={`form__field-box ${values.sharedWith ? 'active' : ''}`}>
                    <Field className={`form__field
                            ${getFieldStatus(errors.sharedWith, touched.sharedWith)}
                       `}
                       name="sharedWith"
                       as="select"
                    >
                        <option value="" disabled></option>
                        <option value="*Anniversary">*All Phonexa Employees</option>
                        <option value="*Anniversary2">*All Phonexa Employees2</option>
                    </Field>

                    <label>Shared With</label>
                </div>

                <div className={`form__field-box ${areDatepickersOpened.startDate || values.startDate ? 'active' : ''}`}>
                    <DatePicker
                        className={`form__field
                            ${getFieldStatus(errors.startDate, touched.startDate)}
                        `}
                        selected={values.startDate}
                        maxDate={values.endDate}
                        onChange={(date) => {
                            setTouched(touched.startDate, 'startDate', setFieldTouched);
                            setFieldValue('startDate', date);
                        }}
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
                        onChange={(date) => {
                            setTouched(touched.endDate, 'endDate', setFieldTouched);
                            setFieldValue('endDate', date);
                        }}
                        onBlur={() => setTouched(touched.endDate, 'endDate', setFieldTouched)}
                        onCalendarOpen={() => onDatepickersOpenedToggle('endDate', true)}
                        onCalendarClose={() => onDatepickersOpenedToggle('endDate', false)}
                        dateFormat="MMM dd, yyyy"
                        name="endDate"
                    />

                    <label>End Date</label>
                </div>

                <div className="form__submit-box">
                    <button className={`form__submit ${!isValid || !dirty ? 'disabled' : ''}`} id="addEventBtn" type="submit">
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

                    <Formik id="addEventForm"
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