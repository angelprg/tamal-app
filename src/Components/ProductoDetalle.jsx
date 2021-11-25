import React from 'react'
import { useParams } from 'react-router-dom'

const TamalDetalle = () => {
  const params = useParams()
  const id = params.id
  // Con useEffect hacer fetch del tamal específico
  return (
    <div>
      Mostrar datos del tamal {id}
    </div>
  )
}

export default TamalDetalle
