const num = parseInt(process.argv[2]);

if (isNaN(num)) {
  console.log('Missing number of occurrences'); // ✅ 1st console.log
} else {
  for (let i = 0; i < num; i++) {
    console.log('C is fun'); // ✅ 2nd console.log (executed multiple times)
  }
}