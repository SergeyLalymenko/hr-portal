import classNames from 'classnames';
import './Checkbox.scss';

function Checkbox({ checkboxClassName, checkboxName, checkboxTitle, checkboxChecked, onCheckboxChange }) {
    function getCheckboxClassName() {
        return checkboxClassName ? checkboxClassName : '';
    }

    return (
        <label className={classNames('checkbox', getCheckboxClassName())}>
            <input
                type="checkbox"
                name={checkboxName}
                checked={checkboxChecked}
                onChange={onCheckboxChange}
            />

            <span></span>

            <p>{checkboxTitle}</p>
        </label>
    );
}

export default Checkbox;
