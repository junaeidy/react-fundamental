import SignUpPage from "./pages/SignUpPage"
import WishListPage from './pages/WishListPage';
import { Toaster } from "sonner";
import TodoCard from './components/TodoCard';

function App() {

  // return (
  //   <> 
  //     <Toaster position="top-right" />
  //     <WishListPage />
  //   </>
  // )

  return (
    <>
      <main className="p-4">
        <TodoCard day="Monday" numberOfActivities={5} />
        <br />
        <TodoCard day="Tuesday" numberOfActivities={3} />
      </main>
    </>
  )
}

export default App
