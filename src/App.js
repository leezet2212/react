import Example from './Example.js';
import withCounter from './component/TaskHoc.js/HoverComponent';
import ContextExample from './component/TaskHoc.js/Context';
import HOCExample from "./component/TaskHoc.js/Btn"
import { Header } from './component/Header';
import { Tasks } from './component/Tasks';
import { AddTask } from './component/AddTask';
import { useState, useEffect } from 'react';

const IncrementComponent = ({ increment, decrement }) => {
  return <>
    <button onClick={increment}>increment hoc</button>
    <button onClick={decrement}>decrement hoc</button>
  </>
}

const EnhancedIncrement = withCounter(IncrementComponent)

function App() {
  const [showAddName, setShowAddName] = useState(false)
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch('http://localhost:5000/tasks')
      const date = await res.json()
      setTasks(date)
    }

    fetchTasks()
    // const getTasks = async () => {
    //   const taskFormServer = await fetchTasks()
    //   setTasks(taskFormServer)
    // }
    // getTasks()
  }, [])


  const bien = 'chaof casc ban';
  const x = false;

  //delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/
      ${id}`, {
      method: 'DELETE',
    })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  //fetch task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const date = await res.json()
    return date
  }

  //togle
  const toggleReminder = async (id) => {
    const taskToggle = await fetchTask(id)
    const upTask = { ...taskToggle, reminder: !taskToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(upTask),
    })
    const date = await res.json()

    console.log(id);
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: date.reminder } : task))
  }

  //add name
  const addName = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const date = await res.json()

    setTasks([...tasks, date])

    // const id = Math.floor(Math.random() * 10000) + 10;
    // console.log(id);
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask]);
  }

  return (
    <div className="App">
      <div className="container">

        <Header onAdd={() => setShowAddName(!showAddName)} showAdd={showAddName} />
        {showAddName && <AddTask addName={addName} />}
        {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : 'No task list'}
      </div>

      <h2> heloo {bien} </h2>
      <h3>chao {x ? 'yes' : 'no'}</h3>
      <Example />
      <ContextExample />
      <HOCExample />
      <EnhancedIncrement />
    </div >
  );
}

export default App;
