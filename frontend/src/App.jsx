import React from 'react'
import { Routes,  Route} from 'react-router-dom';

// Components
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx';


// Pages
import HomePage from './pages/HomePage.jsx';
import ContactPage from './pages/ContactPage.jsx'

function App() {

  return (
    <>
      <Routes>
        {/* Main root route */}
        <Route path="/HomePage" element={
          <>
            <Navbar />
            <HomePage />
            <Footer />
          </>
        }/>
       
       <Route path="/ContactPage" element={
          <>
            <Navbar />
            <ContactPage />
            <Footer />
          </>
      }/>

        {/* Admin Routes */}

        {/* <Route path='/login' element={
          <>
          <Navbar />
          <AdminLoginPage />
          </>
        } />

        <Route path="/admin" element={
          <ProtectedRoute>
          <AdminHomePage />
          <Footer/>
          </ProtectedRoute>
        } />

        <Route path='*' element={<FourZeroFourPage />} /> */}
        
      </Routes>  
      </>

  )
}
export default App
