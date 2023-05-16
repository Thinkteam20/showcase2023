import React from "react";
import "./styles/AllProjects.css";
import { INFO } from "../data/user";
import Project from "./Project";
import "./styles/AllProjects.css";

export default function AllProjects() {
    return (
        <div className='all-projects-container'>
            {INFO.projects.map((project, index) => (
                <div className='all-projects-project' key={index}>
                    <Project
                        logo={project.logo}
                        title={project.title}
                        description={project.description}
                        linkText={project.linkText}
                        link={project.link}
                    />
                </div>
            ))}
        </div>
    );
}
