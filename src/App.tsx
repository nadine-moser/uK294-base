import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import OverviewPage from './components/OverviewPage'
import LoginPage from './components/LoginPage'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/cars' element={<OverviewPage />} />
      <Route path='/login' element={<LoginPage />} />
      {/* .. add routes */}
    </Routes>
    </BrowserRouter>
  )
}

export default App
