import React from 'react';
import {ActionFunctionArgs, Form, Link, redirect} from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {UserRegistrationResponse} from "../types";
import {BASE_URL, REGISTER} from "../urls";
import Container from "react-bootstrap/Container";

export const action = async ({request, params}: ActionFunctionArgs) => {
  const formData = await request.formData();
  const registrationData = Object.fromEntries(formData);
  const response = await register(registrationData);
  console.log(response);
  return redirect('/signin');
}

const register = async (registrationPayload: { [p: string]: FormDataEntryValue }) => {
  try {
    const {data} = await axios.post<UserRegistrationResponse>(
      `${BASE_URL}${REGISTER}`,
      registrationPayload,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error message: ', error.message);
      throw new Response(
        `Error message: ${error.message}`,
        {status: error.response?.status})
    } else {
      console.error('Unexpected error: ', error);
      throw new Response(`Unexpected message: ${error}`);
    }
  }
};

const Register: React.FC = () => (
  <Container>
    <section>
      <h2 className="mb-3">Information</h2>
      <p>
        Creating an account will allow you to make updates to the movies in the database and add new one.
        If you already have an account click the button below.
      </p>
      <div className="d-flex justify-content-center">
        <Link to="/signin">
          <Button bsPrefix="custom-btn">Login</Button>
        </Link>
      </div>
    </section>
    <section className="mt-5">
      <h2 className="mb-3">Registration Form</h2>
      <Form method="post" className="d-flex flex-column align-items-center">
        <div className="form-group my-2">
          <label htmlFor="nameInput" className="my-1">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="nameInput"
            required={true}/>
        </div>
        <div className="form-group my-2">
          <label htmlFor="emailInput" className="my-1">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="emailInput"
            required={true}/>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="passwordInput" className="my-1">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="passwordInput"
            required={true}/>
        </div>
        <div className="d-flex justify-content-center">
          <Button type="submit" bsPrefix="custom-btn">Register</Button>
        </div>
      </Form>
    </section>
  </Container>
);

export default Register;
