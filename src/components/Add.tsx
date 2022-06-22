const Add = () => {
  return (
    <form className="task-form">
        <div className="form-comp">
            <label>Task</label>
            <input type="text" placeholder="Add" />
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