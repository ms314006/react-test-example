import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { toBeInTheDocument } from 'jest-dom';
import Main from '../../src/component/Main';

expect.extend({ toBeInTheDocument });

describe('<Main />', () => {
  afterEach(() => {
    cleanup();
  });

  test('ClickNewsLink_RenderNewsPage', () => {
    const route = '/';
    const history = createMemoryHistory({ initialEntries: [route] });

    const { getByTestId, queryByTestId } = render(
      <Router history={history}>
        <Main />
      </Router>,
    );

    fireEvent.click(getByTestId('newsLink'));

    expect(queryByTestId('homePage')).toBeNull();
    expect(getByTestId('newsPage')).toBeInTheDocument();
  });
});
