import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './page/Login';
import Main from './page/Main';
import TodolistAll from './page/TodolistAll'
import RockScissorPaper from './page/RockScissorpaper';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Main />}> </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/TodolistAll' element={<TodolistAll />}></Route>
        <Route path='/RockScissorPaper' element={<RockScissorPaper />}></Route>
      </Routes>
    </div>
  );
}

export default App;
