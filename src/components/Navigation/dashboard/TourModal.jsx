import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./TourModal.css"
import Notiflix from "notiflix";



Notiflix.Notify.init({
  position: "righf-top",
  timeout: 3000,
  cssAnimation: true,
})

function TourModal() {
  const onSubmit = async (tour) => {
    const formData = new FormData();
    formData.append("destination", tour.destination);
    formData.append("Title", tour.title);
    formData.append("Description", tour.description);
    formData.append("Duration", tour.duration);
    formData.append("GroupSize", tour.groupSize);
    formData.append("Price", tour.price);
    formData.append("Discount", tour.discount);
    formData.append("backdropImage", tour.image[0]);
    formData.append("Gallery", tour.gallery[0]);
    try {
      const res = await axios.post(
        "https://holiday-planner-4lnj.onrender.com/api/v1/tour/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.data) {
        
        console.log("Tour created", res.data);
        Notiflix.Notify.success("Tour created successful!");
        window.location.reload()
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="tour-container">
      <div className="addtour-container">
        <nav>Please add new tour</nav>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="garrely">Gallery:</label>
            <input
              type="file"
              name="gallery"
              accept="image/*"
              {...register("gallery", { required: true })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Image">Image:</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              {...register("image", { required: true })}
            />
          </div>
          <div className="form-group">
            <label>Country:</label>
            <input
              type="text"
              name="title"
              {...register("title", { required: true })}
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <input
              type="text"
              name="description"
              {...register("description", { required: true })}
            />
          </div>
          <div className="form-group">
            <label>Group Size:</label>
            <input
              type="number"
              name="groupsize"
              {...register("groupsize", { required: true })}
            />
          </div>
          <div className="form-group">
            <label>Duration:</label>
            <input
              type="text"
              name="duration"
              {...register("duration", { required: true })}
            />
          </div>
          <div className="edit-footerT">
            <button type="submit" className="createtourbtn">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default TourModal;
