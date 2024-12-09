// src/components/App.jsx

// import Product from "./Product";

// src/components/App.jsx

const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
];

const BookList = ({ books }) => {
  return (
    <ol>
      {books.map((book) => {
        return <li key={book.id}>{book.name}</li>;
      })}
    </ol>
  );
};

const App = () => {
  return (
    <>
      <h1>Books of the week</h1>
      <BookList books={favouriteBooks} />
    </>
  );
};

export default App;