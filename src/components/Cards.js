import React from 'react'
import Card  from './Card';
import { useState } from 'react';

const Cards = (props) => {

     let courses = props.courses;
     let category = props.category;

    const [likedCourses, setLikedCourses] = useState([]);


    //  returns you a all courses received from the api response
     function getCourses(){
      if (category === "All"){
        let allCourses = [];
        Object.values(courses).forEach( courseCategory =>{
            courseCategory.forEach( courseData => {
                allCourses.push(courseData);
            })
        })
        return allCourses;
      }
      else{
        // main sirf specific category ka data array me pass kru ga
        return courses[category];
      }
        
     }


  return (
    <div>
       { getCourses().map ( (course) => 
       <Card key={course.id} course = {course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
        )}
    </div>
  )
}
export default Cards