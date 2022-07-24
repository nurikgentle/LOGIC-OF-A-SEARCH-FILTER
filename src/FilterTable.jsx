import React, { useState } from 'react'
import MockData from '../src/MOCK_DATA.json'

const FilterTable = () => {

  const [searchTerm, setSearchTerm] =  useState("")

  return (
    <div className='container'>
      <input 
      className='form-control'
      style={{ marginTop: 50, marginBottom: 20, width: "40%" }}
      type='text'
      placeholder='Search...'
      onChange={(e) => {
        setSearchTerm(e.target.value)
      }}
      />
        <table className='table table-bordered'>
          <thead className='thead-dark'>
             <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Gender</th>
             </tr>
          </thead>
          <tbody>
             {MockData.filter((val) => {
              if (searchTerm === '') {
                return val
              } else if (
                val.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.email.toLowerCase().includes(searchTerm.toLowerCase())
              ){
                return val
              }
             }).map(m => (
                 <tr key={m.id}>
                    <td>{m.first_name}</td>
                    <td>{m.last_name}</td>
                    <td>{m.email}</td>
                    <td>{m.gender}</td>
                 </tr>
             ))}
          </tbody>
        </table>
    </div>
  )
}

export default FilterTable