import Swal from 'sweetalert2'

const API_URL = 'https://retoolapi.dev/BuJvOm/productos'

export const useDeleteData = () => {
  const deleteData = async (id) => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    })

    if (!result.isConfirmed) return

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      })

      if (!response.ok) throw new Error('Error al eliminar el producto')

      Swal.fire({
        icon: 'success',
        title: '¡Eliminado!',
        text: 'El producto ha sido eliminado',
        timer: 1500
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.message || 'Error al eliminar el producto',
        timer: 2000
      })
      throw error
    }
  }

  return { deleteData }
}