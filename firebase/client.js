import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD4hHFYIRmCrjn-El3JU3LHTxirHKhzvLg",
  authDomain: "devter-f6506.firebaseapp.com",
  projectId: "devter-f6506",
  storageBucket: "devter-f6506.appspot.com",
  messagingSenderId: "77767864962",
  appId: "1:77767864962:web:0a235065d4d8d4d2db3a9b",
  measurementId: "G-5JSB03ET41",
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL } = user
  return {
    avatar: photoURL,
    username: displayName,
    email,
  }
}

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null
    onChange(normalizedUser)
  })
}

export const loginWithGithub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase.auth().signInWithPopup(githubProvider)
}
