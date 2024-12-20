import React, { useState } from 'react';
import '../CssComponent/Todolist.css';
import Template from '../component/Todolist/Template';
import Todolist from '../component/Todolist/Todolist';
import { MdAddCircle } from 'react-icons/md';
import TodoInsert from '../component/Todolist/TodoInsert';

let nextId = 6;

const TodolistAll = () => {
    const [selectedTodo, setSelectedTodo] = useState(null)
    const [insertToggle, setInsertToggle] = useState(false);
    const [todos, setTodos] = useState([
        { id: 1, text: "할일 1", checked: true },
        { id: 2, text: "할일 2", checked: false },
        { id: 3, text: "할일 3", checked: true },
        { id: 4, text: "할일 4", checked: false},
        { id: 5, text: "할일 5", checked: true},
    ]);

    const onInsertToggle = () => {
        if (selectedTodo) {
            setSelectedTodo(null)
        }
        setInsertToggle(prev => !prev);
    };

    const onChangeSelectedTodo = todo => {
        setSelectedTodo(todo)
    }
    const onRemove = id => {
        onInsertToggle()
        setTodos(todos => todos.filter(todo => todo.id !== id))
    }

    const onEddit = (id, text) => {
        onInsertToggle()
        setTodos(todos => 
            todos.map(todo => (todo.id === id? { ...todo, text } : todo)))
    }
    const onInsertTodo = text => {
        if (text === "") {
            return alert("할일을 입력해주세요");
        } else {
            const todo = {
                id: nextId,
                text,
                checked: false
            };
            setTodos(todos => todos.concat(todo));
            nextId++
        }
    };

    const onCheckToggle = id => {
        setTodos(todos => todos.map(todo => todo.id === id ?
            { ...todo, checked: !todo.checked } : todo
        ))
    }

    return (
        <Template todoLength={todos.length}>
            <Todolist
                todos={todos}
                onCheckToggle={onCheckToggle}
                onInsertToggle={onInsertToggle}
                onChangeSelectedTodo={onChangeSelectedTodo} />
            <div className='add-todo-button' onClick={onInsertToggle}>
                <MdAddCircle />
            </div>
            {insertToggle && (
                <TodoInsert
                    selectedTodo={selectedTodo}
                    onInsertToggle={onInsertToggle}
                    onInsertTodo={onInsertTodo}
                    onRemove={onRemove}
                    onEddit={onEddit}
                />
            )}
        </Template>
    );
};

export default TodolistAll;
