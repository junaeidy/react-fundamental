import SignUpPage from "./pages/SignUpPage"
import WishListPage from './pages/WishListPage';
import { Toaster } from "sonner";

function App() {

  return (
    <> 
      <Toaster position="top-right" />
      <WishListPage />
    </>
  )
}

export default App
