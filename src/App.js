import { useState } from 'react'
import './App.scss'
import AddForm from './components/AddForm'
import UserList from './components/UserList'

function App() {
   const [data, setData] = useState([
      {
         key: 1,
         username: 'Max',
         age: 31,
      },
      {
         key: 2,
         username: 'Jm',
         age: 0,
      },
   ])

   const getData = (keyID, name, old) => {
      setData((prev) => [...prev, { key: keyID, username: name, age: old }])
   }

   const deleteData = (filterData) => {
      setData(data.filter( d => d.key != filterData))
   }

   return (
      <div className='app'>
         <div className='container'>
            <AddForm onGetData={getData} />
            <UserList data={data} onDeleteData={deleteData} />
         </div>
      </div>
   )
}

export default App
