import './CheckboxesSelect.scss';
import Checkbox from "../Checkbox/Checkbox";

function CheckboxesSelect() {
    return (
        <div className="checkboxes-select">
            <h6>Company</h6>

            <div className="checkboxes-select__dropdown-list">
                <Checkbox boxClassName="checkboxes-select__checkbox" />

                <Checkbox boxClassName="checkboxes-select__checkbox" />
            </div>
        </div>
    );
}

export default CheckboxesSelect;
