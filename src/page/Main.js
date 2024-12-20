import React from 'react';
import {useNavigate} from 'react-router-dom';

const Main = () => {
const navigate = useNavigate();

  const goToTodolist = () => {
    navigate('/TodolistAll');
  }

  const goToHome = () => {
    navigate('/')
  }

  const RockScissorPaper = () => {
    navigate('/RockScissorPaper')
  }

  return (
    <div>
        <div className='main-title-css' onClick={goToHome}> Project 모음집
        </div>
        <div className='main-all-list-one'>
        <div className='main-list-one' onClick={goToTodolist}> TodoList </div>
        <div className='main-list-one' onClick={RockScissorPaper}> 가위 바위 보 게임 </div>
        </div>
    </div>
  )
};

export default Main;