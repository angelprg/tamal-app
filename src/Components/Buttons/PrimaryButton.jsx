import React from 'react'

const PrimaryButton = ({link, text}) => {
  return (
    <a href={link} className="btn btn-primary">{text}</a>
  )
}

export default PrimaryButton
