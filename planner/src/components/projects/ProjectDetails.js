import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'
import moment from 'moment'
const ProjectDetails = (props) => {
    // console.log(props)
    const { projects, auth } = props;
    if (!auth.uid) return <Redirect to='/signin' />

    if (projects) { 
         return (
        <div className="container section project-details">
          <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">{ projects.title }</span>
                <p>{ projects.content }</p>
            </div>
            <div className="card-action gret lighten-4 grey-text">
                <div>Posted by { projects.authorFirstName} { projects.authorLastName}</div>
                <div>{moment(projects.createdAt.toDate()).calendar()}</div>
            </div>
          </div>
       </div>
       ) 
    } else{
    return (
        <div className="container center">
          <h1>Loading Project.....</h1>
        </div>
        ) 
    }
}

const mapStateToProps = (state, ownProps) => {
    // console.log(state)

    const id = ownProps.match.params.id;
    const projects  = state.firestore.data.projects;
    const project = projects ? (projects[id]) :(null)
    return {
        projects: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'projects'}
    ])
)(ProjectDetails)

