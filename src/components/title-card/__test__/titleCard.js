import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import TitleCard from '../titleCard';

describe('TitleCard', () => {
  afterEach(cleanup);

  it('renders correctly in the DOM', () => {
    const mass = {
      massValue: 5.97237,
      massExponent: 24,
    };
    const vol = {
      volValue: 1.08321,
      volExponent: 12,
    };
    const tree = renderer
      .create(<TitleCard name="Earth" type="Planet" mass={mass} vol={vol} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with the given name', () => {
    const mass = {
      massValue: 5.97237,
      massExponent: 24,
    };
    const vol = {
      volValue: 1.08321,
      volExponent: 12,
    };
    render(<TitleCard name="Earth" type="Planet" mass={mass} vol={vol} />);

    const nameElement = screen.getByText('Earth');
    const { classList } = nameElement;

    expect(classList).toContain('text-5xl');
    expect(classList).toContain('font-control');
  });

  it('renders with the given moonsNumber', () => {
    const mass = {
      massValue: 5.97237,
      massExponent: 24,
    };
    const vol = {
      volValue: 1.08321,
      volExponent: 12,
    };
    render(<TitleCard name="Earth" type="Planet" mass={mass} vol={vol} />);

    const nameElement = screen.getByText('5.97237');
    const { classList } = nameElement;

    expect(classList).toContain('text-base');
  });
});
