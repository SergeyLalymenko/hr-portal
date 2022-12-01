import classNames from 'classnames';
import './Checkbox.scss';

function Checkbox({ boxClassName, name, title, checked, onCheckboxChange }) {
    function getBoxClassName() {
        return boxClassName ? boxClassName : '';
    }

    return (
        <label className={classNames('checkbox', getBoxClassName())}>
            <input
                type="checkbox"
                name={name}
                checked={checked}
                onChange={onCheckboxChange}
            />

            <span></span>

            <p>{title}</p>
        </label>
    );
}

export default Checkbox;
