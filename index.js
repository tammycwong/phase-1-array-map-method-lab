const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  function capitalWord(word) {
    const split = word.split("");
    split[0] = split[0].toUpperCase();
    return split.join("");
  }
  function titleCaseString(sentence) {
    const sentenceSplit = sentence.split(" ");
    const capitalized = sentenceSplit.map(capitalWord);
    return capitalized.join(" ");
  }
  return tutorials.map(titleCaseString);
}