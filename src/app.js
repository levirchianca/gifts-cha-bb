require("dotenv").config();

const express = require("express");
require('express-async-errors');
const cors = require("cors");
const routes = require("./routes");

const app = express();
const port = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());
app.use(routes);

// Global error handling
app.use((err, req, res, next) => {
  console.error({err});

  return res.status(500).json({
    error: true,
    message: "Erro inesperado dentro do servidor. Por favor, tente novamente"
  });
});

app.listen(port, () => {
  console.log(`Server Started on port ${port}`);
});