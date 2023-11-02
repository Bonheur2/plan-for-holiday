import React, { useState } from "react";
import "./Users.css";
import Modal from "react-modal";
import { GiCancel } from "react-icons/gi"
import Notiflix, { Report } from "notiflix";
import EditUserForm from "./EditUserForm";
import { useEffect, useContext } from "react";
import { AuthContext } from "../../../context/AppProvider";
import axios from "axios";
import { FaTrash } from "react-icons/fa";


Modal.setAppElement("#root");

function Users() {
  const { fetchUsersData } = useContext(AuthContext);
  // console.log(myusers);

  // const initialUserData = [
  //   {
  //     id: 1,
  //     name: "Bonheur",
  //     email: "bonheurrwanda@gmail.com",
  //     password: "urwagasabo",
  //     country: "Rwanda",
  //   },
  //   {
  //     id: 2,
  //     name: "Jonathan",
  //     email: "jonathan@gmail.com",
  //     password: "janath123",
  //     country: "USA",
  //   },
  // ];

  // const [userData, setUserData] = useState(initialUserData);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState();


  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const handleDelete = async (id) => {

    try {
      Notiflix.Confirm.show(
        "Confirm to delete user",
        "Do you want to delete?",
        "Yes",
        "No",
        async () => {
          const res = await axios.delete(
            `https://holiday-planner-4lnj.onrender.com/api/v1/auth/users/delete/${id}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          Report.success("User", "User deleted successfull", "Okay")
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

    // const updatedUserData = userData.filter((user) => user.id !== id);
    // setUserData(updatedUserData);


  };
  const [addUser, setaddUser] = useState(false)

  function NewUsers() {
    setaddUser(true);
  }


  //add user 

  const handleadduser = async (e) => {
    e.preventDefault();
  
    try {
      await axios.post(
        "https://holiday-planner-4lnj.onrender.com/api/v1/auth/signup",
        formdata
      );
      console.log(formdata);
      Navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {addUser && (
        <div className="register-container1">
          <div className="register-form1">
            <nav>
              <GiCancel onClick={NewUsers} className="cancel-btn" />
            </nav>
            <form action="" className="reg-form1" onSubmit={handleadduser}>
              <label htmlFor="">Fullname</label>
              <input type="text"
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your fullname" />

              <label htmlFor="">Email</label>
              <input type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email" />

              <label htmlFor="">Password</label>
              <input type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password" />

              <label htmlFor="">Country</label>
              <input type="text"
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter your country" />

              <input type="submit" value="Add User" />
            </form>
            <div></div>
          </div>
        </div>
      )}
      <div className="user-container">
        {/* <nav className="add-user-btn" onClick={NewUsers}>
          Add User
        </nav> */}
        <table className="user-table">
          <thead>
            <tr className="mytheader">
              <th>FULLNAME</th>
              <th>EMAIL</th>
              <th>ROLE</th>
              <th>COUNTRY</th>
              <th>OPTIONS</th>
            </tr>
          </thead>
          <tbody>
            {fetchUsersData?.map((user) => (
              <tr key={user._id}>
                <td>{user.fullName}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.location}</td>
                <td className="editdelete">
                  <button
                    className="delete"
                    onClick={() => handleDelete(user._id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <EditUserForm
        isOpen={isEditModalOpen}
        onRequestClose={() => setIsEditModalOpen(false)}
        user={selectedUser}
        onSaveEdit={(updatedUser) => {
          console.log("Updated User Data:", updatedUser);
          setIsEditModalOpen(false);
        }}
      />
    </>
  );
}

export default Users;