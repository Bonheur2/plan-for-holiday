import React from 'react'
import { useContext } from 'react';
import "./Message.css"
import { AuthContext } from "../../context/AppProvider";
import ReactPaginate from "react-paginate";
import { useState } from 'react';


function Message() {
  const { fetchContact } = useContext(AuthContext);
  const [pageNumber, setPageNumber] = useState(0);
  const messagePerPage = 8;
  const visitedPage = pageNumber * messagePerPage;
// console.log(fetchContact) ;
  const DisplayMessage = fetchContact?.slice(visitedPage, visitedPage + messagePerPage)
    .map((item, index) => (
      <tr key={item._id}>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.services}</td>
        <td>{item.message}</td>
      </tr>
    ));
  const pageCount = Math.ceil(fetchContact?.length / messagePerPage)
  const changepage = ({ selected }) => {
    setPageNumber(selected);
  }

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
            {DisplayMessage}
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

export default Message