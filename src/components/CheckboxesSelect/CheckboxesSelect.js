import { useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import Checkbox from '@components/Checkbox/Checkbox';
import './CheckboxesSelect.scss';

function CheckboxesSelect({ id, checkboxesSelectTitle, checkboxes, onCheckboxesSelectChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const checkboxesSelectRef = useRef();

    const onDocumentClick = useCallback((e) => {
        if(e.target.closest('.checkboxesSelect') === checkboxesSelectRef.current) return;
        console.log('тут какая-то проблема, когда падает сюда код то другие селекты срабатывают по 2 раза, не понимаю почему');
        setIsOpen(false);
    }, [setIsOpen, checkboxesSelectRef]);

    useEffect(() => {
        document.addEventListener('click', onDocumentClick);

        return () => {
            document.addEventListener('click', onDocumentClick);
        }
    }, [onDocumentClick]);

    function onCheckboxChange(e) {
        const { name, checked } = e.target;

        const newCheckboxes = checkboxes.map((checkbox) => checkbox.checkboxName !== name ? checkbox : {
            ...checkbox,
            checkboxChecked: checked,
        });

        const newCheckboxesSelect = {
            id,
            checkboxesSelectTitle,
            checkboxes: newCheckboxes,
        };

        onCheckboxesSelectChange(newCheckboxesSelect);
    }

    return (
        <div
            className={classNames('checkboxes-select', 'checkboxesSelect', { open: isOpen })}
            ref={checkboxesSelectRef}
        >
            <h6 onClick={() => setIsOpen(!isOpen)}>
                {checkboxesSelectTitle}
            </h6>

            <div className="checkboxes-select__dropdown-list">
                {
                    checkboxes.map((checkbox, i) => (
                        <Checkbox
                            key={i}
                            checkboxClassName={checkbox.checkboxClassName}
                            checkboxName={checkbox.checkboxName}
                            checkboxTitle={checkbox.checkboxTitle}
                            checkboxChecked={checkbox.checkboxChecked}
                            onCheckboxChange={onCheckboxChange}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default CheckboxesSelect;
