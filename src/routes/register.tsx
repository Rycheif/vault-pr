import React from 'react';
import {ActionFunctionArgs, Form, Link, redirect} from "react-router-dom";
import Button from "react-bootstrap/Button";

export const action = async ({request, params}: ActionFunctionArgs) => {
  const formData = await request.formData();
  const obj = Object.fromEntries(formData);
  await new Promise((resolve, reject) => setTimeout(() => resolve(obj), 1000));
  console.log(formData);
  return redirect('/signin');
}

const Register: React.FC = () => (
  <div className="d-flex flex-wrap align-items-center justify-content-center mt-5">
    <section className="w-50 mx-2">
      <h2 className="mb-3">Information</h2>
      <p>
        Creating an account will allow you to make updates to the movies in the database and add new one.
        If you already have an account click the button below.
      </p>
      <Link to="/signin">
        <Button bsPrefix="custom-btn">Login</Button>
      </Link>
    </section>
    <section className="w-50 mt-5">
      <h2 className="mb-3">Registration Form</h2>
      <Form method="post" className="d-flex flex-column align-items-center">
        <div className="form-group my-2">
          <label htmlFor="loginInput" className="my-1">Login</label>
          <input type="text" name="login" className="form-control" id="loginInput" required={true}/>
        </div>
        <div className="form-group my-2">
          <label htmlFor="nameInput" className="my-1">Name</label>
          <input type="text" name="name" className="form-control" id="nameInput" required={true}/>
        </div>
        <div className="form-group my-2">
          <label htmlFor="emailInput" className="my-1">Email</label>
          <input type="email" name="email" className="form-control" id="emailInput" required={true}/>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="passwordInput" className="my-1">Password</label>
          <input type="password" name="password" className="form-control" id="passwordInput" required={true}/>
        </div>
        <div className="d-flex justify-content-center">
          <Button type="submit" bsPrefix="custom-btn">Register</Button>
        </div>
      </Form>
    </section>
  </div>
);

export default Register;
