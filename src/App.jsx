import { Route } from 'react-router-dom'
import Footer from './components/footer'
import NavBar from './components/navbar'
import HomePage from './pages/Home/HomePage'
import './styles/App.css'
import AuthPage from './pages/Authentication/AuthPage'
import TourPage from './pages/Tour/TourPage'
import TourDetailPage from './pages/TourDetail/TourDetailPage'
import CreateTour from './pages/Management/CreateTour'
import { Routes } from 'react-router-dom'
import ManageTours from './pages/Management/ManageTours'
import NotFound from './components/NotFound'



function App() {

  return (
    <>
      <NavBar/>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/auth" element={<AuthPage/>} />
            <Route path="/tours" element={<TourPage/>} />
            <Route path="/tour/:id" element={<TourDetailPage/>} />
            <Route path="/management/create" element={<CreateTour/>} />
            <Route path="/management" element={<ManageTours/>} />      
            <Route path='*' element={<NotFound/>} />
          </Routes>
      <Footer/>
    </>
  )
}

export default App