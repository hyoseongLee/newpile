import React, { useState } from 'react'
import '../CssComponent/Todolist.css';
import Template from '../component/Todolist/Template'
import Todolist from '../component/Todolist/Todolist'
import { MdAddCircle } from 'react-icons/md';

const TodolistAll = () => {
    const [todos,setTodos] = useState(
        [{
            id: 1,
            text: "할일 1",
            checked: true
        },
        {
            id: 2,
            text: "할일 2",
            checked: false
        },
        {
            id: 3,
            text: "할일 3",
            checked: true
        },
        ]
    )
    return (
        <Template todoLength={todos.length}>
            <Todolist todos={todos} />
            <div className='add-todo-button'>
                <MdAddCircle /></div>
        </Template>
    )
}

export default TodolistAll