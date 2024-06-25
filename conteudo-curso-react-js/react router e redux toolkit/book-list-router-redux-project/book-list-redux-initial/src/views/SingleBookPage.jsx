import { useParams, Link, useNavigate } from 'react-router-dom';
import Notes from '../components/Notes.jsx'
import { useDispatch, useSelector } from 'react-redux';
import { selectBooks, eraseBook, toogleRead } from '../store/booksSlice.js';
import { eraseBookNotes } from '../store/notesSlice.js';

function SingleBookPage() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleEraseBook(id) {
    if (confirm('Você tem certeza que deseja apagar o livro e todas as notas?')) {
      dispatch(eraseBook(id));
      dispatch(eraseBookNotes(id));
      //Voltando para página inicial usando o hook useNavigate do React Router
      navigate("/");
    }
  }

  const { id } = useParams();

  const books = useSelector(selectBooks);

  const book = books.filter(book => book.id == id)[0];

  return (
    <>
      <div className="container">
        <Link to="/">


          <button className="btn">
            ← De volta aos livros
          </button>
        </Link>
        {
          book ?

            <div>
              <div className="single-book">
                <div className="book-cover">
                  <img src={book.cover} />
                </div>

                <div className="book-details">
                  <h3 className="book-title">{book.title}</h3>
                  <h4 className="book-author">{book.author}</h4>
                  <p>{book.synopsis}</p>
                  <div className="read-checkbox">
                    <input 
                      onClick={()=>{dispatch(toogleRead(book.id))}}
                      type="checkbox" 
                      defaultChecked={book.isRead} />
                    <label>{book.isRead ? "Already Read It" : "Haven't Read it yet"}</label>
                  </div>
                  <div onClick={() => handleEraseBook(book.id)} className="erase-book">
                    Apagar livro
                  </div>
                </div>
              </div>

              <Notes bookId={id} />
            </div>

            :

            <div>
              <p>Livro não encontrado, clique no botão para voltar para a lista de livro</p>
            </div>

        }

      </div>
    </>
  )
}

export default SingleBookPage
