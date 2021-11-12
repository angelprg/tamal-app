import React from 'react'

const CardTitle = ({title, oferta}) => {
  const titleMayusculas = title.toUpperCase()
  const classOferta = oferta ? 'text-success' : ''
  return (
    <h5 className={`card-title ${classOferta}`}>{titleMayusculas}</h5>
  )
}

export default CardTitle
