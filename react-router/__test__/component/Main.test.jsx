import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import { toBeInTheDocument } from 'jest-dom';
import Main from '../../src/component/Main';

expect.extend({ toBeInTheDocument });

describe('<Main />', () => {
  afterEach(() => {
    cleanup();
  });

  test('ClickNewsLink_RenderNewsPage', () => {
    const { getByTestId, getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <Main />
      </MemoryRouter>,
    );

    fireEvent.click(getByText('最新消息'));

    expect(getByTestId('newsPage')).toBeInTheDocument();
  });
});
