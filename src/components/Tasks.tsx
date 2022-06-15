
const tasks = [
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
]

const Tasks = () => {
  return (
    <div>
    
    {tasks.map((task) => (<h3>{task.text}</h3> )
    
    )}

    </div>
  )
}

export default Tasks