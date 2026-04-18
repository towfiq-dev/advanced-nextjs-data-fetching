import Book from '@/components/book/Book';
import React from 'react';

const BooksPage = async() => {
  const res = await fetch('http://localhost:5000/books', {next: {revalidate: 10}})
  const getBooks = await res.json()

  return (
    <div className='grid grid-cols-3 justify-between gap-4 items-center mt-10 max-w-300 mx-auto'>
      {
        getBooks.map((book, index)=> 
        <Book book={book} 
        key={index}>
        </Book>)
      }
    </div>
  );
};

export default BooksPage;