import React, { useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  // ✅ FETCH COURSES
  useEffect(() => {
    axios
      .get("/api/courses")
      .then((res) => {
        setCourses(res.data.data); // ✅ ApiResponse.data
      })
      .catch(() => {
        toast.error("Failed to load courses");
      });
  }, []);

  // ✅ DELETE COURSE
  const handleDelete = (id) => {
    axios
      .delete(`/api/courses/${id}`)
      .then(() => {
        toast.success("Course deleted successfully");
        setCourses(courses.filter((c) => c.id !== id));
      })
      .catch(() => {
        toast.error("Delete failed");
      });
  };

  const handleEdit = (id) => {
    navigate(`/editCourse/${id}`);
  };

  return (
    <section id="courselist-container">
      <Sidebar />
      <ToastContainer />

      <aside className="course-list">
        {courses.length === 0 ? (
          <p>No courses available</p>
        ) : (
          courses.map((course) => (
            <ol key={course.id} className="course-card">
              <p>{course.courseName}</p>
              <p>{course.duration}</p>
              <p>{course.trainerName}</p>
              <p>{course.startDate}</p>

              <button id="deleteBtn" onClick={() => handleDelete(course.id)}>
                Delete
              </button>
              <button onClick={() => handleEdit(course.id)}>Edit</button>
            </ol>
          ))
        )}
      </aside>
    </section>
  );
};

export default Courses;
