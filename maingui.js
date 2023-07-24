const countWords = () => {
  let string = document.querySelector(".user-input").value;
  let wordList = string.toLowerCase().match(/[a-z]/gi);
  document.querySelector(".word-output").innerHTML = JSON.stringify(
    wordList.reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {})
  )
    .replace(/[, ]+/g, " ")
    .replace(/['"]+/g, "")
    .replace(/[{}]+/g, "");
};

//gi
//g flag = means global
//i flag- case insensitive
