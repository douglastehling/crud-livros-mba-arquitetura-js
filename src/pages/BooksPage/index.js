import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  insertBookRequest,
  removeBookRequest,
} from "~/store/modules/books/actions";
import { Wrapper } from "./styles";
import {
  Container,
  Row,
  Col,
  Button,
  Table,
  Navbar,
  Modal,
} from "react-bootstrap";

import { Form, Input } from "@rocketseat/unform";

export default function BooksPage() {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);

  const [modalShow, setModalShow] = useState(false);

  const handleInsertBook = (data) => {
    dispatch(insertBookRequest(data));
    setModalShow(false);
  };
  const removeBook = (id) => {
    dispatch(removeBookRequest(id));
  };

  return (
    <>
      <Wrapper>
        <Row>
          <Col>
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#home" className="mr-auto">
                  Cadastro de livros
                </Navbar.Brand>

                <Button onClick={() => setModalShow(true)}>inserir</Button>
              </Container>
            </Navbar>
          </Col>
        </Row>
        <Container>
          <Row className="pt-5">
            <Col>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Titulo</th>
                    <th>Autor</th>
                    <th>Editora</th>
                    <th>Area</th>
                    <th>-</th>
                  </tr>
                </thead>
                <tbody>
                  {books.length === 0 ? (
                    <tr>
                      <td colSpan="6">Nenhum livro</td>
                    </tr>
                  ) : (
                    books.map((x) => (
                      <tr key={x.id}>
                        <td>{x.id}</td>
                        <td>{x.titulo}</td>
                        <td>{x.autor}</td>
                        <td>{x.editora}</td>
                        <td>{x.area}</td>
                        <td>
                          <Button
                            onClick={() => removeBook(x.id)}
                            variant="danger"
                          >
                            remover
                          </Button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </Wrapper>

      <Modal
        size="md"
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-md">
            Inserir Livro
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleInsertBook}>
            <Input
              type="text"
              name="titulo"
              required
              className="form-control mb-3"
              placeholder="Titulo do livro"
            />
            <Input
              type="text"
              name="autor"
              required
              className="form-control mb-3"
              placeholder="Autor"
            />
            <Input
              type="text"
              name="editora"
              required
              className="form-control mb-3"
              placeholder="Editora"
            />
            <Input
              type="text"
              name="area"
              required
              className="form-control mb-3"
              placeholder="Área"
            />
            <Button type="submit" variant="success">
              Salvar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
