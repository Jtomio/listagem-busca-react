import React from "react";
import { InputGroup, FormControl, Button, Form, Col } from "react-bootstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as C from "./styles";

function SearchBar(props) {
  return (
    <C.SearchHeader>
      <Form onSubmit={handleOnSubmit}>
        <Form.Row>
          <Col className="col-xl-3">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search your books"
                aria-label="Search your books"
                onChange={handleSearchChange}
              />
              <InputGroup.Append>
                <Button type="submit">
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
          <Col className="col-xl-2">
            <Form.Group controlId="order">
              <Form.Control as="select">
                <option>Newest</option>
                <option>Oldest</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Button variant="primary" className="float-right" onClick={newBook}>
              New Book
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </C.SearchHeader>
  );
}

export default SearchBar;
