import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import BookTable from './components/BookTable';
import TodoTable from './components/TodoTable';
import DisplayBoard from './components/DisplayBoard';
import DisplayTodo from './components/DisplayTodo';
import CreateBook from './components/CreateBook';
import { getAllBooks, createBook } from './services/BookService';
import { getAllTodos, createTodo } from './services/TodoService';
import Footer from './components/Footer';
import CreateTodo from './components/CreateTodo';

function App() {

  const [bookShelf, setBookShelf] = useState({});
  const [todoShelf, setTodoShelf] = useState({});
  const [books, setBooks] = useState([]);
  const [todos, setTodos] = useState([]);
  const [numberOfBooks, setNumberBooks] = useState(0);
  const [numberOfTodos, setNumberTodos] = useState(0);

  const handleSubmit = () => {
    createBook(bookShelf)
      .then(() => {
        setNumberBooks(numberOfBooks + 1);
      });
  }

  const todoSubmit = () => {
    createTodo(todoShelf)
      .then(() => {
        setNumberTodos(numberOfTodos + 1);
      });
  }

  const getAllBook = () => {
    getAllBooks()
      .then(data => {
        setBooks(data);
        setNumberBooks(data.length);
      });
  }

  const getAllTodo = () => {
    getAllTodos()
      .then(data => {
        setTodos(data);
        setNumberTodos(data.length);
      });
  }

  const handleOnChangeForm = (e) => {
    let inputData = bookShelf;
    if (e.target.name === 'book') {
      bookShelf.book = e.target.value;
    } else if (e.target.name === 'category') {
      bookShelf.category = e.target.value;
    } else if (e.target.name === 'author') {
      bookShelf.author = e.target.value;
    }
    setBookShelf(inputData);
  }

  const handleOnChangeForm2 = (e) => {
    let inputData = todoShelf;
    if (e.target.name === 'todo') {
      todoShelf.todo = e.target.value;
    } else if (e.target.name === 'category') {
      todoShelf.category = e.target.value;
    } else if (e.target.name === 'complete') {
      todoShelf.complete = e.target.value;
    }
    setTodoShelf(inputData);
  }


  return (
    <div className="main-wrapper">
      <div className="main">
        <Header />
        <CreateBook
          bookShelf={bookShelf}
          onChangeForm={handleOnChangeForm}
          handleSubmit={handleSubmit}
        />
        <DisplayBoard
          numberOfBooks={numberOfBooks}
          getAllBook={getAllBook}
        />
        <BookTable books={books} />
      </div>
      <div className='main'>
        <Header />
        <CreateTodo
          todoShelf={todoShelf}
          onChangeForm={handleOnChangeForm2}
          todoSubmit={todoSubmit} />
        <DisplayTodo
          numberOfTodos={numberOfTodos}
          getAllTodo={getAllTodo}
        />

        <TodoTable todos={todos} />

      </div>
      <Footer />

    </div>
  );
}

export default App;
