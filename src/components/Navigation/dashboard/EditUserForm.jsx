import React, { useState } from "react";
import Modal from "react-modal";
import "./EditUserForm.css"

function EditUserForm({ isOpen, onRequestClose, user, onSaveEdit }) {
  const [editedUser, setEditedUser] = useState(user || {}); 

  const handleSave = () => {
    onSaveEdit(editedUser);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit User Form"
    >
        <div className="edit-container">
      <h2>Edit User</h2>
      <form>
        <label>Name:</label>
        <input
          type="text"
          value={editedUser.name || ""} 
          onChange={(e) =>
            setEditedUser({ ...editedUser, name: e.target.value })
          }
        />

        <label>Email:</label>
        <input
          type="email"
          value={editedUser.email || ""} 
          onChange={(e) =>
            setEditedUser({ ...editedUser, email: e.target.value })
          }
        />

        <label>Password:</label>
        <input
          type="password"
          value={editedUser.password || ""} 
          onChange={(e) =>
            setEditedUser({ ...editedUser, password: e.target.value })
          }
        />

        <label>Country:</label>
        <input
          type="text"
          value={editedUser.country || ""}
          onChange={(e) =>
            setEditedUser({ ...editedUser, country: e.target.value })
          }
        />
<div className="my-button">
        <button className="save" onClick={handleSave}>Save</button>
        <button className="cancel"  onClick={onRequestClose}>Cancel</button>
        </div>
      </form>
      </div>
    </Modal>
  );
}

export default EditUserForm;