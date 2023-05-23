import React from 'react'
import '../styles/UserList.scss'

const UserList = (props) => {
   const data = props.data

   const clickDelete = (e) => {
      props.onDeleteData(e.target.id)
    }

   const dataList = data.map((e) => <p id={e.key} onClick={clickDelete} key={e.key}>{e.username} ({e.age} {e.age > 0 ? 'years old' : 'year old'})</p>)

   

  return (
    <div className='user-list'>
      {data.length ? dataList : <p>No data found</p>}
    </div>
  )
}

export default UserList


  