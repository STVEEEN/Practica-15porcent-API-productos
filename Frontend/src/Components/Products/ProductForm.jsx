import { useForm } from 'react-hook-form'
import Button from '../UI/Button'
import Message from '../UI/Message'
import './ProductForm.css'
import { useUpdateData } from '../../hooks/useUpdateData'

const ProductForm = ({ onSubmit, initialData = {}, isEditing = false, formError }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: initialData
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="product-form">
      {formError && (
        <Message type="error">{formError}</Message>
      )}
      
      <div className="form-group">
        <label>Nombre del Producto</label>
        <input 
          {...register('producto', { required: 'Este campo es requerido' })}
          placeholder="Ej: Laptop HP Pavilion"
        />
        {errors.producto && <Message type="error" small>{errors.producto.message}</Message>}
      </div>

      <div className="form-group">
        <label>Categoría</label>
        <input 
          {...register('categoria', { required: 'Este campo es requerido' })}
          placeholder="Ej: Computadoras"
        />
        {errors.categoria && <Message type="error" small>{errors.categoria.message}</Message>}
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Precio ($)</label>
          <input 
            type="number"
            step="0.01"
            {...register('precio', { 
              required: 'Este campo es requerido',
              min: { value: 0, message: 'El precio debe ser mayor a 0' }
            })}
            placeholder="Ej: 999.99"
          />
          {errors.precio && <Message type="error" small>{errors.precio.message}</Message>}
        </div>

        <div className="form-group">
          <label>Stock</label>
          <input 
            type="number"
            {...register('stock', { 
              required: 'Este campo es requerido',
              min: { value: 0, message: 'El stock debe ser ≥ 0' }
            })}
            placeholder="Ej: 50"
          />
          {errors.stock && <Message type="error" small>{errors.stock.message}</Message>}
        </div>
      </div>

      <div className="form-actions">
        <Button 
          type="submit" 
          text={isEditing ? 'Actualizar Producto' : 'Agregar Producto'}
          variant="primary"
        />
        <Button 
          type="button" 
          text="Cancelar" 
          onClick={() => reset()}
          variant="secondary"
        />
      </div>
    </form>
  )
}

export default ProductForm