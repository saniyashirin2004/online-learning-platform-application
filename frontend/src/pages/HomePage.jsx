import React from 'react'
import SimpleSlider from './component/SimpleSlider'
import OwnerMessage from './component/OwnerMessage'

const HomePage = () => {
  return (
    <section className="homePageContainer">
      <marquee behavior="" direction=""><h1>Online Course</h1></marquee>
      <SimpleSlider/>
      <OwnerMessage/>
    </section>
  )
}

export default HomePage