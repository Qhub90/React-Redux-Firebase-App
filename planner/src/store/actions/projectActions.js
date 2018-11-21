import { firestore } from "firebase";

// we export our dispatch so iit can be used anywhere in the app.
// here we are returning the dispatch and state so that we can use later
// dispatch has a type and then takes in data that we passed in from above
// now we go to our (projectReducer) which handles any changes that needs to happen in our store

export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to DB
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
        dispatch({ type: 'CREATE_PROJECT', project: project})
        }).catch((err) =>{
            dispatch({ type: 'CREATE_PROJECT_ERROR', err})
        })
    }
};