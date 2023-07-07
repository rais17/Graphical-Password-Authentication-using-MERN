const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(cors()); // Enable CORS

//routes
const userRoutes = require("./routes/userRoutes");

//mount
app.use("/api/v1", userRoutes);

const connectWithDb = require("./config/database");
connectWithDb();

// static files
app.use(express.static(path.join(__dirname, './client/build')));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html')) 
})

//start the server
app.listen(PORT, () => {
  console.log(`App is started at Port no ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`<h1>This is Homepage</h1>`);
});
