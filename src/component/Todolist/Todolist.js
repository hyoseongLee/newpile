import React from 'react'
import Todoitem from './Todoitem';
import '../../CssComponent/Todolist.css';

const Todolist = ({ todos, onCheckToggle,onInsertToggle,onChangeSelectedTodo }) => {
    return (
        <div className='TodoList'>
            {todos.map(todo => (
                <Todoitem
                    todo={todo}
                    key={todo.id}
                    onCheckToggle={onCheckToggle}
                    onInsertToggle={onInsertToggle}
                    onChangeSelectedTodo={onChangeSelectedTodo} />
            ))}
        </div>
    );
};

export default Todolist