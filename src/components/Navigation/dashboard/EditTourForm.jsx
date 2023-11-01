import React, { useState } from 'react'
import axios from 'axios';
import "./EditTourForm.css"
function EditTourForm({ handleEditClick, item }) {
    const [title, setTitle] = useState(item.Title);
    const [description, setDescription] = useState(item.Description)
    const [groupsize, setGroupSize] = useState(item.GroupSize);
    const [duration, setDuration] = useState(item.Duration);
    function handleUpdate(e) {
        e.preventDefault()
        const Formdata = {
            Title: title,
            Description: description,
            GroupSize: groupsize,
            Duration: duration,
        }
        axios
            .put(`https://holiday-planner-4lnj.onrender.com/api/v1/tour/update/${item._id}`, Formdata)
            .then(() => {
                alert("Tour updated");
                window.location.reload()
            })
            .catch((error) => {
                alert(error);
            });
    }
    return (
        <div className="edittourcontainer">
            <div className="edittourcontent">
                <form method="get" onSubmit={handleUpdate}>
                    <div className="edittourd">
                        <label for="Image">Image:</label>
                        <input type="file" name="Image" />
                    </div>
                    <div className="edittourd">
                        <label>Country:</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="edittourd">
                        <label>Description:</label>
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="edittourd">
                        <label>Group Size:</label>
                        <input
                            type="number"
                            value={groupsize}
                            onChange={(e) => setGroupSize(e.target.value)}
                        />
                    </div>
                    <div className="edittourd">
                        <label>Duration:</label>
                        <input
                            type="text"
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                        />
                    </div>
                    <div className="edittourb">
                        <button type="submit"
                            className="edittoursave"
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            className="edittouredit"
                            onClick={handleEditClick}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default EditTourForm