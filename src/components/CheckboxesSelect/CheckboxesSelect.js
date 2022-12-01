import './CheckboxesSelect.scss';

function CheckboxesSelect() {
    return (
        <div className="checkboxes-select">
            <h6>Company</h6>

            <div className="checkboxes-select__dropdown-list">
                <label className="checkboxes-select__checkbox">
                    <input type="checkbox" />

                    <span></span>

                    <p>Phonexa</p>
                </label>

                <label className="checkboxes-select__checkbox">
                    <input type="checkbox" />

                    <span></span>

                    <p>Phonexa</p>
                </label>
            </div>
        </div>
    );
}

export default CheckboxesSelect;
