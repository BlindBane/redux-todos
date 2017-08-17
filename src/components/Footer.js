import React from 'react'
import { Link } from 'react-router-dom'

const Footer = (props) => {
  return (
    <div>
      <Link to='/'>All</Link>
      <Link to='/active'>Active</Link>
      <Link to='/complete'>Complete</Link>
    </div>
  )
}

export default Footer
