const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({
    status: 200,
    message: "✨ Yay! It's working 🥳",
  });
});

app.listen(8080, () => console.log("🚀 Server running on port: 8080 🚀"));
