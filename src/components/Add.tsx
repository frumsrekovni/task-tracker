import { useState } from "react"

const Add = ({marflepop}) => {
  // setText and setDay are examples of 
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  function onSubmit(e){
    e.preventDefault();
    marflepop({text, day,reminder})
  }

  return (
    <form className="task-form" onSubmit={onSubmit}>
        <div className="form-comp">
            <label>Task</label>
            <input type="text" placeholder="Add" value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className="form-comp">
            <label>Day and Time</label>
            <input type="text" placeholder="Add Day and Time" value={day} onChange={(e) => setDay(e.target.value)} />
        </div>
        <div className="form-comp">
            <label>Remind?</label>
            <input type="checkbox" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
        </div>
    </form>

  )
}

export default Add