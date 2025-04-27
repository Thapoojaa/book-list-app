// src/App.jsx
import React from 'react';
import BookList from './components/BookList';
import './App.css'; // We will style it here

function App() {
  const books = [
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      description: 'A novel set in the American South during the 1930s.'
    },
    {
      title: '1984',
      author: 'George Orwell',
      description: 'A dystopian novel set in a totalitarian regime.'
    },
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      description: 'A novel depicting the Jazz Age and the American Dream.'
    }
  ];

  return (
    <div className="app">
      <h1>Book List</h1>
      <BookList books={books} />
    </div>
  );
}

export default App;
