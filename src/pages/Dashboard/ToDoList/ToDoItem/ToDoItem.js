import fileIcon from '../../../../assets/img/general/file.svg';
import calendarIcon from '../../../../assets/img/general/calendar.svg';
import likeIcon from '../../../../assets/img/dashboard/toDoList/toDoItem/like.svg';
import dislikeIcon from '../../../../assets/img/dashboard/toDoList/toDoItem/dislike.svg';
import './ToDoItem.scss';

function ToDoItem({ todo }) {
    function getMarker(type) {
        switch(type) {
            case 'file': return fileIcon;
            case 'calendar': return calendarIcon;
            default: return fileIcon;
        }
    }

    return (
        <div className="todos-item">
            <div className="todos-item__wrapper">
                <div className="todos-item__content">
                    <img className="todos-item__type" src={getMarker(todo.type)} width="22" height="22"
                         alt="file"/>

                    <h6 className="todos-item__title" title={todo.title}>
                        {todo.title}
                    </h6>

                    <div className="todos-item__description">
                        <p className={`todos-item__marker ${todo.status}`}>
                            {todo.status}
                        </p>

                        <h6 className="todos-item__date">
                            {todo.date}
                        </h6>
                    </div>
                </div>

                <div className="todos-item__hover">
                    <div className="todos-item__mark todos-item__mark--dislike">
                        <img src={dislikeIcon} width="22" height="22"
                             alt="dislike"/>
                    </div>

                    <div className="todos-item__mark todos-item__mark--like">
                        <img src={likeIcon} width="22" height="22"
                             alt="like"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ToDoItem;