import React from 'react'
import  ProjectSummary from './ProjectSummary'


const ProjectList = ({projects}) => {
    return (
       <div className="project-list section">
           {/* this says if we have projects do the rest of the syntax otherwise dont */}
           { projects && projects.map(project => {
             return (
                 <ProjectSummary project={project} key={project.id} />
             )
           })}
       </div> 

    )
}

export default ProjectList;