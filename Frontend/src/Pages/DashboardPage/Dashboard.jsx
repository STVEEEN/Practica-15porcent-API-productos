import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFetchData } from '../../hooks/useFetchData'
import Title from '../../Components/UI/Title'
import Message from '../../Components/UI/Message'
import Button from '../../Components/UI/Button'
import Card from '../../Components/UI/Card'
import ProductList from '../../Components/Products/ProductList'
import './Dashboard.css'

const DashboardPage = () => {
  const { data: products, loading, error } = useFetchData()
  const navigate = useNavigate()

  if (loading) return (
    <div className="dashboard">
      <Message type="info">Cargando datos del dashboard...</Message>
    </div>
  )

  if (error) return (
    <div className="dashboard">
      <Message type="error">{error}</Message>
    </div>
  )

  // Calcular métricas
  const totalProducts = products.length
  const lowStockProducts = products.filter(p => p.stock < 10).length
  const averagePrice = products.reduce((sum, p) => sum + (p.precio || 0), 0) / totalProducts || 0

  return (
    <div className="dashboard">
      <Title text="Dashboard de TecnoMarket" level={1} className="no-underline" />
      
      <div className="dashboard-summary">
        <div className="summary-card">
          <p className="summary-label">Productos Totales</p>
          <p className="summary-value">{totalProducts}</p>
        </div>
        <div className="summary-card">
          <p className="summary-label">Stock Bajo</p>
          <p className="summary-value">{lowStockProducts}</p>
        </div>
        <div className="summary-card">
          <p className="summary-label">Precio Promedio</p>
          <p className="summary-value">${averagePrice.toFixed(2)}</p>
        </div>
      </div>

      <div className="dashboard-actions">
        <Button 
          text="Gestionar Productos" 
          onClick={() => navigate('/products')} 
          variant="primary"
        />
      </div>

      <Card className="recent-products">
        <Title text="Productos Recientes" level={3} className="no-underline" />
        {products.length > 0 ? (
          <ProductList 
            products={products.slice(0, 4)} 
            onSelect={(Product) => navigate(`/products`)}
          />
        ) : (
          <Message type="info">No hay productos registrados</Message>
        )}
      </Card>
    </div>
  )
}

export default DashboardPage