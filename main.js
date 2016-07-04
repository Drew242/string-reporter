var word = prompt("Please Enter a word");

if (word != null) {
  document.getElementById("word-name").innerHTML =
  word;
  document.getElementById("word-length").innerHTML =
  "There are " + word.length + " characters in this word";
  document.getElementById("third-letter").innerHTML =
  "The third letter is '" + word.charAt(2) + "'";
  document.getElementById("lowercase").innerHTML =
  "Lowercase: " + word.toLowerCase();
  document.getElementById("uppercase").innerHTML =
  "Uppercase: " + word.toUpperCase();
  document.getElementById("example").innerHTML =
  "I like the word '" + word + "'";
  document.getElementById("subword").innerHTML =
  "Subword: " + word.substring(1, 4);
}
