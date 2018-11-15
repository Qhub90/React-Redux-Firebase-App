// we export our dispatch so iit can be used anywhere in the app.
// here we are returning the dispatch and state so that we can use later
// dispatch has a type and then takes in data that we passed in from above
// now we go to our (projectReducer) which handles any changes that needs to happen in our store

export const createProject = (project) => {
    return (dispatch, getState) => {
        // make async call to DB
        dispatch({ type: 'CREATE_PROJECT', project: project})
    }
};