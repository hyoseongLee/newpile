import React from 'react';
import '../../CssComponent/Todolist.css';
import { useNavigate } from 'react-router-dom';


const Template = ({ children, todoLength }) => {

  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/')
  }

  return (
    <div className='Template'>
      <div className='Todo-title' onClick={goToHome}> 오늘의 할 일 ({todoLength}) </div>
      <div> {children} </div>
    </div>
  )
};

export default Template;