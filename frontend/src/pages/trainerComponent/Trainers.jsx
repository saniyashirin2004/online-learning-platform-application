import React from 'react'
import isAuthorized from '../../utils/Auth'
import { Navigate } from 'react-router-dom'

const Trainers = () => {
  let trainersDetails = [
    {
      id: 1,
      trainerName: "Ethan Wright",
      experience: "3 Years",
      subject: "MERN Stack",
      image: "https://avatars.githubusercontent.com/u/1?v=4"
    },
    {
      id: 2,
      trainerName: "Alice Johnson",
      experience: "3 Years",
      subject: "Java Full Stack",
      image: "https://avatars.githubusercontent.com/u/3?v=4"
    },
    {
      id: 3,
      trainerName: "Charlie Davis",
      experience: "3 Years",
      subject: "Python",
      image: "https://avatars.githubusercontent.com/u/4?v=4"
    },
    {
      id: 4,
      trainerName: "Diana Evans",
      experience: "3 Years",
      subject: "Java Full Stack",
      image: "https://avatars.githubusercontent.com/u/2?v=4"
    },
    {
      id: 5,
      trainerName: "Bob Smith",
      experience: "3 Years",
      subject: "Testing",
      image: "https://avatars.githubusercontent.com/u/9919?v=4"
    },
    {
      id: 6,
      trainerName: "Fiona Miller",
      experience: "3 Years",
      subject: "DevOps",
      image: "https://avatars.githubusercontent.com/u/583231?v=4"
    },
    {
      id: 7,
      trainerName: "George Taylor",
      experience: "4 Years",
      subject: "ReactJS",
      image: "https://img.magnific.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
    },
    {
      id: 8,
      trainerName: "Henry Wilson",
      experience: "5 Years",
      subject: "Node.js",
      image: "https://img.magnific.com/free-photo/handsome-man-smiling-happy-face-portrait-close-up_53876-145493.jpg"
    },
    {
      id: 9,
      trainerName: "Ian Anderson",
      experience: "6 Years",
      subject: "Angular",
      image: "https://img.magnific.com/free-photo/indian-man-smiling-mockup-psd-cheerful-expression-closeup-portra_53876-143269.jpg"
    },
  ]
  
  return(
    
      <section className="tariner-mainContainer">
      <h1>Trainer Details</h1>
      <aside className="trainer-container">
        {
          trainersDetails.map((trainer)=>{
            console.log(trainer);
            return(
              <article className="trainer-card">
                <img src={trainer.image} height={150} width={150} alt="" />
                <h2>{trainer.trainerName}</h2>
                <p>Experience: {trainer.experience}</p>
                <p>Subject :{trainer.subject}</p>
              </article>
            )
          })
        }
      </aside>
    </section>
  )
  
}

export default Trainers