import Checkbox from '@components/Checkbox/Checkbox';
import './CheckboxesSelect.scss';

function CheckboxesSelect({ id, checkboxesSelectTitle, checkboxes, onCheckboxesSelectChange }) {
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
        <div className="checkboxes-select">
            <h6>{checkboxesSelectTitle}</h6>

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
