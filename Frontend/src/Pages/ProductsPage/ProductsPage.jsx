import { useState } from 'react'
import { useFetchData } from '../../hooks/useFetchData'
import { useSaveData } from '../../hooks/useSaveData'
import { useDeleteData } from '../../hooks/useDeleteData'
import { useUpdateData } from '../../hooks/useUpdateData'
import Title from '../../Components/UI/Title'
import Message from '../../Components/UI/Message'
import Button from '../../Components/UI/Button'
import Card from '../../Components/UI/Card'
import ProductList from '../../Components/Products/ProductList'
import ProductForm from '../../Components/Products/ProductForm'
import './ProductsPage.css'

const ProductsPage = () => {
  const { data: products, loading, error, refetch } = useFetchData()
  const { saveData } = useSaveData()
  const { deleteData } = useDeleteData()
  const { updateData } = useUpdateData()
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [showForm, setShowForm] = useState(false)

  const handleSubmit = async (productData) => {
    try {
      if (selectedProduct) {
        await updateData(selectedProduct.id, productData)
      } else {
        await saveData(productData)
      }
      refetch()
      setSelectedProduct(null)
      setShowForm(false)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await deleteData(id)
      refetch()
    } catch (error) {
      console.error('Error:', error)
    }
  }

  if (loading) return (
    <div className="products-page">
      <Message type="info">Cargando productos...</Message>
    </div>
  )

  if (error) return (
    <div className="products-page">
      <Message type="error">Error: {error}</Message>
    </div>
  )

  return (
    <div className="products-page">
      <div className="page-header">
        <Title text="Gestión de Productos" level={2} />
        <Button 
          text={showForm ? 'Ocultar Formulario' : 'Agregar Producto'} 
          onClick={() => {
            setSelectedProduct(null)
            setShowForm(!showForm)
          }}
          variant={showForm ? 'secondary' : 'primary'}
        />
      </div>

      {showForm && (
        <Card className="form-container">
          <Title 
            text={selectedProduct ? 'Editar Producto' : 'Nuevo Producto'} 
            level={3} 
            className="no-underline small-title"
          />
          <ProductForm 
            onSubmit={handleSubmit} 
            initialData={selectedProduct || {}}
            isEditing={!!selectedProduct}
          />
        </Card>
      )}

      <Card>
        <div className="products-header">
          <Title text="Lista de Productos" level={3} className="no-underline small-title" />
          <p>Total: {products.length} productos</p>
        </div>
        
        {products.length > 0 ? (
          <ProductList 
            products={products} 
            onSelect={(product) => {
              setSelectedProduct(product)
              setShowForm(true)
            }}
            onDelete={handleDelete}
          />
        ) : (
          <Message type="info">No hay productos registrados</Message>
        )}
      </Card>
    </div>
  )
}

export default ProductsPage