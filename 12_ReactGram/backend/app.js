// Importar dependências essenciais
import express from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";

// Importar rotas e conexão do banco de dados
import router from "./routes/Router.js";
import conn from "./config/db.js";

const port = process.env.PORT;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Config JSON and form data response
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Solve CORS
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200,
  })
);

// Upload directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// db connection
conn();

// test route
app.get("/", (req, res) => {
  res.send("API Working!");
});

// routes
app.use(router);

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
