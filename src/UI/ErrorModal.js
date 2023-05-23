import React from 'react'
import Card from '../UI/Card'
import '../styles/ErrorModal.scss'

const ErrorModal = (props) => {
   return (
      <div className='error-container' onClick={props.onRemoveModal}>
         <Card className='error-modal'>
            <header>
               <h3>{props.errorTitle}</h3>
            </header>
            <section>
               <p>{props.errorMessage}</p>
            </section>
            <footer>
               <button onClick={props.onRemoveModal}>Okay</button>
            </footer>
         </Card>
      </div>
   )
}

export default ErrorModal
