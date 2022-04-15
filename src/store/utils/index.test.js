import orderByPriority from '.';

const bodies = [
  {
    id: 1,
    value: 'value 1',
    bodyType: 'Moon',
  },
  {
    id: 2,
    value: 'value 2',
    bodyType: 'Star',
  },
  {
    id: 3,
    value: 'value 3',
    bodyType: 'Planet',
  },
  {
    id: 4,
    value: 'value 4',
    bodyType: 'Comet',
  },
  {
    id: 5,
    value: 'value 5',
    bodyType: 'Asteroid',
  },
  {
    id: 6,
    value: 'value 6',
    bodyType: 'Dwarf Planet',
  },
];

describe('orderByPriority', () => {
  it('should return an array with correct order', () => {
    const expectedResult = [
      { id: 3, value: 'value 3', bodyType: 'Planet' },
      { id: 6, value: 'value 6', bodyType: 'Dwarf Planet' },
      { id: 1, value: 'value 1', bodyType: 'Moon' },
      { id: 2, value: 'value 2', bodyType: 'Star' },
      { id: 5, value: 'value 5', bodyType: 'Asteroid' },
      { id: 4, value: 'value 4', bodyType: 'Comet' },
    ];

    const orderedBodies = orderByPriority(bodies, 'bodyType');
    expect(orderedBodies).toEqual(expectedResult);
  });
});
