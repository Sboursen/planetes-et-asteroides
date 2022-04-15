import { render, screen, fireEvent } from '@testing-library/react';
import { toMatchDiffSnapshot } from 'snapshot-diff';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import store from '../../../store/configureStore';
import Header from '../Header';
import '@testing-library/jest-dom';

expect.extend({ toMatchDiffSnapshot });

describe('Header', () => {
  test('@Header Home Navigation', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>,
    );
    fireEvent.click(screen.getByText(/Home/));
    const firstRender = asFragment();
    fireEvent.click(screen.getByText(/Home/));

    expect(firstRender).toMatchDiffSnapshot(asFragment());
  });

  test('@Header About Navigation', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>,
    );
    fireEvent.click(screen.getByText(/About/));
    const firstRender = asFragment();
    fireEvent.click(screen.getByText(/About/));
    expect(firstRender).toMatchDiffSnapshot(asFragment());
  });
});
