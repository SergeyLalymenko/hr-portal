import classNames from 'classnames';
import './Checkbox.scss';

function Checkbox({ boxClassName }) {
    function getBoxClassName() {
        return boxClassName ? boxClassName : '';
    }

    return (
        <label className={classNames('checkbox', getBoxClassName())}>
            <input type="checkbox" />

            <span></span>

            <p>Phonexa</p>
        </label>
    );
}

export default Checkbox;
