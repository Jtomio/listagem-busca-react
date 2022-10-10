import ListItem from "./Components/ListItem";
import { Container } from "react-bootstrap";
import { getBooks } from "./Components/BookService/BookService";
import { useEffect, useState } from "react";
import SearchBar from "./Components/Search/SearchBar";
import * as C from "./styles";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(getBooks());
  }, []);

  return (
    <Container>
      <h1>Pesquisa Livros</h1>
      <hr />
      <SearchBar />
      <C.ListContainer>
        {books.map((book) => {
          return (
            <ListItem
              Key={book.url}
              title={book.title}
              image={book.image}
              price={book.price}
              url={book.url}
            />
          );
        })}
      </C.ListContainer>
    </Container>
  );
}

export default App;
