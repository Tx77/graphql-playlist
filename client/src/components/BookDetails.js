import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { getBookQuery } from '../queries/queries'

function BookDetails(props) {
  const { data } = useQuery(getBookQuery, { variables: { id: props.bookId } });

  function displayBookDetails() { 
    if (data && data.book) { 
      const { book } = data;
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All books by this author:</p>
          <ul className="other-books">
            {
              book.author.books.map(item => {
                return <li key={item.id}>{item.name}</li>
              })
            }
          </ul>
        </div>
      )
    } else {
      return <div>No book selected...</div>
    }
  }

  return (
    <div id="book-details">
      <div>{displayBookDetails()}</div>
    </div>
  )
}

export default BookDetails;
