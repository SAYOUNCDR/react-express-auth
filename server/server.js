const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
dotenv.config();

// const MONGO_URL = process.env.MONGO_URL; // For local
const MONGO_URL_ATLAS = process.env.MONGO_URL_ATLAS; // For deployment
const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(MONGO_URL_ATLAS)
  .then(() => console.log("Mongo Db connected ssucessfully"))
  .catch((err) => console.error(err));

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return done(null, false, { message: "User not found" });
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return done(null, false, { message: "Password is not correct" });
      }

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const newUser = await User.create({ username, password: hashedPassword });
    res.json({ message: "User registered", user: newUser.username });
  } catch (err) {
    res.status(400).json({ error: "User already exists" });
  }
});

app.post("/login", (req, res, next) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err) {
      return res.status(500).json({ error: "Server error" });
    }
    if (!user) {
      return res.status(400).json({ error: info.message });
    }
    res.json({ message: "Login sucess", username: user.username });
  })(req, res, next);
});

app.listen(PORT, () => console.log(`Express backend is live on ${PORT}`));
