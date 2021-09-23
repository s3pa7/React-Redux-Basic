import { useSelector , useDispatch } from  'react-redux';

import { counterActions} from "../store/counterSlice";
import classes from './Counter.module.css';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.counter);
    const show = useSelector(state => state.counter.showCounter);
    debugger;
    const  incrementHandler = () => {
        //with redux
       /* dispatch({type:'increment'})*/


        //with redux - toolkid
        dispatch(counterActions.increment())
    }
    const  decrementHandler = () => {
        //with redux
       /* dispatch({type:'decrement'})*/


        //with redux - toolkid
        dispatch(counterActions.decrement())
    }
    const  increaseHandler = () => {
        //with redux
       /* dispatch({type:'increase', amount:10 })*/

        //with redux - toolkid
        //Jenerate for toolkid by default  {type: SOME_UNIQUE_IDENTIFIER, payload:10}
        //payload default key by toolkid
        dispatch(counterActions.increase(10))

    }
    const toggleCounterHandler = () => {
        //with redux
       /* dispatch({type:'toggle' })*/

        //with redux - toolkid
        dispatch(counterActions.toggleCounter())


    };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
        {show && <div className={classes.value}>{counter}</div>}
        <div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={increaseHandler}>Increase by 10</button>
            <button onClick={decrementHandler}>Decrement</button>

        </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};



export default Counter;
