import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyD4hHFYIRmCrjn-El3JU3LHTxirHKhzvLg",
  authDomain: "devter-f6506.firebaseapp.com",
  projectId: "devter-f6506",
  storageBucket: "devter-f6506.appspot.com",
  messagingSenderId: "77767864962",
  appId: "1:77767864962:web:0a235065d4d8d4d2db3a9b",
  measurementId: "G-5JSB03ET41",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebase.firestore(firebaseApp)

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL, uid } = user
  return {
    avatar: photoURL,
    email,
    uid,
    username: displayName,
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

export const addDevit = ({ avatar, content, img, userId, username }) => {
  return database.collection("devits").add({
    avatar,
    content,
    img,
    userId,
    username,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0,
  })
}

const mapDevitFromFirebaseToDevitObject = (doc) => {
  const data = doc.data()
  const id = doc.id
  const { createdAt } = data

  return {
    ...data,
    id,
    createdAt: +createdAt.toDate(),
  }
}

export const listenLatestDevits = (callback) => {
  return database
    .collection("devits")
    .orderBy("createdAt", "desc")
    .onSnapshot(({ docs }) => {
      const newDevits = docs.map(mapDevitFromFirebaseToDevitObject)
      callback(newDevits)
    })
}

export const uploadImage = (file) => {
  const ref = firebase.storage().ref(`/images/${file.name}`)
  return ref.put(file)
}
