import Header from './components/Header'
import Footer from './components/Footer'
import TodoCard from './components/TodoCard'
import Counter from './components/Counter'
import { Button, Input } from '@heroui/react'
import { useRef, useState } from 'react'

function App() {
  const inputRef = useRef();

  const [wishLists, setWishLists] = useState([]);

  const addWishList = () => {
    const wishListInputValue = inputRef.current.value;

    setWishLists([...wishLists, wishListInputValue]);
  } 
  return (
    <> 
      {/* <Header/> */}
      {/* <TodoCard day="Monday" />
      <TodoCard day="Tuesday" />
      <TodoCard day="Wednesday" /> */}
      {/* <Counter></Counter> */}
      {/* <Footer message="Hello World" /> */}


      <div className="flex items-center p-4 gap-4">
        <Input ref={inputRef} label="Wishlist Item" color="secondary" />
        <Button onPress={addWishList} color="primary">Add</Button>
      </div>

      <ul className='list-decimal list-inside text-center text-2xl font-semibold'>
        {wishLists.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </>
  )
}

export default App
