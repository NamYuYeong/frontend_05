import React from 'react'
import './Footer.css'

const Footer = (props) => {
    // const today = new Date();

  return (
    <footer>
        copyright &copy; {props.year}
    </footer>
  )
}

export default Footer