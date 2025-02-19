import React from "react";
import { FcLike } from "react-icons/fc";
import { toast } from "react-toastify";
import { FcLikePlaceholder } from "react-icons/fc";
const Card = (props) => {
  const courses = props.courses;
  const likedCourses = props.likedCourses;
  const setlikedCourses = props.setlikedCourses;
  function clickHandler() {
    if (likedCourses.includes(courses.id)) {
      setlikedCourses((prev) => prev.filter((cid) => cid !== courses.id));
      toast.warning("Like Removed");
    } else {
      if (likedCourses.length === 0) {
        setlikedCourses([courses.id]);
      } else {
        setlikedCourses((prev) => [...prev, courses.id]);
      }
      toast.success("Liked courses added");
    }
  }
  return (
    <div className="w-[300px] bg-black rounded-md overflow-hidden bg-opacity-50 ">
      <div className="relative">
        <img className="" src={courses.image.url} alt="" />
        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid  place-items-center">
          <button onClick={clickHandler}>
            {likedCourses.includes(courses.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-white leading-8">
          {courses.title}
        </h3>
        <h4 className="text-white mt-2">
          {courses.description.length > 100
            ? courses.description.substr(0, 100) + "..."
            : courses.description}
        </h4>
      </div>
    </div>
  );
};

export default Card;
