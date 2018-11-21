import React from 'react'
import moment from 'moment'

// for the date if we put it as project.createdAt.toDate() it will
// give us an error because that is an obect 
// one way to deal with it could be to add .string() but that gives us too much info
// so instead we 'yarn add moment' then add it to the moment function to format it
const ProjectSummary = ({project}) => {
    return (

<div className="card z-depth-0 project-summary">
    <div className="card-context grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
        <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
    </div>
</div>
    )
}


export default ProjectSummary