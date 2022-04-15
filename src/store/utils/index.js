const defaultPriority = {
  Planet: 1,
  'Dwarf Planet': 2,
  Moon: 3,
  Star: 4,
  Asteroid: 5,
  Comet: 6,

};

export default function orderByPriority(
  bodies,
  property,
  priority = defaultPriority,
) {
  return bodies.sort(
    (bodyA, bodyB) => priority[bodyA[property]] - priority[bodyB[property]],
  );
}
