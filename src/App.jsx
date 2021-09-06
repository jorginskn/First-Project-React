import React, { useState } from "react";
import Tasks from './components/Tasks';

import './App.css';
import AddTask from "./components/AddTasks";

const App = () => {
  // let message = "Hello World!";
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar programação',
      completed:false,

    },
    {
      id: '2',
      title: 'Ler livros',
      completed: true,
    },
    
  ]);
 
const handleTaskAddition = (taskTitle)=>{
  const newTask = [...tasks, {
    title: taskTitle,
    id: Math.random(10),
    completed: false,
  },
];
  setTasks(newTask);
}
    return (
    <>
     
      <div className="container">
         <AddTask  handleTaskAddition = {handleTaskAddition}/>
        <Tasks tasks={tasks}/>
      </div>   
   </>
  );
};
export default App;