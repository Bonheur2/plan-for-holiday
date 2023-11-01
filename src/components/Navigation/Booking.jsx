import React from 'react'
import { useContext } from 'react';
import { AuthContext } from "../../context/AppProvider";
function Booking() {
  const { fetchBook } = useContext(AuthContext);

  return (
    <>
      <div className='messagecontainer'>
        <h2>Available Booking</h2>
        <table className="user-table">
          <thead>
            <tr>
              <th>USER ID</th>
              <th>TOUR ID</th>
              <th>IS PAID</th>
              <th>PAYMENT METHOD</th>
            </tr>
          </thead>
          <tbody>
            {fetchBook?.map((item, index) => (
              <tr key={item._id}>
                <td>{item.tourID}</td>
                <td>{item.userID}</td>
                <td>{item.isPaid}</td>
                <td>{item.paymentMethod}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div >


    </>
  )
}

export default Booking