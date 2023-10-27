function printIngredient(quantity: string, ingredient: string, extra?: string) {
  console.log(`${quantity} ${ingredient} ${extra ? extra : ""}`);
}

printIngredient("1C", "Flour");
printIngredient("1C", "Sugar", "Something more");

interface User {
  id: string;
  info?: {
    email?: string;
  };
}

function getEmail(user: User): string {
  if (user.info) {
    return user.info.email!;
  }
  return "";
}
