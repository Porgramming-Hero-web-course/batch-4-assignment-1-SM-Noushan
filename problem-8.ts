{
  const validateKeys = <T>(obj: T, keys: string[]): boolean => {
    let isValid = true;
    const objKeys = Object.keys(obj as object);
    return keys.every((key: string) => {
      if (!objKeys.includes(key)) isValid = false;

      return isValid;
    });
  };

  //   const person = { name: "Alice", age: 25, email: "alice@example.com" };
  //   console.log(validateKeys(person, ["name", "email", "age", "contact"]));
}
