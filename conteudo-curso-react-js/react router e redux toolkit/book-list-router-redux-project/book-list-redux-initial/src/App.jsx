import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import BooksPage from './views/BooksPage.jsx';
import SingleBookPage from './views/SingleBookPage.jsx';
import AddBookPage from './views/AddBookPage.jsx';

function App() {

  return (
    <>


      <BrowserRouter>
        <Routes>
          {/*Página Inicial*/}
          <Route index element={<BooksPage />} />

          {/*Página para adicionar livro*/}
          <Route path="add-book" element={<AddBookPage />} />

          {/*Página individual de cada livro*/}
          <Route path="book/:id" element={<SingleBookPage />} />
        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
