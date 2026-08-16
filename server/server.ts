import cors from 'cors';
import express, { Request, Response } from 'express';
import 'dotenv/config';
import { clerkMiddleware } from '@clerk/express'

const app = express();

// Middleware 
app.use(clerkMiddleware())
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send('Server is Live!');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});