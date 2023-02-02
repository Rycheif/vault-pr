import React, {useState} from 'react';
import {ActionFunctionArgs, Form, redirect, useActionData} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import axios from "axios";
import {Movie, RequestError} from "../types";
import {BASE_URL, MOVIES} from "../urls";

export const action = async ({request}: ActionFunctionArgs) => {
  const formData = await request.formData();
  const movieData = Object.fromEntries(formData);
  const response = await addNewMovie(movieData);
  return redirect(`/movies/details/${response.id}`);
};

const addNewMovie = async (payload: { [p: string]: FormDataEntryValue }) => {
  try {
    const {data} = await axios.post<Movie>(
      `${BASE_URL}${MOVIES}`,
      payload,
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
}

const Add = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const error = useActionData() as RequestError;

  return (
    <Container>
      <section className="mt-5">
        <h2 className="mb-3 text-center">Add new movie</h2>
        <span className='text-danger'>
          {error != undefined && error.status != 200 ? error.message : ''}
        </span>
        <Form method="post" className="d-flex flex-column">
          <div className="form-group my-2">
            <label htmlFor="titleInput" className="my-1">Name</label>
            <input
              type="text"
              name="title"
              className="form-control"
              id="titleInput"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required={true}/>
          </div>
          <div className="form-group my-2">
            <label htmlFor="imageInput" className="my-1">Poster URL</label>
            <input
              type="text"
              name="image"
              className="form-control"
              id="imageInput"
              value={image}
              onChange={(event) => setImage(event.target.value)}
              required={true}/>
          </div>
          <div className="form-group mb-2">
            <label htmlFor="contentInput" className="my-1">Description</label>
            <textarea
              name="content"
              className="form-control"
              id="contentInput"
              value={content}
              onChange={(event) => setContent(event.target.value)}
              required={true}/>
          </div>
          <div className="d-flex justify-content-center">
            <Button type="submit" bsPrefix="custom-btn">Submit</Button>
          </div>
        </Form>
      </section>
    </Container>
  );
};

export default Add;
