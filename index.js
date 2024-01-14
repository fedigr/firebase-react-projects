const config = {
  apiKey: "AIzaSyArOE2Ifv058N5Yze1NLsBp5eGCPv6UFsE",
  authDomain: "wislatia-43241.firebaseapp.com",
  databaseURL: "https://wislatia-43241-default-rtdb.firebaseio.com",
  projectId: "wislatia-43241",
  storageBucket: "wislatia-43241.appspot.com",
  messagingSenderId: "1094082912965",
  appId: "1:1094082912965:web:067131f4a8a23faa4c46ac",
  measurementId: "G-9FWXV4WS5E"
};

/* this top is the configration file about my application in firebase  */
/* now build all code to connect to firebase and do all operation (CRUD) */

const {initializeApp} = require("firebase/app");
const {getDatabase ,ref,set} = require("firebase/database");

const app = initializeApp(config)
const db = getDatabase(app);
