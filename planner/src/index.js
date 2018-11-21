import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'

// We created store enchancers below
// thunk allows us to add middleware (return a function inside projectAction) that will let us to halt the dispatch until we finish making a call to the db
// We use compose to add extra middleware or store enchancers so that we can add extra functionality to our store
const store = createStore(rootReducer,
    compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, {useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true})
    )
    );
// Here we are waiting until firebaseAuthIsReady to load the app to the DOM.
// firebase and our react figures out that we are logged in then it renders to the DOM
// Otherwise we will see the page before it finishes loading evrything
    store.firebaseAuthIsReady.then(() => {

      ReactDOM.render(<Provider store ={store}><App /></Provider>, document.getElementById('root'));
      serviceWorker.unregister();

    })
