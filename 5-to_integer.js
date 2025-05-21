const arg = Number(process.argv[2]);

if (Number.isInteger(arg)) {
  console.log(`My number: ${arg}`);
} else {
  console.log('Not a number');
}