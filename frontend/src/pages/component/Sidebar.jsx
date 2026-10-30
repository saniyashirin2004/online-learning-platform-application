import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <ol id="sidebar-container">
            <li>
                <Link to="/courses"><button>Course List</button></Link>
            </li>
            <li>
                <Link to="/createCourse"><button>Create Course</button></Link>

            </li>
            <li>
                <Link to="/trainer"><button>Trainers</button></Link>
            </li>
        </ol>
    )
}

export default Sidebar