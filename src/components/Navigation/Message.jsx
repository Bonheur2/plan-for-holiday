import React from 'react'
import { useContext } from 'react';
import"./Message.css"
import { AuthContext } from "../../context/AppProvider";
function Message() {
  const { fetchContact } = useContext(AuthContext);

  return (
    <>

      <div className='messagecontainer'>
        <h2>Available Messages</h2>
        <table className="user-table">
          <thead>
            <tr>
              <th>FuLLNAME</th>
              <th>EMAIL</th>
              <th>TELEPHONE</th>
              <th>SERVICES</th>
              <th>MESSAGE</th>
            </tr>
          </thead>
          <tbody>
            {fetchContact?.map((item, index) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.services}</td>
                <td>{item.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div >


    </>
  )
}

export default Message