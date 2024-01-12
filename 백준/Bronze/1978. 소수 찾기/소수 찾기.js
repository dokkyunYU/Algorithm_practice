const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = []
readline.on('line', line => {
  input.push(line.split(' ').map(cur => +cur));
}).on('close', () => {
  const [[n], numArr] = input;
  let cnt = 0;
  for (const num of numArr) {
    if (num === 1)
      continue;
    let t = 1;
    for (let i = 2; i <= Math.sqrt(num); ++i)
      if (num % i === 0) {
        t = 0;
        break;
      }
    if (t)
      ++cnt;
  }
  console.log(cnt);
})