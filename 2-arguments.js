const args = process.argv.slice(2);
const count = args.length;

if (args.length === 0) {
  console.log("0 arguments");
} else if (args.length === 1) {
    console.log("1 Argument");
} else {
    console.log(`${count} arguments`);
}