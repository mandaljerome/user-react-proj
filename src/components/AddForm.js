import React, { useState } from 'react'
import ErrorModal from '../UI/ErrorModal'
import Card from '../UI/Card'
import '../styles/AddForm.scss'

const AddForm = (props) => {
   const [userChange, setuserChange] = useState('')
   const [ageChange, setAgeChange] = useState('')
   const [errorDetails, setErrorDetails] = useState('')

   const userNameChange = (e) => {
      setuserChange((prev) => {
         return e.target.value
      })
   }

   const ageYearChange = (e) => {
      setAgeChange((prev) => {
         return e.target.value
      })
   }

   const checkButton = (e) => {
      e.preventDefault()

      if (userChange.trim().length === 0 || ageChange.trim().length === 0) {
         setErrorDetails({
            errorTitle: 'Invalid input',
            errorMessage: 'Please input username and age',
         })
      } else if (ageChange < 0) {
         setErrorDetails({
            errorTitle: 'Invalid age',
            errorMessage: 'Please input 0+ age',
         })
      } else {
         const keyID = Math.random()
         props.onGetData(keyID, userChange, ageChange)
         setuserChange('')
         setAgeChange('')
      }
   }

   const removeModal = () => {
      setErrorDetails(null)
   }

   return (
      <>
         {errorDetails && (
            <ErrorModal
               errorTitle={errorDetails.errorTitle}
               errorMessage={errorDetails.errorMessage}
               onRemoveModal={removeModal}
            ></ErrorModal>
         )}
         <div className='add-form'>
            <form onSubmit={checkButton}>
               <label htmlFor='txtUsername'>Username</label>
               <input
                  id='txtUsername'
                  type='text'
                  onChange={userNameChange}
                  value={userChange}
               ></input>
               <label htmlFor='txtAge'>Age (Years)</label>
               <input
                  id='txtAge'
                  type='number'
                  onChange={ageYearChange}
                  value={ageChange}
               ></input>
               <button>Add User</button>
            </form>
         </div>
      </>
   )
}

export default AddForm
