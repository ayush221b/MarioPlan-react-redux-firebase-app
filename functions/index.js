const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase)

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello, amigos!");
});

const createNotification = (notification => {

    return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => {
        console.log('notofication added', doc)
    })
})

exports.projectCreated = 
    functions.firestore.document('projects/{projectId}').onCreate(doc => {

        const project = doc.data();
        const notification = {
            content: 'Added a new Project',
            user: `${project.authorFirstName} ${project.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification);
})