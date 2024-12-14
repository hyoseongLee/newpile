import React, { useState } from 'react';
import '../CssComponent/Todolist.css';
import Template from '../component/Todolist/Template';
import Todolist from '../component/Todolist/Todolist';
import { MdAddCircle } from 'react-icons/md';
import TodoInsert from '../component/Todolist/TodoInsert';

let nextId = 4;

const TodolistAll = () => {
    const [insertToggle, setInsertToggle] = useState(false);
    const [todos, setTodos] = useState([
        { id: 1, text: "할일 1", checked: true },
        { id: 2, text: "할일 2", checked: false },
        { id: 3, text: "할일 3", checked: true },
    ]);

    const onInsertToggle = () => {
        setInsertToggle(prev => !prev);
    };

    const onInsertTodo = text => {
        if (text === "") {
            return alert("할일을 입력해주세요");
        } else {
            const todo = {
                id: nextId,
                text,
                checked: false
            };
            setTodos(Todos => Todos.concat(todo));
            nextId++
        }
    };

const onCheckToggle = id => {
    setTodos(todos => todos.map(todo => todo.id === id ?
        {...todo, checked: !todo.checked} : todo
    ))
}

    return (
        <Template todoLength={todos.length}>
            <Todolist 
            todos={todos}  
            onCheckToggle={onCheckToggle}/>
            <div className='add-todo-button' onClick={onInsertToggle}>
                <MdAddCircle />
            </div>
            {insertToggle && (
                <TodoInsert 
                    onInsertToggle={onInsertToggle} 
                    onInsertTodo={onInsertTodo}
                />
            )}
        </Template>
    );
};

export default TodolistAll;
