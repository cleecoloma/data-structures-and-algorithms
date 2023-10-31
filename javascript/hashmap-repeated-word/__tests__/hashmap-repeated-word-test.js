const repeatedWord = require("../hashmap-repeated-word.js");

describe("repeatedWord Function Tests", () => {
  it("Test 1: Should find the first repeated word", () => {
    const input = "Once upon a time, there was a brave princess who...";
    const result = repeatedWord(input);
    expect(result).toBe("a");
  });

  it("Test 2: Should find the first repeated word", () => {
    const input =
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...";
    const result = repeatedWord(input);
    expect(result).toBe("it");
  });

  it("Test 3: Should find the first repeated word", () => {
    const input =
      "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...";
    const result = repeatedWord(input);
    expect(result).toBe("summer");
  });

  it("Test 4: Should handle an empty string", () => {
    const input = "";
    const result = repeatedWord(input);
    expect(result).toBe("No repeated word found");
  });

  it("Test 5: Should handle a string with no repeated words", () => {
    const input = "This is a test string with no repeated words.";
    const result = repeatedWord(input);
    expect(result).toBe("No repeated word found");
  });

  it("Test 6: Should handle a string with a single word", () => {
    const input = "SingleWord";
    const result = repeatedWord(input);
    expect(result).toBe("No repeated word found");
  });
});
