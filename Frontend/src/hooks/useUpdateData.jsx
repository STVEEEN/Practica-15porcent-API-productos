import Swal from 'sweetalert2'

const API_URL = 'https://retoolapi.dev/BuJvOm/productos'

export const useUpdateData = () => {
  const updateData = async (id, productData) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      })

      if (!response.ok) throw new Error('Error al actualizar el producto')

      const data = await response.json()
      
      Swal.fire({
        icon: 'success',
        title: '¡Actualizado!',
        text: 'Producto actualizado correctamente',
        timer: 1500
      })

      return data
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.message || 'Error al actualizar el producto',
        timer: 2000
      })
      throw error
    }
  }

  return { updateData }
}