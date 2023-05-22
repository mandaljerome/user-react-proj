import React, { useState } from 'react'
import '../styles/AddForm.scss'

const AddForm = (props) => {

   const [userChange, setuserChange] = useState('')
   const [ageChange, setAgeChange] = useState('')


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

   const checkButton = () => {
      const keyID = Math.random()
      props.onGetData(keyID, userChange, ageChange)
      setuserChange('')
      setAgeChange('')
   }

   return (
      <div className='add-form'>
         <label>Username</label>
         <input type='text' onChange={userNameChange} value={userChange}></input>
         <label>Age (Years)</label>
         <input type='text' onChange={ageYearChange} value={ageChange}></input>
         <button onClick={checkButton}>Add User</button>
      </div>
   )
}

export default AddForm
