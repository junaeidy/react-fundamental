import {lazy, Suspense} from 'react';
import WishListPage from './pages/WishListPage';
import { Routes, Route } from 'react-router-dom';
import SignUpPage from "./pages/SignUpPage"
import Header from './components/Header';
// import Counter from './components/Counter';
import ProfilePage from './pages/ProfilePage';

const Counter = lazy(() => import('./components/Counter'));

function App() {

  return (
    <> 
      <Routes>
        <Route element={<WishListPage />} path='/wishlist' />
        <Route element={<SignUpPage />} path='/sign-up' />
        <Route element={
          <Suspense fallback={<div>Loading...</div>}>
            <Counter/>
          </Suspense>
        } path='/' />
        <Route element={<ProfilePage />} path='/profile/:username' />
      </Routes>
    </>
  )

}

export default App
