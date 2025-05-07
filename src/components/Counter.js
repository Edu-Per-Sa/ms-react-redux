import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/counter-slice';

const Counter = () => {

  const counterValue = useSelector(actualState => actualState.counter.counterValue);
  const counterShow = useSelector(actualState => actualState.counter.show);

  const dispacth = useDispatch();

  const handleIncrement = () => {
    dispacth(counterActions.increment());
  };
  const handleDecrement = () => {
    dispacth(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispacth(counterActions.togle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {counterShow && <div className={classes.value}> {counterValue} </div>}
      <div>
        <button onClick={handleDecrement}> Decrement (-) </button>
        <button onClick={handleIncrement}> Increment (+) </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
