import React from 'react';
import './App.css';
import Main from './Component/NewTodo/Main';
import Header from './Component/NewTodo/Header'

function App() {
  return (
    <div className='container'>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;