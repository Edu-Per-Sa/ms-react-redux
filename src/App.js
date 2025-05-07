import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';


function App() {

  const isLogedIn = useSelector(actualState => actualState.user.isLogedIn);
  
  return (
    <Fragment>
      <Header/>
      {!isLogedIn && <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
