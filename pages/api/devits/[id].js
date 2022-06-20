import db from "firebaseConfig/admin"

export default (req, res) => {
  const { query } = req
  const { id } = query

  db.collection("devits")
    .doc(id)
    .get()
    .then((doc) => {
      const data = doc.data()
      const id = doc.id
      const { createdAt } = data

      res.json({
        ...data,
        id,
        createdAt: +createdAt.toDate(),
      })
      res.status(200).end()
    })
    .catch(() => {
      res.status(404).end()
    })
}
