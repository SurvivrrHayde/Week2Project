const express = require("express");
const router = express.Router();
const db = require("./firebase");

const {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc
} = require("firebase/firestore");
const { route } = require(".");

router.get("/messages", async (req, res, next) => {
  const messages = [];
  const docs = await getDocs(collection(db, "messages"));
  docs.forEach((message) =>
    messages.push({ id: message.id, ...message.data() })
  );
  res.json({ result: messages });
});

router.post("/post", async (req, res, next) => {
  await addDoc(collection(db, "messages"), req.body);
});

router.get("/get", async (req, res, next) => {
  await getDoc(doc(db, "messages", req.query.id)).then((message) => {
    res.json(message.data())
  });
});

router.put("/edit", async (req, res, next) => {
    await updateDoc(doc(db, "messages", req.body.id), {
        user: req.body.user,
        message: req.body.message,
      });
});

router.delete("/delete", async (req, res, next) => {
  await deleteDoc(doc(db, "messages", req.query.id));
  res.sendStatus(200);
});

module.exports = router;
