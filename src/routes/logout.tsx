import React from 'react';
import {ActionFunctionArgs, json, redirect} from "react-router-dom";
import {decodeToken} from "react-jwt";
import {User} from "../types";
import {BASE_URL, LOGOUT} from "../urls";
import axios from "axios";

export const action = async ({request}: ActionFunctionArgs) => {
  const token = localStorage.getItem('token');
  if (null !== token && token !== '') {
    const user = decodeToken<User>(token);
    if (null !== user) {
      await logout(user?.userId);
      localStorage.removeItem('token');
      window.dispatchEvent(new StorageEvent('storage', {
        key: 'token',
        newValue: null,
      }))
      return redirect('/');
    }
  }
};

const logout = async (userId: string) => {
  try {
    const {data, status} = await axios.delete<{ deletedCount: number }>(
      `${BASE_URL}${LOGOUT}${userId}`);

    return json(data.deletedCount, {status: status});
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error message: ', error.message);
      const code = Number(error.message
        .substring(error.message
          .search(/\d+$/)));

      return json(error.message, {status: code});
    } else {
      console.error('Error', error);
      return json(error, {status: 0});
    }
  }
};

const Logout = () => (
  <div>logout</div>
);

export default Logout;
