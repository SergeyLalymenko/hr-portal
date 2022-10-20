import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import './ToDoItem.scss';

function ToDoItem({ todo }) {
    function getMarkerIcon(type) {
        switch(type) {
            case 'file': return faFile;
            case 'calendar': return faCalendar;
            default: return faFile;
        }
    }

    return (
        <div className="todos-item">
            <div className="todos-item__wrapper">
                <div className="todos-item__content">
                    <FontAwesomeIcon
                        className="todos-item__type"
                        icon={getMarkerIcon(todo.type)}
                    />

                    <h6 className="todos-item__title" title={todo.title}>
                        {todo.title}
                    </h6>

                    <div className="todos-item__description">
                        <p className={classNames('todos-item__marker', todo.status)}>
                            {todo.status}
                        </p>

                        <h6 className="todos-item__date">
                            {todo.date}
                        </h6>
                    </div>
                </div>

                <div className="todos-item__hover">
                    <div className="todos-item__mark todos-item__mark--dislike">
                        <FontAwesomeIcon icon={faThumbsDown} />
                    </div>

                    <div className="todos-item__mark todos-item__mark--like">
                        <FontAwesomeIcon icon={faThumbsUp} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ToDoItem;
