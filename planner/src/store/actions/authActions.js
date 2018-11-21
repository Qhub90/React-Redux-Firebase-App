// 2nd
// Here we create an asyncrhonos request
// we take in the credentials(email, password) 
// because of ..thunk.. we can halt the dispatch and return a function instead
// we take dispatch as a parameter also getState and { getFirebase }
// const firebase lets us communicate with our project 
// firebase.auth() is a function and signInWithEmailAndPassword() is a method that takes in the em and pswd as parameters in this instance
export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then( () => {
          dispatch({ type: 'LOGIN_SUCCESS'})  
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err })
        })
    }
}

export const signOut = () => {
   return (dispatch, getState, { getFirebase }) => {
       const firebase = getFirebase();

       firebase.auth().signOut().then( () => {
        dispatch({type: 'LOGOUT_SUCCESS'})
       })

   }
}

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((res) =>{
            return firestore.collection('users').doc(res.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(() => {
            dispatch({type: 'SIGNUP_SUCCESS'})
        }).catch((err) => {
            dispatch({type: 'SIGNUP_ERROR', err})
        })

    }
}