import Swal from 'sweetalert2'

const API_URL = 'https://retoolapi.dev/BuJvOm/productos'

export const useSaveData = () => {
  const saveData = async (productData) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      })

      if (!response.ok) throw new Error('Error al guardar el producto')

      const data = await response.json()
      
      Swal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'Producto agregado correctamente',
        timer: 1500
      })

      return data
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.message || 'Error al guardar el producto',
        timer: 2000
      })
      throw error
    }
  }

  return { saveData }
}