import React from 'react';
import '../../CssComponent/Todolist.css';

const Template = ({children,todoLength}) => {
  return (
    <div className='Template'>
        <div className='Todo-title'>오늘의 할 일 ({todoLength}) </div>
        <div> {children} </div>
    </div>
  )
};

export default Template;