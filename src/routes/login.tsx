import React from 'react';
import {ActionFunctionArgs, Form, json, Link, redirect, useActionData} from "react-router-dom";

import "../style/login.css"
import Button from "react-bootstrap/Button";
import {AUTH_USER, BASE_URL} from "../urls";
import axios from "axios";
import {AuthError} from "../types";
import Container from "react-bootstrap/Container";

export const action = async ({request}: ActionFunctionArgs) => {
  const formData = await request.formData();
  const payload = Object.fromEntries(formData);
  const response = await authUser(payload);
  const body = await response.json() as string;
  if (response.status === 200) {
    localStorage.setItem('token', body);
    window.dispatchEvent(new StorageEvent('storage', {
      key: 'token',
      newValue: body,
    }));

    return redirect("/");
  }

  return {status: response.status, message: body} as AuthError;
}

const authUser = async (payload: { [p: string]: FormDataEntryValue }) => {
  try {
    const {data, status} = await axios.post<{ token: string }>(
      `${BASE_URL}${AUTH_USER}`,
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

    return json(data.token, {status: status});
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error message: ', error.message);
      const code = Number(error.message
        .substring(error.message
          .search(/\d+$/)));
      if (code === 401) {
        return json("Incorrect login or password", {status: code});
      } else if (code === 404) {
        return json("User does not exist", {status: code});
      }

      return json(error.message, {status: code});
    } else {
      console.error('Error', error);
      return json(error, {status: 0});
    }
  }
};

const Login: React.FC = () => {
  const error = useActionData() as AuthError;

  return (
    <Container>
      <Form method="post">
        <span className='text-danger'>
          {error != undefined && error.status != 200 ? error.message : ''}
        </span>
        <div className="form-group my-2">
          <label htmlFor="loginInput" className="my-1">Login</label>
          <input
            type="text"
            name="login"
            className="form-control"
            id="loginInput"
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
          <Button type="submit" bsPrefix="custom-btn">Login</Button>
          <Link to="/signup">
            <Button bsPrefix="custom-btn">Register</Button>
          </Link>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
