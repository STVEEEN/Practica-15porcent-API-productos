import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

const API_URL = 'https://retoolapi.dev/BuJvOm/productos'

export const useFetchData = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const refetch = async () => {
    try {
      setLoading(true)
      const response = await fetch(API_URL)
      if (!response.ok) throw new Error('Error al obtener los datos')
      const jsonData = await response.json()
      setData(jsonData)
    } catch (err) {
      setError(err.message)
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudieron cargar los productos',
        timer: 2000
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    refetch()
  }, [])

  return { data, loading, error, refetch }
}