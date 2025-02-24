import express from 'express';
import cors from 'cors';
import sequelize from './config/db';
import userRouter from './routers';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', userRouter);

sequelize.sync().then(()=>{
    console.log('Database connected');
    app.listen(4000, ()=>{
        console.log('Server is running on port 4000');
    });
}).catch((err)=>{
    console.log(err);
});
