interface MyUser {
  name: string;
  id: string;
  email?: string;
}

// interface MyUserOptionals {
//   name?: string;
//   id?: string;
//   email?: string;
// }

type MyUserOptionals = Partial<MyUser>;

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(
  merge(
    {
      name: "Jack",
      id: "foo",
      email: "dontemail@dontemail.com",
    },
    {
      email: "dontemailay@dontemail.com",
    }
  )
);

type RequiredMyUser = Required<MyUser>;

type JustEmailAndName = Pick<MyUser, "email" | "name">;

const mapById = (users: MyUser[]): Record<string, Omit<MyUser, "id">> => {
  return users.reduce((a, v) => {
    const { id, ...other } = v;
    return {
      ...a,
      [id]: other,
    };
  }, {});
};

console.log(
  mapById([
    { id: "foo", name: "Mr. Foo" },
    { id: "baz", name: "Mr. Baz" },
  ])
);
