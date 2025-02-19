import React from "react";

const Filter = (props) => {
  const filterData = props.filterData;
  const category = props.category;
  const setCategory = props.setCategory;
  function filterHandler(title) {
    setCategory(title);
  }
  // const [all,Development,Business,Design,Lifestyle]=filterData;
  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center ">
      {filterData.map((data) => (
        <button
          className={` text-lg px-2 py-1 rounded-md font-medium text-white bg-black  border-2 transition-all 
              duration-300 ${
                category === data.title
                  ? "bg-opacity-60 border-white"
                  : "bg-opacity-60 border-transparent"
              }`}
          key={data.id}
          onClick={() => filterHandler(data.title)}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;
