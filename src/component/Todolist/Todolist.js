import React from 'react'
import Todoitem from './Todoitem';
import '../../CssComponent/Todolist.css';

const Todolist = ({ todos }) => {
    return (
        <div className='TodoList'>
            {todos.map(todo => (
            <Todoitem todo={todo} key={todo.id}/>
        ))}
        </div>
    );
};

export default Todolist