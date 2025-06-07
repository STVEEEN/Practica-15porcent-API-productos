import Button from '../UI/Button'
import './ProductCard.css'

const ProductCard = ({ product, onEdit, onDelete }) => {
  // Asegurarnos que precio sea un número
  const price = typeof product.precio === 'number' ? product.precio : 
               typeof product.precio === 'string' ? parseFloat(product.precio) : 0;

  return (
    <div className="product-card">
      <div className="product-header">
        <h3>{product.producto || 'Nombre no disponible'}</h3>
        <span className={`product-stock ${product.stock < 10 ? 'low-stock' : ''}`}>
          {product.stock || 0} en stock
        </span>
      </div>
      
      <div className="product-details">
        <p className="product-category">{product.categoria || 'Sin categoría'}</p>
        <p className="product-price">${price.toFixed(2)}</p>
      </div>
      
      <div className="product-actions">
        <Button 
          text="Editar" 
          onClick={() => onEdit && onEdit()}
          variant="secondary"
          small
        />
        <Button 
          text="Eliminar" 
          onClick={() => onDelete && onDelete()}
          variant="warning"
          small
        />
      </div>
    </div>
  )
}

export default ProductCard