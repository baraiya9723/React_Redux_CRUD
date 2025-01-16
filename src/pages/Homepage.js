import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Table, Container } from 'react-bootstrap';
import { deleteEntry } from '../redux/actions/entryActions';

const Homepage = () => {
  const entries = useSelector((state) => state.entries);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteEntry(id));
  };

  return (
    <Container className="my-4" >
      <h1>Homepage</h1>
      <Link to="/add">
        <Button variant="primary" className="mb-3">
          Add New Entry
        </Button>
      </Link>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={entry.id}>
              <td>{index + 1}</td>
              <td>{entry.name}</td>
              <td>{entry.description}</td>
              <td>
                <Link to={`/edit/${entry.id}`}>
                  <Button variant="warning" size="sm" className="me-2">
                    Edit
                  </Button>
                </Link>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(entry.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Homepage;
