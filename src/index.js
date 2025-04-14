import express from 'express';
import { sequelize } from "./database/connect.js";
import userRoute from "./routes/user.routes.js";

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use("/api", userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
