import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { getBooksQuery } from '../queries/queries'

//* components
import BookDetails from './BookDetails'

function BookList(props) {
  const { loading, data } = useQuery(getBooksQuery)
  const [selected, setSelected] = useState(null);

  function displayBooks() {
    if (loading) {
      return <div>Loading books...</div>
    } else {
      return data.books.map(book => {
        return (
          <li key={book.id} onClick={(e) => { setSelected(book.id) }}>
            {book.name}
          </li>
        )
      })
    }
  }

  return (
    <div>
      <ul id='book-list'>
        {displayBooks()}
      </ul>
      <BookDetails bookId={selected}/>
    </div>
  )
}

export default BookList
