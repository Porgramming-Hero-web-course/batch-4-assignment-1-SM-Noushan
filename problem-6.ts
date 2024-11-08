{
  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  const updateProfile = (
    profile: Profile,
    update: Partial<Profile>
  ): Profile => {
    return { ...profile, ...update };
  };

  //   const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
  //   console.log(updateProfile(myProfile, { age: 29 }));
}
