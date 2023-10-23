function addNumbers(a: number, b: number): number {
  return a + b;
}

export default addNumbers;

// DEFAULT PARAMETERS
export const addStrings = (str1: string, str2: string = ""): string => {
  return `${str1} ${str2}`;
};

// UNION TYPES
export const format = (title: string, param: string | number): string => {
  return `${title} ${param}`;
};

// VOID FUNCTIONS
export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param));
};

// PROMISE FUNCTION
// export const fetchData = (url: string): Promise<string> => {
//   return Promise.resolve(`Data from ${url}`);
// };

// REST PARAMETERS
export function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join(" ")}`;
}

// #1 MISCONCEPTION: WHEN ARE TYPES ENFORCED BY TS
export function getName(user: { first: string; last: string }): string {
  return `${user?.first ?? "Ayoola"} ${user?.last ?? "Adewale"}`;
}
