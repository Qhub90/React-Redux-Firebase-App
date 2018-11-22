const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase)

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello Babies!");
});

// here we are taking in a notification and then adding it to the notifications collection

const createNotificaton = (notification => {
    return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('notificaton added', doc));
})

// here we are saying to trigger when a new project Id is created in the 'projects collection'
// it takes the document that was created as an argument and now we can acess the data on that document(doc.data())
// also use backticks
exports.newProject = functions.firestore.document('projects/{projectId}')
        .onCreate(doc => {

    const project = doc.data();
    const notification = {
        content: 'Added a new project',
        user: `${project.authorFirstName} ${project.authorLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotificaton(notification)
})

exports.newUser = functions.auth.user()
       .onCreate(user =>{

     return admin.firestore().collection('users')
            .doc(user.uid).get().then(doc => {

              const newUser = doc.data();
              const notification = {
                  content: 'Joined the party',
                  user: `${newUser.firstName} ${newUser.lastName}`,
                  time: admin.firestore.FieldValue.serverTimestamp()
              }

              return createNotificaton(notification);
            })  
})