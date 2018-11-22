import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'
class Dashboard extends Component {
    render(){
        // console.log(this.props);
        const { projects, auth, notifications } = this.props;
        if (!auth.uid) return <Redirect to='signin' />
        
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={notifications} />
                    </div>
                </div>
            </div>
        )
    }
}

// We are mapping our redux state to the props in this component. The we create an object 
// name is projects..state from redux...project from rootReducer.....projects from projectReducer
// Finnaly we pass the function to connect so the connect function knows what data to get from the store 
// now we can use props.projects
const mapStateToProps = (state) => {
    console.log(state)
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

// We use compose that we import to compose multiple higher order components
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'projects', orderBy: ['createdAt', 'desc']},
      { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
    ])
)(Dashboard)