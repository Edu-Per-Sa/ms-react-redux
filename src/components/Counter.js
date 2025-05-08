import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/counter-slice';

const stepBy = 10;

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
  const handleInvcrementBy = () => {
    dispacth(counterActions.incrementBy({stepBy}));
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
      <button onClick={handleInvcrementBy}> Increment by {stepBy} (+) </button>
      </div>
      <button onClick={toggleCounterHandler}> {counterShow ? 'Hidde <<<': 'Show >>>'} Counter </button>
    </main>
  );
};

export default Counter;
