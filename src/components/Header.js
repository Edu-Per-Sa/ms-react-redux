import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';

import { userActions } from '../store/user-slice';

const Header = () => {
  const userIsLogedIn = useSelector(actualState => actualState.user.isLogedIn);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(userActions.logout())
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {userIsLogedIn && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
