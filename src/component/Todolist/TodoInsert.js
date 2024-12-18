import React, { useEffect, useState } from 'react';
import { MdAddCircle } from 'react-icons/md';
import '../../CssComponent/Todolist.css';
import { TiTrash, TiPencil } from 'react-icons/ti';


const TodoInsert = ({ onInsertToggle, onInsertTodo, selectedTodo, onEddit, onRemove }) => {
  const [value, setValue] = useState("")

  const onChange = e => {
    setValue(e.target.value);
  }


  const onSubmit = e => {
    e.preventDefault()
    onInsertTodo(value)
    setValue("")
    onInsertToggle()
  }
  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text)
    }
  }, [selectedTodo])

  return (
    <div>
      <div className='Todo-background' onClick={onInsertToggle}></div>
      <form
        onSubmit={
          selectedTodo
            ? () => { onEddit(selectedTodo.id, value) }
            : onSubmit
        }>
        <input
          placeholder='please type'
          value={value}
          onChange={onChange}>
        </input>

        {selectedTodo ? (
          <div className='Todo-rewrite'>
            <TiPencil 
            onClick={() => {
              onEddit(selectedTodo.id, value)
            }} 
            />
            <TiTrash onClick={() => { onRemove(selectedTodo.id) }} />
          </div>
        ) : (
          <button type='submit'>
            <MdAddCircle />
          </button>
        )}
      </form>
    </div>
  );
};

export default TodoInsert;