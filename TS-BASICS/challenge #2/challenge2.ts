function myForEach<T>(items: T[], forEachFunc: (v: T) => void): void {
  items.reduce((acc, val) => {
    forEachFunc(val);

    return undefined;
  }, undefined);
}

// myForEach(["a", "b", "c"], (v) => console.log(v));

function myFilter<T>(values: T[], filterFunc: (v: T) => boolean): T[] {
  return values.reduce((a, v) => (filterFunc(v) ? [...a, v] : a), [] as T[]);
}

console.log(myFilter([1, 2, 3, 4, 5, 6, 7], (v) => v % 2 === 0));

function myMap<T, K>(values: T[], mapFunc: (val: T) => K): K[] {
  return values.reduce((a, v) => [...a, mapFunc(v)], [] as K[]);
}

const preMapped = [1, 2, 3];
const mapped = myMap(preMapped, (v) => (v * 10).toString());

console.log(mapped);
