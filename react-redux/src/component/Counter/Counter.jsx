import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_COUNT, SUB_COUNT } from '../../action/counter';

const Counter = () => {
  const dispatch = useDispatch();
  const addCount = () => dispatch({ type: ADD_COUNT });
  const subCount = () => dispatch({ type: SUB_COUNT });

  const { count } = useSelector(state => state.counter);
  return (
    <div>
      <div data-testid="count">{count}</div>
      <div>
        <button type="button" onClick={addCount} data-testid="addBtn">
          ADD
        </button>
        <button type="button" onClick={subCount} data-testid="subBtn">
          SUB
        </button>
      </div>
    </div>
  );
};

export default Counter;
