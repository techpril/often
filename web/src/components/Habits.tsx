interface HabitProps {
  completed: number
}
function Habits(props: HabitProps) {
  

    return (
      <div className="App">
        <h1>Habits</h1>
        <div className="bg-zinc-900 w-10 h-10 text-white rounded m-2 flex items-center justify-center">{props.completed}</div>
         
      </div>
    )
  }
  
  export default Habits