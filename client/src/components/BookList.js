import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

function BookList(props) {
  const { loading, data } = useQuery(getBooksQuery);

  function displayBooks() {
    if (loading) {
      return <div>Loading books...</div>;
    } else {
      return data.books.map(book => {
        return <li key={book.id}>{book.name}</li>;
      });
    }
  }

  return (
    <div>
      <ul id="book-list">{displayBooks()}</ul>
    </div>
  );
}

export default BookList;
