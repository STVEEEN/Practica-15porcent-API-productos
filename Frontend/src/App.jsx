import { Routes, Route } from 'react-router-dom'
import WelcomePage from './Pages/WelcomePage/WelcomePage'
import DashboardPage from './Pages/DashboardPage/Dashboard'
import ProductsPage from './Pages/ProductsPage/ProductsPage'
import './App.css'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </div>
  )
}

export default App