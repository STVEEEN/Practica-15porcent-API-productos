import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Title from '../../Components/UI/Title'
import Message from '../../Components/UI/Message'
import Button from '../../Components/UI/Button'
import './WelcomePage.css'

const WelcomePage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/dashboard')
    }, 3000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <Title text="Bienvenido a TecnoMarket" level={1} className="center" />
        <Message type="info" className="welcome-message">
          Sistema de gestión de inventario para productos tecnológicos
        </Message>
        <Button 
          text="Ir al Dashboard" 
          onClick={() => navigate('/dashboard')}
          variant="primary"
          large
        />
      </div>
    </div>
  )
}

export default WelcomePage