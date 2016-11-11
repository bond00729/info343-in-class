//put your Firebase config and initialization code here
//since this file is included in every HTML page, 
//firebase will be consistently initialized for each
//of your HTML pages

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAZKG2cm4KiDRQPlA6aLOgmT-O-d84vOus",
    authDomain: "tasks-demo-2dba9.firebaseapp.com",
    databaseURL: "https://tasks-demo-2dba9.firebaseio.com",
    storageBucket: "tasks-demo-2dba9.appspot.com",
    messagingSenderId: "709780963506"
  };
  firebase.initializeApp(config);