// Example 1: Readonly Properties
type MyReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

type ReadOnlyExampleType = { name: string; age: number };

type ReadOnlyExample = MyReadOnly<ReadOnlyExampleType>;

// Example 2: Optional Properties
type MakeOptional<T> = {
  [K in keyof T]?: T[K];
};

type OptionalExampleType = { name: string; age: number };

type OptionalExample = MakeOptional<OptionalExampleType>;

// Another example
type MyFlexibleDogInfor = {
  name: string;
  [key: string]: string | number;
};

const dog: MyFlexibleDogInfor = {
  name: "LG",
  breed: "Mutt",
  age: 22,
};

// Another example
interface DogInfo {
  name: string;
  age: number;
}

type OptionsFlags<T> = {
  [Property in keyof T]: null;
};

type DogInfoOptions = OptionsFlags<DogInfo>;

type Listeners<Type> = {
  [Property in keyof Type as `on${Capitalize<string & Property>}Change`]: (
    v: Type[Property]
  ) => void;
} & {
  [Property in keyof Type as `on${Capitalize<
    string & Property
  >}Delete`]: () => void;
};

function listenToObject<T>(obj: T, listeners: Listeners<T>): void {
  throw "Needs to be implemented";
}

const lg: DogInfo = {
  name: "LG",
  age: 13,
};

type DogInfoListeners = Listeners<DogInfo>;

listenToObject(lg, {
  onNameChange: (v: string) => {},
  onAgeChange: (v: number) => {},
  onAgeDelete: () => {},
  onNameDelete: () => {},
});
