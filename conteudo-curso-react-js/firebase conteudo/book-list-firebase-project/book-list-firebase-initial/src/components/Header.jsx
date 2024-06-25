import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from '../firebase/config.js';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/usersSlice.js';

function Header({ pageTitle }) {

  const dispatch = useDispatch();

  function handleSignOut() {
    if (confirm("Você quer mesmo fazer o logout?")) {
      signOut(auth).then(() => {
        dispatch(setUser(null));
      }).catch((error) => {
        console.log(error);
      });

    }
  }

  return (

    <>

      <h1>{pageTitle}</h1>

      <div className="header-btns">

        <NavLink to="/">
          <button className="btn">
            Book List
          </button>
        </NavLink>

        <NavLink to="/add-book">
          <button className="btn">
            Add Book +
          </button>
        </NavLink>

        <button
          onClick={handleSignOut}
          className="btn transparent">
          Logout
        </button>

      </div>

    </>
  )
}

export default Header
