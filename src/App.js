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
import Dashboard from './components/Pages/Dashboard/Dashboard';
import MyProfile from './components/Pages/Dashboard/MyProfile';
import ReviewAdd from './components/Pages/Dashboard/ReviewAdd';
import MyOrder from './components/Pages/Dashboard/MyOrder';
import NotFound from './components/Shared/NotFound';
import Payment from './components/Pages/Dashboard/Payment';

function App() {
  return (
    <div className='bg-slate-50'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/purchase/:id' element={<RequireAuth>
          <Purchase />
        </RequireAuth>} />

        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyProfile />} />
          <Route path='review' element={<ReviewAdd />} />
          <Route path='order' element={<MyOrder />} />

          <Route path='payment/:id' element={<Payment />}>
          </Route>
        </Route>

        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
