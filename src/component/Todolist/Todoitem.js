import React from 'react';
import {MdCheckBox,MdCheckBoxOutlineBlank} from 'react-icons/md'
import '../../CssComponent/Todolist.css';
 
const Todoitem = ({todo}) => {
    const {id, text, checked} = todo;
  return (
    <div className='Todoitem'>
        <div className={`Todo-content ${checked ? 'checked' : ''}`}>
            {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            <div className='Todo-text'>{text} </div>
        </div>
    </div>
  )
};

export default Todoitem;