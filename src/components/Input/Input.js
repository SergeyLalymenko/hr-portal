import classNames from 'classnames';
import './Input.scss';

function Input({
        currentValue,
        setCurrentValue,
        boxClassName,
        label,
        status
    }) {
    return (
        <div className={classNames('input-wrapper', { [`${boxClassName}`]: boxClassName })}>
            <input
                className={classNames({ [`${status}`]: status })}
                onChange={({ target: { value } }) => setCurrentValue(value)}
                value={currentValue}
                type="text"
                placeholder="empty"
            />

            <label>{label}</label>
        </div>
    );
}

export default Input;
