import Header from './components/Header'
import Footer from './components/Footer'
import TodoCard from './components/TodoCard'
import Counter from './components/Counter'

function App() {


  return (
    <> 
      <Header/>
      {/* <TodoCard day="Monday" />
      <TodoCard day="Tuesday" />
      <TodoCard day="Wednesday" /> */}
      <Counter></Counter>
      <Footer message="Hello World" />
    </>
  )
}

export default App
