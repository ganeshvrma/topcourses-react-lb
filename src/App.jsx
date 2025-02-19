import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Spinner from "./components/Spinner";
import Cards from "./components/Cards";
import ScrollToTop from "./components/ScrollToTop";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";
function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  async function fetchCourses() {
    setLoading(true);
    try {
      const fetchedData = await fetch(apiUrl);
      const realData = await fetchedData.json();
      //  console.log(realData);
      setCourses(realData.data);
    } catch (error) {
      toast.error("Network issue");
    } finally {
      setLoading(false); // Ensure loading is false after fetch completes
    }
  }
  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#457b9d]">
      <div>
        <Navbar />
      </div>
      <div className="">
        <div>
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh] ">
          {loading ? (
            <Spinner />
          ) : (
            <Cards courses={courses} category={category} />
          )}
        </div>
        <div>
          <ScrollToTop />
        </div>
      </div>
    </div>
  );
}

export default App;
