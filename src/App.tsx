import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import SubjectHub from "./components/SubjectHub";
import ResourceLibrary from "./components/ResourceLibrary";
import Events from "./components/Events";
import Mentors from "./components/Mentors";
import About from "./components/About";
import Impact from "./components/Impact";
import Contact from "./components/Contact";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="subjects" element={<SubjectHub />} />
        <Route path="library" element={<ResourceLibrary />} />
        <Route path="events" element={<Events />} />
        <Route path="mentors" element={<Mentors />} />
        <Route path="about" element={<About />} />
        <Route path="impact" element={<Impact />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
