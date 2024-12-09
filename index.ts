import express, { Application } from 'express';
import mongoose from 'mongoose';
import router from './routes/bookroutes';
import cors from 'cors';

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use('/books', router);

mongoose
  .connect('mongodb+srv://dadhichharshit222002:WcAae7CiASJ8szMN@bookstore.lcxta.mongodb.net/')
  .then(() => {
    console.log('Connected to Database');
    app.listen(5000, () => {
      console.log('Server is running on port 5000');
    });
  })
  .catch((err) => console.error(err));
