import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Hero2 from "../components/hero2";
import WorkCard from "../components/WorkCard";
const Projects = () => {
  return (
    <div>
      <Nav />
      <Hero2 heading="Projects" text="Here are some works I had worked with" />
      <WorkCard></WorkCard>
      <Footer />
    </div>
  );
};

export default Projects;
