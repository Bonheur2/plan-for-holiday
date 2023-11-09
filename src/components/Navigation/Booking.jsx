import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from "../../context/AppProvider";
import ReactPaginate from "react-paginate";
function Booking() {
  const { fetchBook } = useContext(AuthContext);

  // pagination 

  const [pageNumber, setPageNumber] = useState(0);
  const bookPerPage = 8;
  const visitedPage = pageNumber * bookPerPage;

  const DisplayBook = fetchBook?.slice(visitedPage, visitedPage + bookPerPage)
    .map((item, index) => (
      <tr key={item._id}>
        <td>{item.tourID}</td>
        <td>{item.userID}</td>
        <td>{item.isPaid}</td>
        <td>{item.paymentMethod}</td>
      </tr>
    ))
    const pageCount = Math.ceil(fetchBook?.length / bookPerPage)
    const changepage = ({ selected }) => {
      setPageNumber(selected);
    }

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
            {DisplayBook}
          </tbody>
        </table>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changepage}
          containerClassName={"paginationBtn"}
          previousLinkClassName={"previousBtn"}
          nextLinkClassName={"nextBtn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div >


    </>
  )
}

export default Booking