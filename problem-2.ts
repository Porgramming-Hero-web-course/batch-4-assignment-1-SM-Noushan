{
  const removeDuplicates = (arr: number[]): number[] =>
    // indexOf returns the index of the first occurrence of the element
    arr.filter((val: number, idx: number) => arr.indexOf(val) === idx);

  // console.log(removeDuplicates([1, 3, 2, 2, 3, 5, 4, 4, 5]));
}
