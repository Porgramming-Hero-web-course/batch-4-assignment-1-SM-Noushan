{
  const getProperty = <T, K extends keyof T>(obj: T, key: K) => obj[key];

  //   const person = { name: "Alice", age: 30 };
  //   console.log(getProperty(person, "age"));
}
