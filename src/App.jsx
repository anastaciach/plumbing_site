const App = () =>{
  const tasks=[
    ' Погладить кота',
    'Приготовить салат',
    'Посмотреть видео react',   
  ]
  return(
  <>
  <h1>ffff</h1>
  <ul>  
    {tasks.map((task)=><li key={task}>{task}</li>)}
  </ul>
  </>

  )
}
export default App