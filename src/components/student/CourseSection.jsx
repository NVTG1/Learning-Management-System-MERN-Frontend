import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import CourseCard from './CourseCard'

function CourseSection() {
  const { allCourses } = useContext(AppContext)

  return (
    <div className="text-center my-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">
        Learn From Industry Experts
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        Upgrade your skills with high-quality video courses taught by top instructors.
        Master in-demand technologies and grow your career at your own pace with hands-on learning.
      </p>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {allCourses.slice(0, 4).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>

      {/* Button */}
      <Link 
        to={'/course-list'} 
        onClick={() => scrollTo(0,0)} 
        className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
      >
        Show All Courses
      </Link>
    </div>
  )
}

export default CourseSection
