const firebaseConfig = {

    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,

    // apiKey: "AIzaSyDuglE5HBZ5Na0wCktglDyCrI3l0khISdg",
    // authDomain: "disney-land-firebase.firebaseapp.com",
    // projectId: "disney-land-firebase",
    // storageBucket: "disney-land-firebase.appspot.com",
    // messagingSenderId: "965532174665",
    // appId: "1:965532174665:web:4dd8ade0c68c658fa43298"
};

export default firebaseConfig;