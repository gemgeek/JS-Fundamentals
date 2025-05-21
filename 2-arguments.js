const args = process.argv.slice(2);
const count = args.length;

if (count === 1) {
  console.log("1 argument");
} else {
  console.log(`${count} arguments`);
}