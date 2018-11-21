import React from 'react'
import  ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({projects}) => {
    return (
       <div className="project-list section">
           {/* this says if we have projects do the rest of the syntax otherwise dont */}
           { projects && projects.map(project => {
             return (
                 <Link to={'/project/' + project.id} key={project.id}>
                   <ProjectSummary project={project} />
                 </Link>
             )
           })}
       </div> 

    )
}

export default ProjectList;