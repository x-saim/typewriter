/*
Our goal is to animate the sentence, revealing one character at a time. This would make it look as though it is being typed in by someone,
*/

const sentence = "hello there from lighthouse labs";
let timeDelay = 50 // 50 ms interval/delay
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timeDelay);
  timeDelay += 50;
}
