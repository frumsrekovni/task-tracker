import { useState } from "react"
// State is immutable. The tasks should be at a top level 
// because you might want to use it in other components than just the tasks component
import Header from './components/Header.tsx'
import Tasks from './components/Tasks.tsx'
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

// Remove task
const deleteTask = (id:number) => {
  // Filter travels through the array and creates a new array with all the elements that pass the implemented test
  // In this case the test is passed as long as the id is not equal to the id that is passed into the onDelete function.
  // Meaning that the Task that called onDelete sends its own id effectively removing itself from the tasks with this filter function
  setTasks(tasks.filter((task) => task.id !== id));
}
  return (
    <div className="App">
      <Header title='Jello' />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
      <h2>Ternary operator: {x ? 'ef' : 'sfd'}</h2>
    </div>
  );
}

export default App;
