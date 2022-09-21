import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../../../store/todosSlice';
import { useSortable } from '@dnd-kit/sortable';
import ToDoItem from './ToDoItem/ToDoItem';
import Tippy from '@tippyjs/react';
import { CSS } from '@dnd-kit/utilities';
import boardIcon from '../../../assets/img/dashboard/toDoList/board.svg';
import './ToDoList.scss';

function ToDoList({ id, isCustomizing, getCustomizingClass, onDeleteComponent }) {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos.data);
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({id});
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    useEffect(() => {
        dispatch(fetchTodos());
    }, []);

    return (
        <Tippy
            className="tip"
            content={<p>Drag the section to your desired spot on the dashboard.<span className="tip-triangle tip-bottom"></span></p>}
            placement="top"
            disabled={!isCustomizing}
        >
            <div className={`todos dashboard-block ${getCustomizingClass()}`} ref={setNodeRef} style={style} {...attributes} {...listeners}>
                {
                    !isCustomizing ? (
                        <div className="todos__head">
                            <h5>
                                To Do List
                            </h5>
                        </div>
                    ) : (
                        <div className="todos__customizing" onClick={() => onDeleteComponent(id)}>
                            <div className="todos__delete">
                                <div></div>
                                <div></div>
                            </div>

                            <h6>
                                Remove from Dashboard
                            </h6>
                        </div>
                    )
                }

                {
                    !todos ? (
                        <div className="todos__empty">
                            <img src={boardIcon} width="38" height="50" alt="board"/>

                            <h6>
                                There’s nothing in your to do list right now
                            </h6>
                        </div>
                    ) : (
                        <div className="todos__list">
                            {
                                todos.map((todo) => <ToDoItem key={todo.id} todo={todo} />)
                            }
                        </div>
                    )
                }
            </div>
        </Tippy>
    );
}

export default ToDoList;