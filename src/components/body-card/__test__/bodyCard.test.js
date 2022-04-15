import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import BodyCard from '../bodyCard';

describe('BodyCard', () => {
  const handleBodyCardClick = (id) => id;
  afterEach(cleanup);

  it('renders correctly in the DOM', () => {
    const tree = renderer
      .create(
        <BodyCard
          bodyId="terre"
          name="Earth"
          moonsNumber={1}
          orbitsAround="Sun"
          handleClick={(id) => handleBodyCardClick(id)}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with the given name', () => {
    render(
      <BodyCard
        bodyId="terre"
        name="Earth"
        moonsNumber={1}
        orbitsAround="Sun"
        handleClick={(id) => handleBodyCardClick(id)}
      />,
    );

    const nameElement = screen.getByText('Earth');
    const { classList } = nameElement;

    expect(classList).toContain('text-2xl');
  });

  it('renders with the given moonsNumber', () => {
    render(
      <BodyCard
        bodyId="terre"
        name="Earth"
        moonsNumber={1}
        orbitsAround="Sun"
        handleClick={(id) => handleBodyCardClick(id)}
      />,
    );

    const nameElement = screen.getByText(/moons$/);
    const { classList } = nameElement;

    expect(classList).toContain('whitespace-nowrap');
  });
});
