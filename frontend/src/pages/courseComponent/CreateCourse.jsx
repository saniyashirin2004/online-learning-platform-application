import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

const CreateCourse = () => {
  let [courseData, setCourseData] = useState({
    courseName: "",
    duration: "",
    trainerName: "",
    startDate: ""
  })
  let navigate = useNavigate();

  let handleChange = (e) => {
    let { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value })
  }
  let handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/courses', courseData)
      .then((res) => {
        console.log(res.data);
        toast.success("Course Addedd Successfully");
        setTimeout(() => {
          navigate('/courses')
        }, 3000)


      }).catch((err) => {
        toast.error(`${err}`)
      })
  }
  return (
    <form className='register-form' onSubmit={handleSubmit}>
      <ToastContainer />
      <fieldset>
        <legend>Create Course</legend>
        <label htmlFor="courseName"> Select Course:</label>

        <select name="courseName" id="courseName" onChange={handleChange}>
          <option value="">--Select Course---</option>
          <option value="Java Full Stack">Java Full Stack</option>
          <option value="Python Full Stack">Python Full Stack</option>
          <option value="MERN Stack">MERN Stack</option>
          <option value="MEAN Stack">MEAN Stack</option>
          <option value="Software Testing">Software Testing</option>

        </select>

        <label htmlFor="duration">Duration:</label>
        <input type="text" placeholder='Enter Duration' name='duration' id='duration' onChange={handleChange} />

        <label htmlFor="trainerName">Trainer Name:</label>
        <input type="text" placeholder='Enter Trainer Name' id='trainerName' name='trainerName' onChange={handleChange} />

        <label htmlFor="startDate">Course Start Date</label>
        <input type="date" id='startDate' placeholder='Enter Start Date' name='startDate' onChange={handleChange} />


        <div className="button-container">
          <button type="submit">Create Course</button>
          <button type="reset" onClick={() => setCourseData({ courseName: "", duration: "", trainerName: "", startDate: "" })}>Reset</button>
        </div>

      </fieldset>
    </form>
  )
}

export default CreateCourse