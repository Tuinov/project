import express, { Request, Response} from 'express';
// import cookieSession from 'cookie-session';
import expressSession from 'express-session'
import { AppRouter } from './AppRouter';
import './controllers/UserController';
import './controllers/RootController';
import './controllers/ProductController';
import './controllers/OrderController';
import bodyParser, { json } from 'body-parser';
import 'dotenv/config'
import path from 'path'

const app = express();

app.use(json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieSession({ keys: ['asfadsfadfs'] }));

app.use(
  expressSession({
    secret: 'sjsjkfrjkfkrjf',
    resave: true,
    saveUninitialized: false,
  })
);

app.use(AppRouter.getInstance());


let PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
