"use client";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectPage from "./components/ProjectPage";
import AllProjects from "./components/AllProjects";

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-primary">
      <Navbar />
      <div>
        <div className="mx-auto mt-16 py-4 px-12">
          <AllProjects />
          <Contact />
        </div>
      </div>
      <Footer />
    </main>
  );
}
