const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/user");


mongoose.set('strictQuery', true);

// settings
const app = express();
const port = process.env.PORT || 9000;


// middlewares
app.use(express.json());
app.use("/api", userRoute);

// rutas (routes)
app.get("/", (req, res) => {
    res.send("Bienvenido a mi API");
  });

  // mongodb conección
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("conectando a MongoDB Atlas"))
.catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("Servidor escuchando", port));
