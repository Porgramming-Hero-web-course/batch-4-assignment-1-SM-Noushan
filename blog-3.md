# Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

The big advantage of TypeScript's type system compared to JavaScript is that more errors can be caught at compile-time rather than at runtime. TypeScript's type inference alone, however, is often insufficient, especially when working with union or complex types. **Type Guards** play a very important role here, whereby they help the TypeScript compiler improve its type safety by narrowing down the type of a variable at runtime, thus enabling cleaner and more dependable code.

Type guarding allows explicit types of variable checking and, consequently refines or narrows their types to help TypeScript catch errors at dynamic situations. An example of these is union types involving primitives or custom classes using type guards; these avoid the need for any types-which basically preserve type safety.

## Key Types of Type Guards:

1.  **`typeof` Type Guard** : Makes it useful for differentiate between primitive types like `string`, `number`, and `boolean` within union types.

    #### Example

    ```typescript
    type StringNumber = string | number;

    function addValue(value1: StringNumber, value2: StringNumber) {
      if ((typeof value1 === "string") | (typeof value2 === "string")) {
        console.log("output:", parseInt(value1) + parseInt(value2));
      } else {
        console.log("Output:", value1 + value2);
      }
    }

    addValue("1", "2"); // Output: 3
    addValue(1, 2); // Output: 3
    ```

2.  **`instanceof` Type Guard** : Best for checking against an instance of a certain class. It's very useful if you have your own classes or even the built-in objects like `Date` and `Array`.

    #### Example

    ```typescript
    class Cat {
      meow() {
        console.log("Meow!");
      }
    }

    class Dog {
      bark() {
        console.log("Woof!");
      }
    }

    function makeSound(animal: Cat | Dog) {
      if (animal instanceof Cat) {
        animal.meow();
      } else {
        animal.bark();
      }
    }

    makeSound(new Cat()); // Output: Meow!
    makeSound(new Dog()); // Output: Woof!
    ```

3.  **`in` Type Guard** : This checks whether a property exists in the object. It is helpful when using interfaces or types where some properties may separate them from all other ones.

    #### Example

    ```typescript
    interface Admin {
      role: string;
    }

    interface User {
      username: string;
    }

    function getUserInfo(person: Admin | User) {
      if ("role" in person) {
        console.log("Admin role:", person.role);
      } else {
        console.log("User name:", person.username);
      }
    }

    getUserInfo({ role: "Admin" }); // Output: Admin role: Admin
    getUserInfo({ username: "user123" }); // Output: User name: user123
    ```

4.  **Custom Type Guards** : These are functions developed by the user that narrow or refine types based on runtime checks. These come in great when one is dealing with complex types or actually using nested properties. Type guards will let you have more readable code, and less runtime errors will make your TypeScript application more reliable and maintainable.

    #### Example

    ```typescript
    interface Fish {
      swim: () => void;
    }

    interface Bird {
      fly: () => void;
    }

    function isFish(animal: Fish | Bird): animal is Fish {
      return (animal as Fish).swim !== undefined;
    }

    function move(animal: Fish | Bird) {
      if (isFish(animal)) {
        animal.swim();
      } else {
        animal.fly();
      }
    }

    const fish: Fish = { swim: () => console.log("Swimming!") };
    const bird: Bird = { fly: () => console.log("Flying!") };

    move(fish); // Output: Swimming!
    move(bird); // Output: Flying!
    ```

    In this case, `isFish` is a custom type guard function that checks if the `animal` object has a `swim` property. The `animal is Fish` syntax tells TypeScript that within the `if` block, `animal` should be treated as a `Fish`.

## Summary

Type guards are a powerful feature in TypeScript that help improve type safety by refining types at runtime. With type guards, you can ensure that your code behaves as expected and reduce the risk of runtime errors. Incorporating type guards into your TypeScript code will lead to more readable, maintainable, and error-free applications.
