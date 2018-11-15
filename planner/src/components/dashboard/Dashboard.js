import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render(){
        console.log(this.props);
        const { projects } = this.props;
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
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
    return {
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(Dashboard);