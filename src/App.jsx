
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Loader from './components/common/Loader'
import { LandingPage, Mahabharat, Ramayan } from './pages'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Loader/>}/>
      <Route path='/home' element={<LandingPage/>}/>
      <Route path='/ramayan' element={<Ramayan/>}/>
      <Route path='/mahabharat' element={<Mahabharat/>}/>
      
    </Routes>
    </>
  )
}

export default App
