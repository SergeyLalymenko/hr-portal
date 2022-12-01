// import { useState } from 'react';
import Checkbox from '@components/Checkbox/Checkbox';
import './CheckboxesSelect.scss';

function CheckboxesSelect() {
    // const [checkboxesData, setCheckboxesData] = useState([
    //     {
    //         boxClassName: "checkboxes-select__checkbox",
    //         name: "phonexa",
    //         title: "Phonexa",
    //         checked: true,
    //     },
    //     {
    //         boxClassName: "checkboxes-select__checkbox",
    //         name: "phonexa2",
    //         title: "Phonexa2",
    //         checked: false,
    //     },
    // ]);

    function onCheckboxChange(e) {
        const { name, checked } = e.target;

        const newCheckboxesData = checkboxesData.map((checkbox) => checkbox.name !== name ? checkbox : {
            ...checkbox,
            checked: checked
        });

        setCheckboxesData(newCheckboxesData);
    }

    return (
        <div className="checkboxes-select">
            <h6>Company</h6>

            <div className="checkboxes-select__dropdown-list">
                {
                    checkboxesData.map((checkbox, i) => (
                        <Checkbox
                            key={i}
                            boxClassName={checkbox.boxClassName}
                            name={checkbox.name}
                            title={checkbox.title}
                            checked={checkbox.checked}
                            onCheckboxChange={onCheckboxChange}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default CheckboxesSelect;
