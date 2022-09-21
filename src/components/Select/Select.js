import './Select.scss';

function Select({
        boxClassName,
        selectClassName,
        options,
        currentValue,
        setCurrentValue,
        label
    }) {
    function getBoxClassName() {
        return boxClassName ? boxClassName : '';
    }

    function getSelectClassName() {
        return selectClassName ? selectClassName : '';
    }

    function getChoosedClass() {
        return currentValue ? 'choosed' : '';
    }

    function onSelectItemClick(option) {
        if(!option.disabled) {
            setCurrentValue(option.value);
        }
    }

    return (
        <div className={`field-box ${getBoxClassName()}`}>
            <div className={`select ${getChoosedClass()} ${getSelectClassName()}`}>
                <div className="select__head">
                    <span className="select__current">{currentValue}</span>

                    <div className="select__line"></div>
                </div>

                <div className="select__body">
                    {
                        options.map((option) => {
                            return (
                                <div className="select__item" key={option.id} onClick={() => onSelectItemClick(option)}>
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
