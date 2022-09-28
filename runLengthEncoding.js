function runLengthEncoding(str) {
  let response = "";
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    counter++;
    if (str[i] !== str[i + 1] || counter === 9) {
      response += counter + str[i];
      counter = 0;
    }
  }

  return response;
}

let str = "AAAAAAAAAAAAABBCCCCDD";

console.log(runLengthEncoding(str));
