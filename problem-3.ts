{
  const countWordOccurrences = (sentence: string, word: string): number =>
    sentence.toLowerCase().split(word.toLowerCase()).length - 1;

  // console.log(countWordOccurrences("I love typescript", "typescript"));
}
