import SignUpPage from "./pages/SignUpPage"
import WishListPage from './pages/WishListPage';
import { Toaster } from "sonner";
import TodoCard from './components/TodoCard';
import Footer from "./components/Footer";

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
        <Footer />
      </main>
    </>
  )
}

export default App
