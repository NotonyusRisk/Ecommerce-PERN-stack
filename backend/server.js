import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from './routes/productRoutes.js'; 

dotenv.config(); // Load environment variables from .env file: dotenv es un paquete que carga las variables de entorno desde un archivo .env a process.env

const app = express(); // Create an Express application: Express es un framework de Node.js que facilita la creación de aplicaciones web
const PORT = process.env.PORT;

app.use(express.json()); // Parse JSON bodies: Express es un framework de Node.js que facilita la creación de aplicaciones web
app.use(cors()); // Enable CORS: CORS es un mecanismo que permite que los recursos restringidos en una página web sean solicitados desde otro dominio fuera del dominio desde el cual se sirvió el primer recurso.
app.use(helmet()); // Protect HTTP headers: Helmet es un middleware que ayuda a proteger la app
app.use(morgan("dev")); // Log HTTP requests: Morgan es un middleware que ayuda a registrar las peticiones HTTP

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
