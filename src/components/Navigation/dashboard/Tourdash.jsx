import React, { useState } from "react";
// import { tourlists } from "../Tourlist";
import { useContext } from "react";
import { AuthContext } from "../../../context/AppProvider";
import Axios from "axios";
import "./Tourdash.css";
import TourModel from "./TourModal";
import EditTourForm from "./EditTourForm";
import Notiflix, { Report } from "notiflix";
import { FaEdit, FaTrash } from "react-icons/fa";
import ReactPaginate from "react-paginate"

function Tourdash() {
  // const tours = [
  //   {
  //     id: 1,
  //     name: "City Tour",
  //     price: 50,
  //   },
  //   { id: 2,
  //     name: "Adventure Trek",
  //     price: 100
  //   },
  //   {
  //     id: 3,
  //     name: "Cultural Experience",
  //     price: 75,
  //   },
  // ];

  // console.log({tourlists.name})

  const { myTours } = useContext(AuthContext);
  const [editform, setEditform] = useState(null)
  const [editForm, setEditForm] = useState(false)
  function EditMyForm(item) {
    setEditform(item)
    setEditForm(!editForm);
  }

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [tourToDelete, setTourToDelete] = useState(null);
  const handleConfirmDelete = async (id) => {
    try {
      Notiflix.Confirm.show(
        "Confirm delete tour",
        "Do you want to delete?",
        "Yes",
        "No",
        async () => {
          const res = await Axios.delete(
            `https://holiday-planner-4lnj.onrender.com/api/v1/tour/delete/${id}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          Report.success("Tour", "Tour deleted successfull", "Okay")
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        },
        () => {
          Report.success("Cancel", "Cancel delete successfull", "Okay")
        },
        {}
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteClick = (tours) => {
    setTourToDelete(tours);
    handleConfirmDelete();
  };
  const handleCancelDelete = () => {
    setShowDeleteConfirm(false);
  };

  const [addTour, setAddTour] = useState(false);
  function NewTour() {
    setAddTour(!addTour);
  }


  // pagination

  const [pageNumber, setPageNumber] = useState(0);
  const tourPerPage = 4;
  const visitedPage = pageNumber * tourPerPage;

  const DisplayTour = myTours?.slice(visitedPage, visitedPage + tourPerPage)
    .map((item, index) => (
      <tr key={item._id}>
        <td>
          <img
            src={item.backdropImage}
            height={43}
            width={63}
            alt="IMAGES"
          />
        </td>
        <td className="titledash">{item.Title}</td>
        <td className="descriptiondash">{item.Description}</td>
        <td className="pricedash">{item.Price}</td>
        <td className="durationdash">{item.Duration}</td>
        <td className="editdelete">

          <button className="edit" onClick={() => EditMyForm(item)}>
            <FaEdit />
          </button>
          <button
            className="delete"
            onClick={() => handleConfirmDelete(item._id)}
          >
            <FaTrash />
          </button>
        </td>
      </tr>
    ))
  const pageCount = Math.ceil(myTours.length / tourPerPage)
  const changepage = ({ selected }) => {
    setPageNumber(selected);
  }

  return (
    <>
      {addTour && <TourModel />}
      {editForm && <EditTourForm item={editform} />}
      <div>
        <h2>Available Tours</h2>
        <nav className="add-user-btn" onClick={NewTour}>
          Add Tour
        </nav>
        {/* <nav> */}
        {/* <GiCancel onClick={NewTour} className="cancel-btn" /> */}
        {/* </nav> */}

        <table className="user-table">
          <thead>
            <tr>
              <th>IMAGE</th>
              <th>TITLE</th>
              <th>DESCRIPTION</th>
              <th>PRICE</th>
              <th>DURATION</th>
              <th>OPTION</th>
            </tr>
          </thead>
          <tbody>
            {/* {myTours? */}
            {DisplayTour}
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
        {showDeleteConfirm && (
          <div className="popup">
            <p>Are you sure you want to delete {tourToDelete._id}?</p>
            <button onClick={handleConfirmDelete}>OK</button>
            <button onClick={handleCancelDelete}>Cancel</button>
          </div>
        )}
      </div>
    </>
  );
}

export default Tourdash;
