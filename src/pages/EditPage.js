// src/pages/EditPage.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateEntry } from '../redux/actions/entryActions';
import { Container, Form, Button } from 'react-bootstrap';

const EditPage = () => {
  const { id } = useParams(); // Get the ID from the URL
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const entry = useSelector((state) =>
    state.entries.find((entry) => entry.id === parseInt(id))
  );

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (entry) {
      setName(entry.name);
      setDescription(entry.description);
    }
  }, [entry]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEntry = {
      id: parseInt(id),
      name,
      description,
    };
    dispatch(updateEntry(updatedEntry));
    navigate('/');
  };

  if (!entry) {
    return (
      <Container className="my-4">
        <h1>Entry Not Found</h1>
        <p>The entry you are trying to edit does not exist.</p>
      </Container>
    );
  }

  return (
    <Container className="my-4">
      <h1>Edit Entry</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="description" className="my-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </Container>
  );
};

export default EditPage;
