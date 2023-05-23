import React from 'react'
import '../styles/Card.scss'

const Card = (props) => {
   return (
   <div className={`${props.className} card-container`}>
   {props.children}
   </div>
   )
}

export default Card
