import { useDispatch } from 'react-redux';
import classes from './Auth.module.css';
import { userActions } from '../store/user-slice';

const Auth = () => {

  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(userActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
