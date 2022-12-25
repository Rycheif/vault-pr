import React from 'react';
import {ActionFunctionArgs, Form, Link, redirect} from "react-router-dom";

import "../style/login.css"
import Button from "react-bootstrap/Button";

export const action = async ({request, params}: ActionFunctionArgs) => {
  const formData = await request.formData();
  const obj = Object.fromEntries(formData);
  await new Promise((resolve, reject) => setTimeout(() => resolve(obj), 1000));
  console.log(formData);
  return redirect('/');
}

const Login: React.FC = () => (
  <div className="login-container d-flex flex-column align-items-center justify-content-center">
    <Form method="post">
      <div className="form-group my-2">
        <label htmlFor="loginInput" className="my-1">Login</label>
        <input type="text" name="login" className="form-control" id="loginInput" placeholder="Login" required={true}/>
      </div>
      <div className="form-group mb-2">
        <label htmlFor="passwordInput" className="my-1">Password</label>
        <input type="password" name="password" className="form-control" id="passwordInput" placeholder="Password" required={true}/>
      </div>
      <div className="d-flex justify-content-between">
        <Button type="submit" bsPrefix="custom-btn">Login</Button>
        <Link to="/signup">
          <Button bsPrefix="custom-btn">Register</Button>
        </Link>
      </div>
    </Form>
  </div>
);

export default Login;
