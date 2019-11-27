import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { render, fireEvent, cleanup } from 'react-testing-library';
import counterReducer from '../../src/reducer/counter';
import Counter from '../../src/component/Counter';

describe('<Counter />', () => {
  afterEach(cleanup);

  test('ClickAddButton_CountWillAdd1', () => {
    const store = createStore(
      combineReducers({ counter: counterReducer }),
    );
    const { getByTestId } = render(
      <Provider store={store}>
        <Counter />
      </Provider>,
    );

    fireEvent.click(getByTestId('addBtn'));

    expect(getByTestId('count').textContent).toBe('1');
  });
});
