import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Footer from '../Footer';

describe('Footer', () => {
  afterEach(cleanup);

  it('renders correctly in the DOM', () => {
    const tree = renderer.create(<Footer />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('contains the link to the license', () => {
    render(<Footer />);

    const nameElement = screen.getByText('MIT license');
    const { classList } = nameElement;

    expect(classList).toContain('hover:text-red-500');
  });
});
