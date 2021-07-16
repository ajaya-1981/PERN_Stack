import React, { Fragment } from 'react';
import './App.css';

//components
import InputTodo from './component/InputToDo';
import ListToDos from './component/ListToDo';


function App() {
  return (
    <Fragment>

      <div className="container">
        <InputTodo></InputTodo>
        <ListToDos></ListToDos>
        
      </div>
    </Fragment>);
}

export default App;
