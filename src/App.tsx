import { useState } from "react"
// State is immutable. The tasks should be at a top level 
// because you might want to use it in other components than just the tasks component
import Header from './components/Header.tsx'
import Tasks from './components/Tasks.tsx'
import Add from './components/Add.tsx'
function App() {
  // You can write Typescript up here
  const name:string = "Joshua"
  const x:Boolean=false;

  // Here the variable "setTasks" is defined in a very javascript magic way
  const [tasks, setTasks] = useState([
    {
        id:1,
        text:'Tandläkarbesök',
        day:'2022-06-15',
        reminder:true,
    },
    {
        id:2,
        text:'Exam',
        day:'2022-12-12',
        reminder:true,
    },
    {
        id:3,
        text:'Smashing',
        day:'2022-12-28',
        reminder:false,
    }
])

// Filter out a task
  // Filter travels through the array and creates a new array with all the elements that pass the implemented test
  // In this case the test is passed as long as the id is not equal to the id that is passed into the onDelete function.
  // Meaning that the Task that called onDelete sends its own id effectively removing itself from the tasks with this filter function
const deleteTask = (id:number) => {
  // Anonymous function
  setTasks(tasks.filter((task) => task.id !== id));
}

function deleteTask2(id:number){
  // Named function
  setTasks(tasks.filter((task) => task.id !== id));
}

function addTask(task){
  // Each task should have an id. Just make a random number.
  const id:number = Math.floor(Math.random()*10000);
}

function toggle(id:number){
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

// Putting if statements down here with different portions of
// html in each case is the benefit of using React.
  return (
    <div className="App">
      <Header title='Jello' />
      <Add></Add>
      <h2>Ternary operator: {x ? 'ef' : 'sfd'}</h2>
      {tasks.length > 0 ? 
      (
      <Tasks tasks={tasks} onDelete={deleteTask2} onToggle={toggle}/>
      ):
      (
      "No tasks set"
      )}
    </div>
  );
}

export default App;
