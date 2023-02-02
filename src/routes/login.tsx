import React, {useState} from 'react';
import {ActionFunctionArgs, Form, json, Link, redirect, useActionData} from "react-router-dom";

import "../style/login.css"
import Button from "react-bootstrap/Button";
import {AUTH_USER, BASE_URL} from "../urls";
import axios from "axios";
import {RequestError} from "../types";
import Container from "react-bootstrap/Container";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

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

  return {status: response.status, message: body} as RequestError;
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
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const error = useActionData() as RequestError;

  return (
    <Container>
      <Form method="post" className="d-flex flex-column align-items-center">
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
            value={login}
            onChange={(event) => setLogin(event.target.value)}
            required={true}/>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="passwordInput" className="my-1">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="passwordInput"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required={true}/>
        </div>
        <div className="d-flex justify-content-center">
          <Button type="submit" bsPrefix="custom-btn" className="mx-2">Login</Button>
          <Link to="/signup">
            <Button bsPrefix="custom-btn" className="mx-2">Register</Button>
          </Link>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
