import React, { useState } from 'react'
import axios from 'axios';
import "./EditTourForm.css"
import Notiflix from "notiflix";

Notiflix.Notify.init({
    position: "righf-top",
    timeout: 3000,
    cssAnimation: true,
})
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
                Notiflix.Notify.success("Tour updated successful!");
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
                    <label for="Image">Image:</label>
                    <input type="file" name="Image" />

                    <label>Country:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label>Description:</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <label>Group Size:</label>
                    <input
                        type="number"
                        value={groupsize}
                        onChange={(e) => setGroupSize(e.target.value)}
                    />
                    <label>Duration:</label>
                    <input
                        type="text"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                    />
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