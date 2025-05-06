import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToDatabase from "./database.js"; // Import database connection

// ROUTES
import contactsRoutes from "./routes/contacts.js";  
import usersRoutes from "./routes/contacts.js"


dotenv.config(); // Load environment variables

const PORT = process.env.PORT || 8000;
const app = express();
 
// Middleware
app.use(cors());
app.use(express.json());
  

// USE Routes
app.use("/contacts", contactsRoutes); 
app.use("/users", usersRoutes); 

// Connect to MongoDB (using the import above)
connectToDatabase();


// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
}); 
