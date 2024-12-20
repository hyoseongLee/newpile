import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'
import '../../CssComponent/Todolist.css';

const Todoitem = ({ todo, onCheckToggle,onInsertToggle,onChangeSelectedTodo }) => {
  const { id, text, checked } = todo;
  return (
    <div className='Todoitem'>
      <div className={`Todo-content ${checked ? 'checked' : ''}`}>
        {checked ? (<MdCheckBox onClick={() => {
          onCheckToggle(id)
        }} />
        ) : (
          <MdCheckBoxOutlineBlank
            onClick={() => {
              onCheckToggle(id)
            }} />
        )}
        <div className='Todo-text' onClick={()=>{
          onChangeSelectedTodo(todo)
          onInsertToggle()
        }}>
          {text} </div>
      </div>
    </div>
  )
};

export default Todoitem;