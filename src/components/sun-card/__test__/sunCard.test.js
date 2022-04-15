import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import store from '../../../store/configureStore';
import SunCard from '../sunCard';

describe('SunCard', () => {
  afterEach(cleanup);

  it('renders correctly in the DOM', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <SunCard />
          </Router>
        </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with the exact name', () => {
    render(
      <Provider store={store}>
        <Router>
          <SunCard />
        </Router>
      </Provider>,
    );

    const nameElement = screen.getByText('The Sun');
    const { classList } = nameElement;

    expect(classList).toContain('whitespace-nowrap');
    expect(classList).toContain('font-control');
  });
});
