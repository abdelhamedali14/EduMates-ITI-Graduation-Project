import './courses.scss'
import img1 from './jonas 3.png'
import img2 from './indian.png'
import img3 from './nassif.png'
import img4 from './jonas.png'
import { Coursecard } from '../../components/coursecard/Coursecard'
import { Coursescategories } from '../../components/coursescategories/Coursescategories'
import { Uploadcoursemenu } from '../../components/uploadYourCourse/Uploadcoursemenu'
// import { Children, createContext, useState } from 'react'
import { useState, useEffect } from 'react'
import coursesapi from './../../coursesAPI/coursesapi';


// export const CoursesContext = createContext()

export const Courses = ({ props, Children }) => {
//   const [coursesStore, setCoursesStore] = useState([])
  // const courses = [
  //   {
  //     courseImg: img1,
  //     courseTitle: 'Advanced CSS and Sass: Flexbox, Grid, Animations and More',
  //     courseRating: 92,
  //     lessons: 17
  //   },
  //   {
  //     courseImg: img2,
  //     courseTitle: 'Java Programming for Complete Beginners',
  //     courseRating: 54,
  //     lessons: 12
  //   },
  //   {
  //     courseImg: img3,

  //     courseTitle: 'Problem Solving with JavaScript! (LeetCode)',
  //     courseRating: 100,
  //     lessons: 5
  //   },

  //   {
  //     courseImg: img4,
  //     courseTitle: 'JavaScript - The Complete Guide 2022 (Beginner + Advanced)',
  //     courseRating: 84,
  //     lessons: 21
  //   }
  // ]
//   console.log(courses)

let [allCourses, setAllCourses] = useState([]);

const getCoursesFromApi = async ()=>{
  const response = await coursesapi.get(`/courses`);
  // console.log(response.data);
  return response.data;
}
useEffect(()=>{
  const getCourses = async ()=>{
    const allcoursesData = await getCoursesFromApi();
    if(allcoursesData) setAllCourses(allcoursesData);
  }
  getCourses();
}, []);
console.log(allCourses);


  return (
    <>
      <div className='container-fluid  py-3 '>
        <h2 className='heading ps-3 py-1'>courses</h2>
        <div className='row justify-content-around '>
          <div className='col-lg-8 col-md-6 col-sm-6  '>
            <div className='row g-5 justify-content-around '>
              {allCourses && allCourses.map((course, i) => {
                return (
                  <div className='col-lg-6  col-sm-12 ' key={i}>
                    <div className='course'>
                      <Coursecard course={course} />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className='col-lg-3 col-md-6    col-sm-5   m-md-0 '>
            <Coursescategories />
            <Uploadcoursemenu />
          </div>
        </div>
      </div>
      {/* <CoursesContext.Provider value={{ courses }}>
        {Children}
      </CoursesContext.Provider> */}
    </>
  )
}
