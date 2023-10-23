// FUNCTION PARAMETER
export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

// FUNCTION WITH PARAMS
export function arrayMutate(
  numbers: number[],
  mutate: (v: number) => number
): number[] {
  return numbers.map(mutate);
}

// FUNCTION AS TYPES
export type MutationFunction = (v: number) => number;

export function arrayMutate2(
  numbers: number[],
  mutate: MutationFunction
): number[] {
  return numbers.map(mutate);
}

const myNewMutateFunc: MutationFunction = (v: number) => v * 10;

console.log(arrayMutate([1, 20, 3], (v) => v * 10));

// RETURNING FUNCTIONS
export type AdderFunction = (v: number) => number;

export function createAdder(val: number): AdderFunction {
  return (num: number) => num + val;
}

const addOne = createAdder(1);
console.log(addOne(55));
