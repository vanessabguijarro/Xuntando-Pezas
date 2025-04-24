import express from 'express';
import cors from 'cors';
import userRoutes from './routes/users';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
