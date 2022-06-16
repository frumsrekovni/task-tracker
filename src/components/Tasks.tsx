// State is immutable


//const Tasks = (props) => {
// This is an alternative
// Current is a destructure
const Tasks = ({tasks}) => {
  return (
    <div>
    {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3> ))}
    </div>
  )
}

export default Tasks