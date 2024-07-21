import express from 'express';
import connectDB from './data/db/mongoose';
import categoryRoutes from './presentation/routes/categoryRoutes';

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use("/api", categoryRoutes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});