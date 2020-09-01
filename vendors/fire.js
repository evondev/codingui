import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp({
      apiKey: "AIzaSyA_laQsMy1Cwrr6PXDhYulmuyJqK7GwUPk",
      authDomain: "codingui-bdd21.firebaseapp.com",
      databaseURL: "https://codingui-bdd21.firebaseio.com",
      projectId: "codingui-bdd21",
      storageBucket: "codingui-bdd21.appspot.com",
      messagingSenderId: "949549299875",
      appId: "1:949549299875:web:86678c9e445949ae3a6716",
    })
  : firebase.app();

const fire = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default fire;
