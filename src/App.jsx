import "./App.css";
import About from "./components/About";
import MyProjects from "./components/MyProjects";
import Layout from "./Layout";
import NoPage from "./components/NoPage";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Blog from "./components/Blogs/Blog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="about" element={<About />} />
        <Route path="myprojects" element={<MyProjects />} />
        <Route path="blog" element={<Blog />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <NavBar />
    </>
  );
}

export default App;
