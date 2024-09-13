// Added record utility type. This ensures that any time we add or modify an entry in productPrices, the key must be a string, and the value must be a number.
// Flexible, safe approach if we were to call getPrice and pass a value that didn't exist like getPrice('Pear').

// const productPrices: Record<string, number> = {
//   Apple: 1.2,
//   Banana: 0.5,
//   Orange: 0.8,
// };

// const getPrice = (productName: string) => {
//   return productPrices[productName];
// };

// Alternatively, if productPrices is a constant object, we can use the following approach:
const productPrices = {
  Apple: 1.2,
  Banana: 0.5,
  Orange: 0.8,
};

const getPrice = (productName: string) => {
  // cast productName to keyof typeof productPrices to ensure that the key exists in productPrices
  return productPrices[productName as keyof typeof productPrices];
};
