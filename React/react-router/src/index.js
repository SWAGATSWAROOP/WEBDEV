import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/learn" element={<Learn />}>
        {/* Child of Parent route */}
        <Route path="course" element={<Courses />}>
          <Route path=":courseid" element={<CourseID />}></Route>
        </Route>
        <Route path="bundle" element={<Bundles />}></Route>
      </Route>
      {/* Navigate to has a problem as it lacks the back thing so we use the replace so that it smoothly goes back to previous page */}
      <Route path="/myapps" element={<Navigate replace to="/learn" />}></Route>
    </Routes>
  </Router>
);

function App() {
  return <div>React Routing</div>;
}

function Learn() {
  return (
    <div>
      <h1>React Routing to Learn</h1>
      <Link to="/learn/course">Courses</Link> ||
      <Link to="/learn/bundle">Bundles</Link>
      <Outlet />
    </div>
  );
}

function Courses() {
  const courseList = ["Java", "JavaScript", "React", "BlockChain"];
  const randomCourseName =
    courseList[Math.floor(Math.random() * courseList.length)];
  return (
    <div>
      <h1>Course List</h1>
      <h3>More Courses are given below</h3>
      <NavLink to={`/learn/course/${randomCourseName}`}>
        {randomCourseName}
      </NavLink>
      <Outlet />
    </div>
  );
}

function CourseID() {
  const { courseid } = useParams();
  return (
    <div>
      <h1>URL Param is : {courseid}</h1>
    </div>
  );
}

function Bundles() {
  return (
    <div>
      <h1>Bundles List</h1>
    </div>
  );
}
