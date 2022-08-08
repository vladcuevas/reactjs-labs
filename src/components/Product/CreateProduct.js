import React, { useState } from 'react'
import './CreateProduct.css'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image'

function CreateProduct() {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
    <h1>Add Medicine</h1>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter medicine title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Price" />
      </Form.Group>

      <Form.Group class="mb-3" controlId='formBasicRating'>
        <Form.Label>Rating</Form.Label>
        <Form.Control
          type="number"
          placeholder="0"
          aria-label="Default rating"
          disabled
          readOnly
        />
      </Form.Group>

      <Form.Group controlId="formImageURL" className="mb-3">
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="file" onChange={handleChange} />
        </Form.Group>
          <Image className='Image' src={file} thumbnail/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  );
}

export default CreateProduct