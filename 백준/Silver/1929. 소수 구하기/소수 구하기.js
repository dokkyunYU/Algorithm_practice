const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = []

readline.on('line', line => {
  input = line.split(' ').map(cur => +cur);
}).on('close', () => {
  const nums = [2];
  const [start, end] = input;
  for (let i = 3; i <= end; ++i) {
    let t = 1;
    for (let j = 2; j <= Math.sqrt(i); ++j) {
      if (i % j === 0) {
        t = 0;
        break;
      }
    }
    if (t)
      nums.push(i);
  }
  nums.slice(nums.findIndex(cur => cur >= start)).forEach(cur => process.stdout.write(cur + ' '))
})