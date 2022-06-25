import { useState } from "react"

const Add = () => {
  // setText and setDay are examples of 
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  return (
    <form className="task-form">
        <div className="form-comp">
            <label>Task</label>
            <input type="text" placeholder="Add" value={text}/>
        </div>
        <div className="form-comp">
            <label>Day and Time</label>
            <input type="text" placeholder="Add Day and Time" />
        </div>
        <div className="form-comp">
            <label>Remind?</label>
            <input type="checkbox"/>
        </div>
    </form>

  )
}

export default Add