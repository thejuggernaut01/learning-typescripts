type ThreeCoordinate = [x: number, y: number, z: number];

function add3DCoordinate(
  c1: ThreeCoordinate,
  c2: ThreeCoordinate
): ThreeCoordinate {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
}

console.log(add3DCoordinate([0, 20, 0], [10, 20, 30]));

// TUPLES WITH DIFFERENT TYPES
type StateType = string | boolean | number;

function simpleStringState(
  intial: StateType
): [() => StateType, (v: StateType) => void] {
  let str = intial;
  return [() => str, (v) => (str = v)];
}

const [initialState1, setInitialState1] = simpleStringState("Ayoola");
const [initialState2, setInitialState2] = simpleStringState(false);
const [initialState3, setInitialState3] = simpleStringState(20);

console.log(initialState1());
setInitialState1("kayode");
console.log(initialState1());

console.log(initialState2());
setInitialState2(true);
console.log(initialState2());

console.log(initialState3());
setInitialState3(100);
console.log(initialState3());
