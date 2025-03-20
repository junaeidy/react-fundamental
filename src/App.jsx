import Header from './components/Header'
import Footer from './components/Footer'
import TodoCard from './components/TodoCard'

function App() {


  return (
    <> 
      <Header/>
      <TodoCard day="Monday" />
      <TodoCard day="Tuesday" />
      <TodoCard day="Wednesday" />
      <Footer message="Hello World" />
    </>
  )
}

export default App
