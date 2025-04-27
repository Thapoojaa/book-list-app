// src/components/BookList.jsx
import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.map((book, index) => (
        <BookCard 
          key={index}
          title={book.title}
          author={book.author}
          description={book.description}
        />
      ))}
    </div>
  );
};

export default BookList;
