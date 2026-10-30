import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

const EditCourse = () => {
  const [editCourse, setEditCourse] = useState({
    courseName: "",
    duration: "",
    trainerName: "",
    startDate: ""
  })

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`/api/courses/${id}`)
      .then((res) => {
        const data = res.data.data

        // ✅ SAFELY set values (never undefined)
        setEditCourse({
          courseName: data.courseName || "",
          duration: data.duration || "",
          trainerName: data.trainerName || "",
          startDate: data.startDate || ""
        })
      })
      .catch(() => {
        toast.error("Failed to load course")
      })
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setEditCourse(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.put(`/api/courses/${id}`, editCourse)
      .then(() => {
        toast.success("Course Updated Successfully")
        setTimeout(() => {
          navigate('/courses')
        }, 2000)
      })
      .catch(() => {
        toast.error("Update Failed")
      })
  }

  return (
    <form className='register-form' onSubmit={handleSubmit}>
      <ToastContainer />
      <fieldset>
        <legend>Update Course</legend>

        <label>Select Course:</label>
        <select
          name="courseName"
          value={editCourse.courseName}
          onChange={handleChange}
        >
          <option value="">--Select Course---</option>
          <option value="Java Full Stack">Java Full Stack</option>
          <option value="Python Full Stack">Python Full Stack</option>
          <option value="MERN Stack">MERN Stack</option>
          <option value="MEAN Stack">MEAN Stack</option>
          <option value="Software Testing">Software Testing</option>
        </select>

        <label>Duration:</label>
        <input
          type="text"
          name="duration"
          value={editCourse.duration}
          onChange={handleChange}
        />

        <label>Trainer Name:</label>
        <input
          type="text"
          name="trainerName"
          value={editCourse.trainerName}
          onChange={handleChange}
        />

        <label>Course Start Date:</label>
        <input
          type="date"
          name="startDate"
          value={editCourse.startDate}
          onChange={handleChange}
        />

        <div className="button-container">
          <button type="submit">Update Course</button>
          <button
            type="button"
            onClick={() =>
              setEditCourse({
                courseName: "",
                duration: "",
                trainerName: "",
                startDate: ""
              })
            }
          >
            Reset
          </button>
        </div>
      </fieldset>
    </form>
  )
}

export default EditCourse
