import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../../../store/todosSlice';
import ToDoItem from './ToDoItem/ToDoItem';
import boardIcon from '../../../assets/img/dashboard/toDoList/board.svg';
import './ToDoList.scss';
import fileIcon from "../../../assets/img/general/file.svg";
import calendarIcon from "../../../assets/img/general/calendar.svg";

function ToDoList() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos.data);

    useEffect(() => {
        dispatch(fetchTodos());
    }, []);

    function areEmptyTodos() {
        return todos ? '' : 'empty';
    }

    return (
        <div className={`todos dashboard-block ${areEmptyTodos()}`} id="toDoList">
            <div className="todos__head">
                <h5>
                    To Do List
                </h5>
            </div>

            <div className="todos__empty">
                <img src={boardIcon} width="38" height="50" alt="board"/>

                <h6>
                    There’s nothing in your to do list right now
                </h6>
            </div>

            <div className="todos__list">
                {/*<?php include './src/components/dashboard/toDoList/toDoItem/toDoItem.php'; ?>*/}
                {/*<?php include './src/components/dashboard/toDoList/toDoItem/toDoItem.php'; ?>*/}
                {/*<?php include './src/components/dashboard/toDoList/toDoItem/toDoItem.php'; ?>*/}
                {/*<?php include './src/components/dashboard/toDoList/toDoItem/toDoItem.php'; ?>*/}
                {/*<?php include './src/components/dashboard/toDoList/toDoItem/toDoItem.php'; ?>*/}
                {/*<?php include './src/components/dashboard/toDoList/toDoItem/toDoItem.php'; ?>*/}

                {
                    todos && todos.map((todo) => <ToDoItem key={todo.id} todo={todo} />)
                }
            </div>
        </div>
    );
}

export default ToDoList;