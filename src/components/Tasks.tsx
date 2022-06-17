import Task from './Task.tsx'

//Instead of using a h3 you use a self built task component where THAT has an h3 in it
// The <> components are essentially like functions that receive parameters and return a traditional html tag

//const Tasks = (props) => {
// This is an alternative
// Current is a destructure
const Tasks = ({tasks}) => {
  return (
    <div>
    {tasks.map((task) => (
    <Task key={task.id} task={task}></Task> ))} 
    </div>
  )
}

export default Tasks