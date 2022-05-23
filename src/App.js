import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Pages/Blogs/Blogs';
import Home from './components/Pages/Home/Home';
import Footer from './components/Shared/Footer';
import Header from './components/Shared/Header';
import Login from './components/Shared/Login';
import SignUp from './components/Shared/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Purchase from './components/Pages/Home/Purchase';
import RequireAuth from './components/Shared/RequireAuth';

function App() {
  return (
    <div className='bg-slate-50'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/blog' element={<Blogs />} />

        <Route path='/purchase/:id' element={<RequireAuth>
          <Purchase />
        </RequireAuth>} />

        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
