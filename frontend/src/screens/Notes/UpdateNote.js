import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import axios from "axios";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {  updateNoteAction } from "../../Redux/Actions/NotesActions";
import ErrorMessage from "../../components/Errors/ErroMessage";
import Loading from "../../components/Loaders/Loginloader";
import ReactMarkdown from "react-markdown";
import { useNavigate,useParams } from "react-router-dom";

function UpdateNote({ match }) {

    
    const un = useNavigate()
    const {id}= useParams()
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [category, setCategory] = useState();


  const dispatch = useDispatch();

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { loading, error } = noteUpdate;

//   const noteDelete = useSelector((state) => state.noteDelete);
//   const { loading: loadingDelete, error: errorDelete } = noteDelete;

//   const deleteHandler = (id) => {
//     if (window.confirm("Are you sure?")) {
//       dispatch(deleteNoteAction(id));
//     }
//     un("/mynotes");
//   };

  useEffect(() => {
    const fetching = async () => {
      try {
        const { data } = await axios.get(`/api/notes/${id}`);

      setTitle(data.title);
      setContent(data.content);
      setCategory(data.category);
      } catch (error) {
        alert("ded")
    
      }
    
    };

    fetching();
  }, [id,]);

  const resetHandler = () => {
    setTitle("");
    setCategory("");
    setContent("");
  };

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(updateNoteAction(id, title, content, category));
    if (!title || !content || !category) return;

    resetHandler();
    un("/mynotes");
  };

  return (
    <MainScreen title="Edit Note">
    
      <Card>
        <Card.Header>Edit your Note</Card.Header>
        <Card.Body>
          <Form onSubmit={updateHandler}>
            {/* {loadingDelete && <Loading />} */}
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {/* {errorDelete && (
              <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
            )} */}
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title"
                placeholder="Enter the title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter the content"
                rows={4}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
            {content && (
              <Card>
                <Card.Header>Note Preview</Card.Header>
                <Card.Body>
                  <ReactMarkdown>{content}</ReactMarkdown>
                </Card.Body>
              </Card>
            )}

            <Form.Group controlId="content">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="content"
                placeholder="Enter the Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            {loading && <Loading size={50} />}
            <br />
            <Button variant="success" type="submit">
              Update Note
            </Button>
            <Button
              className="mx-2"
              variant="danger"
            //   onClick={() => deleteHandler(match.params.id)}
            >
              Delete Note
            </Button>
          </Form>
        </Card.Body>

       
      </Card>
    </MainScreen>
  );
}

export default UpdateNote;