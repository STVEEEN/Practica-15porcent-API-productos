import ProductCard from './ProductCard'
import './ProductList.css'

const ProductList = ({ products, onSelect, onDelete }) => {
  if (products.length === 0) {
    return <div className="empty-list">No hay productos registrados</div>
  }

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard 
          key={product.id}
          product={product}
          onEdit={() => onSelect(product)}
          onDelete={() => onDelete(product.id)}
        />
      ))}
    </div>
  )
}

export default ProductList