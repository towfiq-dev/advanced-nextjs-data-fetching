import React from 'react';
export const generateStaticParams = async()=>{
  const res = await fetch('http://localhost:5000/books')
  const books = await res.json()
  return(books.map(book=> ({bookId: book.id})))
}
const BookDetailPage = async({params}) => {
  const {bookId} = await params
  const res = await fetch(`http://localhost:5000/books/${bookId}`)
  const received = await res.json()
  return (
    <div>
      <h1>{received.title}</h1>
    </div>
  );
};

export default BookDetailPage;