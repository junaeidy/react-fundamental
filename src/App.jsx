import WishListPage from './pages/WishListPage';
import { Routes, Route } from 'react-router-dom';
import SignUpPage from "./pages/SignUpPage"
import Header from './components/Header';
import ProfilePage from './pages/ProfilePage';

function App() {

  return (
    <> 
      <Routes>
        <Route element={<WishListPage />} path='/wishlist' />
        <Route element={<SignUpPage />} path='/sign-up' />
        <Route element={<Header />} path='/' />
        <Route element={<ProfilePage />} path='/profile/:username' />
      </Routes>
    </>
  )

}

export default App
