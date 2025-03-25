import {lazy, Suspense} from 'react';
import WishListPage from './pages/WishListPage';
import { Routes, Route } from 'react-router-dom';
import SignUpPage from "./pages/SignUpPage"
import ProfilePage from './pages/ProfilePage';

const CounterPage = lazy(() => import('./pages/CounterPage'));

function App() {

  return (
    <> 
      <Routes>
        <Route element={<WishListPage />} path='/wishlist' />
        <Route element={<SignUpPage />} path='/sign-up' />
        <Route element={
          <Suspense fallback={<div>Loading...</div>}>
            <CounterPage/>
          </Suspense>
        } path='/' />
        <Route element={<ProfilePage />} path='/profile/:username' />
      </Routes>
    </>
  )

}

export default App
