var range = 34;
for (var i = 2; i < range; i++) {
  var flag = 0;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = 1;
      break;
    }
  }
  if (flag == 0) console.log(`${i} is prime number`);
}
