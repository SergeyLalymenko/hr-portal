import classNames from 'classnames';
import './Select.scss';

function Select({
        boxClassName,
        selectClassName,
        options,
        currentValue,
        setCurrentValue,
        label
    }) {
    function onSelectItemClick(option) {
        if(!option.disabled) {
            setCurrentValue(option.value);
        }
    }

    return (
        <div className={classNames(
            'select-box',
            { [`${boxClassName}`]: boxClassName }
        )}>
            <div className={classNames(
                'select',
                { choosed: currentValue },
                { [`${selectClassName}`]: selectClassName }
            )}>
                <div className="select__head">
                    <span className="select__current">
                        {currentValue}
                    </span>

                    <div className="select__line"></div>
                </div>

                <div className="select__body">
                    {
                        options.map((option) => {
                            return (
                                <div
                                    className="select__item"
                                    key={option.id}
                                    onClick={() => onSelectItemClick(option)}
                                >
                                    {option.value}
                                </div>
                            );
                        })
                    }
                </div>
            </div>

            <label>{label}</label>
        </div>
    );
}

export default Select;
