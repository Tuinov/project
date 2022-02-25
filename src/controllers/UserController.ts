import { NextFunction, Request, Response } from "express";
import { User } from "../model/User";
import { get, controller, use, bodyValidator, post } from './decorators';

function logger(req: Request, res: Response, next: NextFunction) {
  console.log('Request was made!');
  next();
}

@controller('/user')
class UserController {

  static model = new User();

  @get('/login')
  @use(logger)
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="POST">
        <div>
          <label>Email</label>
          <input name="email" />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" />
        </div>
        <button>Submit</button>
      </form>
      `)
  }

  @post('/login')
  @bodyValidator('email', 'password')
  async postlogin(req: Request, res: Response) {
    const { email, password } = req.body;
    
    const user = await UserController.model.getAuthUser();
    res.json(user)


    // if (email === 'myemail@gmail.com' && password === 'pass') {
    //   // Show that the user is logged in
    //   req.session = { loggedIn: true };

    //   // Redirect to the root route
    //   res.redirect('/');

    // } else {
    //   res.send('Invalid email or password');
    // }
    console.log(req.body);

  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect('/');
  }
}