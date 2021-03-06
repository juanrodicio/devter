import admin from "firebase-admin"
import "firebase-admin/firestore"

const serviceAccount = JSON.parse(process.env.FIREBASE_CONFIG)

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  })
} catch (err) {
  if (!/already exists/u.test(err.message)) {
    console.error("Firebase admin initialization error", err.stack)
  }
}

export default admin.firestore()
