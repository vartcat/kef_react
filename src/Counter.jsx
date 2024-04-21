import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "./redux/counterSlice.js"

export default function Counter() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <span>{count}</span>
      <button onClick={()=>{dispatch(increment())}}>incrémenter</button>
      <button onClick={()=>{dispatch(decrement())}}>décrémenter</button>
    </div>
  );
}
