//rafce

// This is the specific X icon. Is there not a way to style the color of this icon in a separate CSS file?
import{FaTimes} from "react-icons/fa"


// onDelete is passed on from the Tasks component. In a way the app stretches all the way down to this component to be available when the onClick happens.
// and when onClick activates a function is called where onDelete is run with the parameter of the current task's id


const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
        <h3>
          {task.text} 
          <FaTimes className="xicon" onClick={() => onDelete(task.id)}></FaTimes>
          
        </h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task