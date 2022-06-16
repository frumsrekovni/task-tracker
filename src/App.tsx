import { useState } from "react"
// State is immutable. The tasks should be at a top level 
// because you might want to use it in other components than just the tasks component
import Header from './components/Header.tsx'
import Tasks from './components/Tasks.tsx'
function App() {
  // You can write Typescript up here
  const name:string = "Joshua"
  const x:Boolean=false;

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
  return (
    <div className="App">
      <Header title='Jello' />
      <Tasks tasks={tasks}/>
      <h2>Ternary operator: {x ? 'ef' : 'sfd'}</h2>
    </div>
  );
}

export default App;
