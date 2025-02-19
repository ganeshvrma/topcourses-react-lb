import { useState } from "react";
import React from "react";
import Card from "./Card";
const Cards = (props) => {
  const courses = props.courses;
  const category = props.category;
  const [likedCourses, setlikedCourses] = useState([]);
  function getCourse() {
    if (category === "All") {
      let allCourse = [];
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourse.push(courseData);
        });
      });
      return allCourse;
    } else {
      //main sirf specific category ka array pass karunga
      return courses[category];
    }
  }
  //  console.log(courses);
  return (
    <div className="flex justify-center flex-wrap gap-4 mb-4  ">
      {getCourse().map((courses) => (
        <Card
          key={courses.id}
          courses={courses}
          likedCourses={likedCourses}
          setlikedCourses={setlikedCourses}
        />
      ))}
    </div>
  );
};

export default Cards;
